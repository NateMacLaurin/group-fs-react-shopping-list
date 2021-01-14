import './ListForm.css';

function ListForm ({
    itemName,
    itemQuantity,
    itemUnit,
    setItemName,
    setItemQuantity,
    setItemUnit,
    addItem
}) {
    return(
        <form className="inputForm" onSubmit={addItem}>
            <h3>Add an Item</h3>
            <label htmlFor="name-input">Item:</label>
            <input id="name-input" value={itemName} onChange={e => setItemName(e.target.value)} />
            <br />
            <label htmlFor="quantity-input">Quantity:</label>
            <input id="quantity-input" value={itemQuantity} onChange={e => setItemQuantity(e.target.value)} />
            <label htmlFor="unit-input">Unit:</label>
            <input id="unit-input" value={itemUnit} onChange={e => setItemUnit(e.target.value)} />
            <br />
            <button type="submit" onClick={addItem}>Save</button>
        </form>
    )
}

export default ListForm