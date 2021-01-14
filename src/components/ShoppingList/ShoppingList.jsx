import ListItem from '../ListItem/ListItem'

function ShoppingList(shoppingList) {
    return (
        <div>
            <div>
                <h1>Shopping List</h1>
                <button>Reset</button><button>Clear</button>
            </div>
            {shoppingList.map( item =>
                (<ListItem item={item})
            )}
        </div>
    )
} // end ShoppingList


export default ShoppingList;