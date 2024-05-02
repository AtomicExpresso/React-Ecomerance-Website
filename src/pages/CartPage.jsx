import { useState } from "react"

function CartPage(props){

  const RemoveItemFromCart = (item, index) => {
    props.itemState(prevState => prevState - item.quan);
    props.priceTotalState(prevState => (prevState - item.price * item.quan).toFixed(2));

    props.findItemsState(prevState => {
      const updatedItems = [...prevState];
      updatedItems.splice(index, 1);
      return updatedItems;
    })
    console.log(props.findItems)
  }

  const FindItmes = props.findItems.map((item, index) => {
    return (
      <div key={index}>
        <div className="cart-user-item" id={index}>
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>
          <h2>X{item.quan}</h2>
          <div>
            <button className="btn btn-danger" onClick={() => RemoveItemFromCart(item, index)}>Remove</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="cart-page-container">
      <h1>Your cart</h1>
      <hr></hr>
      <div className="cart-item-container">
        <div className="cart-item-bar">
          {FindItmes}
        </div>
        <div className="cart-price-bar">
          <h3>Sub-total: <span>${props.itemPriceTotal}</span></h3>
          <h3>({props.itemCount} {props.itemCount > 1 ? "items" : 'item'})</h3>
            <div className="gift-check-box">
              <input type="checkbox" name="gift-check"></input>
              <label htmlFor="gift-check">This order contains a gift</label>
            </div>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage;