import { useState } from 'react';
import axios from 'axios';
import './ListItem.css';

function ListItem({ item, fetchList }) {

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

    const [isBought, setIsBought] = useState(true);

    const markBought = () => {
        console.log('clicked Buy', isBought);
        setIsBought(!isBought);
    } // end markBought

    console.log('logging item:', item);

    return (
        <div key={item.id} className="itemBox">
            <h3>{item.name}</h3>
            <p>{item.quantity} {item.unit}</p>
            {isBought 
                ? <span><button onClick={markBought}>Buy</button> <button onClick={deleteItem}>Remove</button></span>
                : <span>Purchased</span>}
        </div>  
    )
} // end ListItem

export default ListItem;