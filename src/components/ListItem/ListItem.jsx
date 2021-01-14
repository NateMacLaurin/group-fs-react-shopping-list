function ListItem(item) {

    const deleteItem = () => {

    } // end deleteItem


    return (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.quanity} {item.unit}</p>
            <button>Buy</button><button>Remove</button>
        </div>
    )
} // end ListItem

export default ListItem;