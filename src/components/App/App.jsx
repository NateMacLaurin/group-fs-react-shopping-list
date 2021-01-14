import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
//import ListForm from '../ListForm/ListForm.jsx';

function App() {

    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState(0);
    let [itemUnit, setItemUnit] = useState('');
    //let [listArray, setListArray] = useState([]);

    const addPerson = (evt) => {
        evt.preventDefault();
        console.log( `The person is ${famousPersonName} and they're famous for ${famousPersonRole}` );
        
        // create POST request to add this new person to the database
        axios.post('/list', {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        }).then((response) => {
            console.log('Response:', response.data);
            //get render function
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
