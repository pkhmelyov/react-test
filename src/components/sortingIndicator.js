import React from 'react';

import './sortingIndicator.css';

function SortingIndicator({ columnKey, sortingState }) {
    const { column, asc } = sortingState;
    if (columnKey === column) {
        return (
            <span className={`sorting-indicator ${asc ? "sort-asc" : "sort-desc"}`}></span>
        );
    }
    return null;
}

export default SortingIndicator;
