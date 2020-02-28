import React from 'react';

import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.columnHeader = this.columnHeader.bind(this);
        this.onColumnHeaderClick = this.onColumnHeaderClick.bind(this);

        this.state = { sorting: { column: '', asc: true } };
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
        const sorting = { ...this.state.sorting };
        if(sorting.column) {
            const result = [ ...this.props.data ];
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
            return result;
        } else {
            return [ ...this.props.data ];
        }
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

    render() {
        const data = this.getSortedRows();

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
            <table className={"Grid"}>
                <tr>{columns}</tr>
                {rows}
            </table>
        );
    }
}

export default Grid;
