import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
//import ListForm from '../ListForm/ListForm.jsx';

function App() {

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemUnit, setItemUnit] = useState('');
    const [shoppingList, setShoppinglist] = useState([]);

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
     
    const addPerson = (evt) => {
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
            </main>
        </div>
    );
}

export default App;
