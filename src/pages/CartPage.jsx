function CartPage(props){
  const FindItmes = props.findItems.map(item => {
    return (
      <div>
        <div className="cart-user-item">
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h1>Your cart</h1>
      <hr></hr>
      <div className="cart-item-container">
        <div className="cart-item-bar">
          {FindItmes}
        </div>
        <div className="cart-price-bar">
          <h3>Sub-total({props.itemCount > 1 ? "items" : 'item'}): <span>${props.itemPriceTotal}</span></h3>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage;