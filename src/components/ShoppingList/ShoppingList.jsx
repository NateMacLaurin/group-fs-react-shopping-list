import ListItem from '../ListItem/ListItem';
import "./ShoppingList.css";
import axios from 'axios';
import { useState } from 'react';

function ShoppingList({ shoppingList, fetchList }) {
    
    const [reset, setReset] = useState(false);

    console.log('logging shopping list', shoppingList);

    const deleteRows = () => {
        console.log('clicked clear');
        axios.delete('/list/deleteall')
        .then((response) => {
            console.log('deleteall');
            fetchList();
        }).catch((err) => {
            console.log(err);
        })
     }
     //if i hit reset
     //each list item should check bought state, if bought -> flip back to unbought

     const resetBought = () => {
         console.log(`Reset Bought clicked`);
         setReset(true);
     }

    return (
        <div>
            <div className="listHead">
                <h1>Shopping List</h1>
                <button onClick = {resetBought}>Reset</button><button onClick = {deleteRows}>Clear</button>
            </div>
            <div className="listContainer">
                {shoppingList.map(item =>
                (<ListItem
                    key={item.id}
                    item={item}
                    fetchList={fetchList}
                    reset={reset}
                />)
                )}
            </div>
        </div>
    )
} // end ShoppingList


export default ShoppingList;