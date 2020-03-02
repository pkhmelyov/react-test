import React from 'react';

import './sortingIndicator.css';

function SortingIndicator({ columnKey, sortingState }) {
    const { column, asc } = sortingState;
    return (columnKey === column) && (
        <span className={`sorting-indicator ${asc ? 'sort-asc' : 'sort-desc'}`}></span>
    );
}

export default SortingIndicator;
