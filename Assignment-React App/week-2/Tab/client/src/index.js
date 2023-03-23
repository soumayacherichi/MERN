import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tabs from './components/Tab';

const items = [
  { label: 'Tab 1', content: 'This is the content of Tab 1.' },
  { label: 'Tab 2', content: 'This is the content of Tab 2.' },
  { label: 'Tab 3', content: 'This is the content of Tab 3.' },
];
ReactDOM.render(<Tabs items={items} />, document.getElementById('root'));
reportWebVitals();
