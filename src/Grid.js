import React from 'react';

class Grid extends React.Component {
    render() {
        const { data } = this.props;

        if(!(data && data.length)) {
            return (
                <div>Нет данных...</div>
            );
        }

        const firstRow = data[0];
        const columnCaptions = Object.keys(firstRow);
        const columns = columnCaptions.map(x => (<th>{x}</th>));

        return (
            <table>
                <tr>{columns}</tr>
                <tr><td>Тут должны строки с данными</td></tr>
            </table>
        );
    }
}

export default Grid;
