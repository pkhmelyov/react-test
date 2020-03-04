import React from 'react';

import TableHead from './tableHead';
import TableBody from './tableBody';
import Pager from './pager';
import SearchPanel from './searchPanel';
import ItemDetails from './itemDetails';

class Grid extends React.Component {
    constructor(props) {
        super(props);

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

    onColumnHeaderClick = key => () => this.toggleSorting(key);

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

    onPagingBackClick = () => {
        const paging = { ...this.state.paging };
        if(paging.page === 1) return;
        paging.page--;
        this.setState({ paging });
    };

    onPagingForwardClick = () => {
        const paging = { ...this.state.paging };
        if(paging.page * paging.size >= this.totalCount()) return;
        paging.page++;
        this.setState({ paging });
    };

    onSearchInputChange = (e) => {
        const filter = { ...this.state.filter };
        filter.searchTerm = e.target.value;
        this.setState({ filter });
    };

    onSearchButtonClick = () => {
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
    };

    onRowClick = item => () => this.setState({ selectedItem: item });

    render() {
        const { columns } = this.props;
        return (
            <div>
                <SearchPanel searchTerm={this.state.filter.searchTerm} onInputChange={this.onSearchInputChange} onButtonClick={this.onSearchButtonClick} />
                <table>
                    <TableHead columns={columns} sortingState={this.state.sorting} onColumnHeaderClick={this.onColumnHeaderClick} />
                    <TableBody items={this.getPagedRows()} columns={columns} onRowClick={this.onRowClick} />
                </table>
                <Pager
                    totalItemsCount={this.totalCount()}
                    pagingState={this.state.paging}
                    onPagingBackClick={this.onPagingBackClick}
                    onPagingForwardClick={this.onPagingForwardClick} />
                <ItemDetails item={this.state.selectedItem} />
            </div>
        );
    }
}

export default Grid;
