import React from 'react';

import SortingIndicator from './sortingIndicator';

import './columnHeader.css';

function ColumnHeader({ definition, sortingState, onClick }) {
    const { key, text } = definition;
    return (
        <th className='column-header' onClick={onClick(key)}>
            {text}
            <SortingIndicator columnKey={key} sortingState={sortingState} />
        </th>
    );
}

export default ColumnHeader;
