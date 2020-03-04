import React from 'react';

function ItemDetails({ item }) {
    return !!item && (
        <div className="item-details">
            <div className="line">
                Выбран пользователь <b>{item.firstName} {item.lastName}</b>
            </div>
            <div className="line">
                Описание:<br />
                <textarea value={item.description} readOnly={true} />
            </div>
            <div className="line">
                Адрес проживания: <b>{item.address.streetAddress}</b>
            </div>
            <div className="line">
            Город: <b>{item.address.city}</b>
            </div>
            <div className="line">
                Провинция/штат: <b>{item.address.state}</b>
            </div>
            <div className="line">
                Индекс: <b>{item.address.zip}</b>
            </div>
        </div>
    );
}

export default ItemDetails;