import ListItem from '../ListItem/ListItem';
import "./ShoppingList.css";

function ShoppingList({ shoppingList, fetchList }) {
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