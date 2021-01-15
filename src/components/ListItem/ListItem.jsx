import axios from 'axios';
import './ListItem.css';

function ListItem({ item, fetchList }) {

    const deleteItem = () => {
        console.log('clicked Remove');
        console.log('id:', item.id);

        axios.delete(`/list/${item.id}`)
            .then((response) => {
                console.log(response);
                fetchList();
            }).catch((err) => {
                console.log(err);
            })
    } // end deleteItem

    const markBought = () => {
        console.log('clicked Buy');
        console.log('id:', item.id);
    } // end markBought

    console.log('logging item:', item);

    return (
        <div key={item.id} className="itemBox">
            <h3>{item.name}</h3>
            <p>{item.quantity} {item.unit}</p>
            <button onClick={markBought}>Buy</button><button onClick={deleteItem}>Remove</button>
        </div>
    )
} // end ListItem

export default ListItem;