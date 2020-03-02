import React from 'react';

import SortingIndicator from './sortingIndicator';

function ColumnHeader({ definition, sortingState, onClick }) {
    const { key, text } = definition;
    return (
        <th onClick={onClick(key)}>
            {text}
            <SortingIndicator columnKey={key} sortingState={sortingState} />
        </th>
    );
}

export default ColumnHeader;
