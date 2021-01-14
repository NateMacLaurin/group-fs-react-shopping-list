import React from 'react';
import { useEffect, useState } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    useEffect(() => {
        fetchCreatures();
    }, [])

    const [shoppingList, setShoppinglist] = useState([]);

    const fetchList = () => {
        axios({
            method: 'GET',
            url: '/list'
        })
            .then((response) => {
                console.log('all response', response);
                console.log('data only', response.data);
                setShoppingList(response.data);
            })
            .catch(function (error) {
                console.log('error on get', error);
            });
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
