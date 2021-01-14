import ListItem from '../ListItem/ListItem';
import "./ShoppingList.css";

function ShoppingList({ shoppingList }) {
    console.log('logging shopping list', shoppingList);

    return (
        <div>
            <div className="listHead">
                <h1>Shopping List</h1>
                <button>Reset</button><button>Clear</button>
            </div>
            <div className="listContainer">
                {shoppingList.map(item =>
                (<ListItem
                    item={item}
                />)
                )}
            </div>
        </div>
    )
} // end ShoppingList


export default ShoppingList;