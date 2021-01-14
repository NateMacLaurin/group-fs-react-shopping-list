function ListItem({item}) {

    const deleteItem = () => {
        
        console.log('clicked delete');
        
        axios.delete(`/list/${id}`, {
            name: newCreatureName,
            origin: newCreatureOrigin
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
          console.log(err);
        })
    } // end deleteItem

    const markBought = () => {
        console.log('clicked Buy');
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