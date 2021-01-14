import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList';
import ListForm from '../ListForm/ListForm.jsx';

const dummyShopList = [
    {id: 1, name: 'Bread', quantity: 2, unit: 'loaves' },
    {id: 2, name: 'Eggs', quantity: 1, unit: 'dozen' },
    {id: 3, name: 'Milk', quantity: 1, unit: 'gallon' }
  ];

function App() {

    const [shoppingList, setShoppingList] = useState(dummyShopList);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemUnit, setItemUnit] = useState('');
    // const [shoppingList, setShoppinglist] = useState([]);

    useEffect( () => {
        fetchList();
    }, [])

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
     
    const addItem = (evt) => {
        evt.preventDefault();
        // create POST request to add this new person to the database
        axios.post('/list', {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        }).then((response) => {
            console.log('Response:', response.data);
            fetchList();
            setItemName('');
            setItemQuantity(0);
            setItemUnit('');
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            <ListForm 
                itemName={itemName}
                itemQuantity={itemQuantity}
                itemUnit={itemUnit}
                setItemName={setItemName}
                setItemQuantity={setItemQuantity}
                setItemUnit={setItemUnit}
                addItem={addItem}
            />
            <ShoppingList 
                shoppingList={shoppingList}
            />
            </main>
        </div>
    );
}

export default App;
