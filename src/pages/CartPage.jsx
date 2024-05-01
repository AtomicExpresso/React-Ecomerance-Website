function CartPage(props){
  return (
    <div>
      <h1>Cart Page</h1>
      <h3>{props.itemCount}</h3>
    </div>
  )
}

export default CartPage;