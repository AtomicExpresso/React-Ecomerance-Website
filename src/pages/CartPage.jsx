function CartPage(props){
  const FindItmes = props.findItems.map(item => {
    return (
      <div key={item.length}>
        <div className="cart-user-item">
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>
          <h2>X{item.quan}</h2>
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