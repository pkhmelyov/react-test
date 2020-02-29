import React from 'react';

import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.columnHeader = this.columnHeader.bind(this);
        this.onColumnHeaderClick = this.onColumnHeaderClick.bind(this);
        this.onPagingBackClick = this.onPagingBackClick.bind(this);
        this.onPagingForwardClick = this.onPagingForwardClick.bind(this);

        this.state = {
            sorting: {
                column: '',
                asc: true
            },
            paging: {
                size: 50,
                page: 1
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

    onColumnHeaderClick(e) {
        this.toggleSorting(e.target.innerText)
    }

    getSortedRows() {
        const result = [ ...this.props.data ];
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

    getPagedRoles() {
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

    columnHeader(caption) {
        return (<th onClick={this.onColumnHeaderClick}>{caption}{this.sortingIndicator(caption)}</th>);
    }

    totalCount() {
        return this.props.data.length;
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

    pager() {
        const paging = { ...this.state.paging };
        const rowsCount = this.totalCount();
        const pagesCount = Math.ceil(rowsCount / paging.size);
        return pagesCount > 1 && (
            <div>
                <span onClick={this.onPagingBackClick}>←</span>
                Page {paging.page} of {pagesCount}
                <span onClick={this.onPagingForwardClick}>→</span>
            </div>
        );
    }

    render() {
        const data = this.getPagedRoles();//this.getSortedRows();

        if(!(data && data.length)) {
            return (
                <div>Нет данных...</div>
            );
        }

        const firstRow = data[0];
        const columnCaptions = Object.keys(firstRow);
        const columns = columnCaptions.map(this.columnHeader);

        const rows = data.map(row => {
            const cells = columnCaptions.map(column => (<td>{row[column]}</td>));
            return (<tr>{cells}</tr>);
        });

        return (
            <div className={"Grid"}>
                <table>
                    <tr>{columns}</tr>
                    {rows}
                </table>
                {this.pager()}
            </div>
        );
    }
}

export default Grid;
