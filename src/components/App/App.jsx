import React from 'react';

import {useState} from 'react';
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList';
import './App.css';


const dummyShopList = [
    {id: 1, name: 'Bread', quantity: 2, unit: 'loaves' },
    {id: 2, name: 'Eggs', quantity: 1, unit: 'dozen' },
    {id: 3, name: 'Milk', quantity: 1, unit: 'gallon' }
  ];

function App() {

    const [shoppingList, setShoppingList] = useState(dummyShopList)

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <ShoppingList 
                shoppingList={shoppingList}
            />
        </div>
    );
}

export default App;
