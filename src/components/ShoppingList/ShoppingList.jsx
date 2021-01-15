import ListItem from '../ListItem/ListItem';
import "./ShoppingList.css";
import axios from 'axios';

function ShoppingList({ shoppingList, fetchList }) {
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

    return (
        <div>
            <div className="listHead">
                <h1>Shopping List</h1>
                <button>Reset</button><button onClick = {deleteRows}>Clear</button>
            </div>
            <div className="listContainer">
                {shoppingList.map(item =>
                (<ListItem
                    key={item.id}
                    item={item}
                    fetchList={fetchList}
                />)
                )}
            </div>
        </div>
    )
} // end ShoppingList


export default ShoppingList;