import React from 'react';

import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.onColumnHeaderClick = this.onColumnHeaderClick.bind(this);
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

    sortingIndicator(caption) {
        const { column, asc } = this.state.sorting;
        if(column === caption) {
            return (<span className={asc ? "sort-asc" : "sort-desc"}></span>)
        }
    }

    columnHeaders() {
        return this.props.columns.map(column => (
            <th onClick={this.onColumnHeaderClick(column.key)}>
                {column.text}{this.sortingIndicator(column.key)}
            </th>
        ));
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

    pager() {
        const paging = { ...this.state.paging };
        const rowsCount = this.totalCount();
        const pagesCount = Math.ceil(rowsCount / paging.size);
        return pagesCount > 1 && (
            <div>
                <span onClick={this.onPagingBackClick}>←</span>
                Страница {paging.page} из {pagesCount}
                <span onClick={this.onPagingForwardClick}>→</span>
            </div>
        );
    }

    rows() {
        const data = this.getPagedRows();

        const rows = data.map(row => {
            const cells = this.props.columns.map(column => (<td>{row[column.key]}</td>));
            return (<tr onClick={this.onRowClick(row)}>{cells}</tr>);
        });

        return rows;
    }

    onRowClick(item) {
        return () => {
            this.setState({ selectedItem: item });
        };
    }

    render() {
        return (
            <div className={"Grid"}>
                {this.filter()}
                <table>
                    <tr>{this.columnHeaders()}</tr>
                    {this.rows()}
                </table>
                {this.pager()}
            </div>
        );
    }
}

export default Grid;
