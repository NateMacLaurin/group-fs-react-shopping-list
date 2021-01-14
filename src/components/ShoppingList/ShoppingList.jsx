function ShoppingList(shoppingList) {
    return (
        <div>
            <div>
                <h1>Shopping List</h1>
                <button>Reset</button><button>Clear</button>
            </div>
            {shoppingList.map( item =>
                (<div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.quanity} {item.unit}</p>
                    <button>Buy</button><button>Remove</button>
                </div>)
            )}
        </div>
    )
} // end ShoppingList


export default ShoppingList;