import React from 'react';

import ColumnHeader from './columnHeader'

function TableHead({ columns, sortingState, onColumnHeaderClick }) {
    return (
        <thead>
            <tr>
                {columns.map(
                    column =>
                        <ColumnHeader
                            key={column.key}
                            definition={column}
                            sortingState={sortingState}
                            onClick={onColumnHeaderClick}
                        />
                )}
            </tr>
        </thead>
    );
}

export default TableHead;
