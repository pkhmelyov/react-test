import React from 'react';

import './pager.css';

function Pager({ pagingState, totalItemsCount, onPagingBackClick, onPagingForwardClick }) {
    const { size, page } = pagingState;
    const pagesCount = Math.ceil(totalItemsCount / size);
    return pagesCount > 1 && (
        <div className='pager'>
            <span onClick={onPagingBackClick}>←</span>
            Страница {page} из {pagesCount}
            <span onClick={onPagingForwardClick}>→</span>
        </div>
    );
}

export default Pager;
