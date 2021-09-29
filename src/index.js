import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./App.css";
import header from './components/Header';
import counter from './components/Counter';
import { PropertyListingsConsumer } from './components/Propertylistings';


ReactDOM.render(
   
  <App/>
  <Header/>
  <Counter/>
  <Propertylistings/>
    ,

  document.getElementById('root')
  
);


