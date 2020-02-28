import React from 'react';

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

    columnHeader(caption) {
        return (<th onClick={this.onColumnHeaderClick}>{caption}</th>);
    }

    render() {
        const { data } = this.props;

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
            <table>
                <tr>{columns}</tr>
                {rows}
            </table>
        );
    }
}

export default Grid;
