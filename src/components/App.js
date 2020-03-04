import React from 'react';
import './App.css';

import Grid from './grid';

function App() {
  const columns = [
    { key: 'id', text: '№' },
    { key: 'firstName', text: 'Имя' },
    { key: 'lastName', text: 'Фамилия' },
    { key: 'email', text: 'Email' },
    { key: 'phone', text: 'Телефон' }
  ];
  return (<Grid columns={columns} url={ 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}' }/>);
}

export default App;
