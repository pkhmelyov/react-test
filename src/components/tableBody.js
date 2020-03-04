import React from 'react';

function TableBody({ items, columns, onRowClick }) {
    return (
        <tbody>
            {items.map(
                (item, index) =>
                    <tr key={index} onClick={onRowClick(item)}>
                        {columns.map(
                            column =>
                                <td key={`${index}-${column.key}`}>
                                    {item[column.key]}
                                </td>
                        )}
                    </tr>
            )}
        </tbody>
    );
}

export default TableBody;
