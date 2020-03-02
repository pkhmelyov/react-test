import React from 'react';

function TableBody({ items, columns, onRowClick }) {
    return (
        <tbody>
            {items.map(
                item =>
                    <tr key={item.id} onClick={onRowClick(item)}>
                        {columns.map(
                            column =>
                                <td key={`${item.id}-${column.key}`}>
                                    {item[column.key]}
                                </td>
                        )}
                    </tr>
            )}
        </tbody>
    );
}

export default TableBody;
