import ListItem from '../ListItem/ListItem';

function ShoppingList({ shoppingList }) {
    console.log('logging shopping list', shoppingList);

    return (
        <div>
            <div>
                <h1>Shopping List</h1>
                <button>Reset</button><button>Clear</button>
            </div>
            <div>
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