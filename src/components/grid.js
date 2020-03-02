import React from 'react';

import TableHead from './tableHead';
import TableBody from './tableBody';
import Pager from './pager';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.onColumnHeaderClick = this.onColumnHeaderClick.bind(this);
        this.onRowClick = this.onRowClick.bind(this);
        this.onPagingBackClick = this.onPagingBackClick.bind(this);
        this.onPagingForwardClick = this.onPagingForwardClick.bind(this);
        this.onFilterInputChange = this.onFilterInputChange.bind(this);
        this.onFilterButtonClick = this.onFilterButtonClick.bind(this);

        this.state = {
            sorting: {
                column: '',
                asc: true
            },
            paging: {
                size: 5,
                page: 1
            },
            filter: {
                searchTerm: ''
            }
        };
    }

    toggleSorting(column) {
        const sorting = { ...this.state.sorting };
        if(sorting.column === column) {
            if(sorting.asc) {
                sorting.asc = false;
            } else {
                sorting.column = '';
            }
        } else {
            sorting.column = column;
            sorting.asc = true;
        }

        this.setState({ sorting });
    }

    onColumnHeaderClick(key) {
        return () => this.toggleSorting(key);
    }

    getFilteredRows() {
        let filteredRows = this.state.filteredRows;
        if(!filteredRows) {
            filteredRows = [ ...this.props.data ];
            this.setState({ filteredRows });
        }
        return [ ...filteredRows ];
    }

    getSortedRows() {
        const result = this.getFilteredRows();
        const sorting = { ...this.state.sorting };
        if(sorting.column) {
            result.sort((row1, row2) => {
                const x = row1[sorting.column];
                const y = row2[sorting.column];
                if(x === y) {
                    return 0;
                } else {
                    if(x < y) {
                        return sorting.asc ? -1 : 1;
                    } else {
                        return sorting.asc ? 1 : -1;
                    }
                }
            });
        }
        return result;
    }

    getPagedRows() {
        const { page, size } = this.state.paging;
        const data = this.getSortedRows();
        const start = (page - 1) * size;
        const end = page * size;
        return data.slice(start, end);
    }

    totalCount() {
        return this.getFilteredRows().length;
    }

    onPagingBackClick() {
        const paging = { ...this.state.paging };
        if(paging.page === 1) return;
        paging.page--;
        this.setState({ paging });
    }

    onPagingForwardClick() {
        const paging = { ...this.state.paging };
        if(paging.page * paging.size >= this.totalCount()) return;
        paging.page++;
        this.setState({ paging });
    }

    onFilterInputChange(e) {
        const filter = { ...this.state.filter };
        filter.searchTerm = e.target.value;
        this.setState({ filter });
    }

    onFilterButtonClick() {
        const { searchTerm } = this.state.filter;
        const data = [ ...this.props.data ];
        let filteredRows;
        if(!searchTerm) {
            filteredRows = data;
        } else {
            const exp = new RegExp(searchTerm, "i");
            const columnKeys = this.props.columns.map(x => x.key);
            filteredRows = data.filter(x => columnKeys.some(key => exp.test(x[key])));
        }
        this.setState({ filteredRows, paging: { ...this.state.paging, page: 1 } });
    }

    filter() {
        return (
            <div>
                <input type="text" value={this.state.filter.searchTerm} onChange={this.onFilterInputChange} />
                <button onClick={this.onFilterButtonClick}>Найти</button>
            </div>
        );
    }

    onRowClick(item) {
        return () => {
            this.setState({ selectedItem: item });
        };
    }

    itemDetails() {
        const selectedItem = this.state.selectedItem;
        if(selectedItem){
            return (
                <div>
                Выбран пользователь <b>{selectedItem.firstName} {selectedItem.lastName}</b><br />
                Описание:<br />
                <textarea>
                {selectedItem.description}
                </textarea><br />
                Адрес проживания: <b>{selectedItem.address.streetAddress}</b><br />
                Город: <b>{selectedItem.address.city}</b><br />
                Провинция/штат: <b>{selectedItem.address.state}</b><br />
                Индекс: <b>{selectedItem.address.zip}</b>
            </div>
            );
        }
    }

    render() {
        const { columns } = this.props;
        return (
            <div>
                {this.filter()}
                <table>
                    <TableHead columns={columns} sortingState={this.state.sorting} onColumnHeaderClick={this.onColumnHeaderClick} />
                    <TableBody items={this.getPagedRows()} columns={columns} onRowClick={this.onRowClick} />
                </table>
                <Pager
                    totalItemsCount={this.totalCount()}
                    pagingState={this.state.paging}
                    onPagingBackClick={this.onPagingBackClick}
                    onPagingForwardClick={this.onPagingForwardClick} />
                {this.itemDetails()}
            </div>
        );
    }
}

export default Grid;
