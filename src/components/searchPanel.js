import React from 'react';

function SearchPanel({ searchTerm, onInputChange, onButtonClick }) {
    return (
        <div>
            <input type="text" value={searchTerm} onChange={onInputChange} />
            <button onClick={onButtonClick}>Найти</button>
        </div>
    );
}

export default SearchPanel;
