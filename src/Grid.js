import React from 'react';

class Grid extends React.Component {
    render() {
        const { data } = this.props;

        if(!(data && data.length)) {
            return (
                <div>Нет данных...</div>
            );
        }

        return (
            <table>
                <tr><th>Тут должны быть колонки для каждого поля в строке</th></tr>
                <tr><td>Тут должны строки с данными</td></tr>
            </table>
        );
    }
}

export default Grid;
