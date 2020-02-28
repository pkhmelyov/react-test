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
            <div>Здесь будет табличка</div>
        );
    }
}

export default Grid;
