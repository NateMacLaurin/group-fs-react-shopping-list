import axios from 'axios';
import './ListItem.css';
import { useState, useEffect } from 'react';

function ListItem({ item, fetchList, reset}) {
    
    const [isBought, setIsBought] = useState(false);
    
    useEffect( () => {
        resetBought();
    }, [])

    const resetBought = () => {
        if(reset){
            if(isBought){
            setIsBought(!isBought);
            }
        }
    }

    const deleteItem = () => {
        console.log('clicked Remove');
        console.log('id:', item.id);

        axios.delete(`/list/item/${item.id}`)
            .then((response) => {
                console.log(response);
                fetchList();
            }).catch((err) => {
                console.log(err);
            })
    } // end deleteItem

    const markBought = () => {
        console.log('clicked Buy', isBought);
        setIsBought(!isBought);
    } // end markBought

    console.log(`logging item: ${item} Reset Flag: ${reset} Bought value: ${isBought}`);

    return (
        <div key={item.id} className="itemBox">
            <h3>{item.name}</h3>
            <p>{item.quantity} {item.unit}</p>
            {isBought 
                ? <span>Purchased</span>
                : <span><button onClick={markBought}>Buy</button> <button onClick={deleteItem}>Remove</button></span>
            }
        </div>  
    )
} // end ListItem

export default ListItem;