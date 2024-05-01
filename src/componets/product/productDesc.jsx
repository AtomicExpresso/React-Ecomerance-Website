function ProductDesc(props){
  return(
    <div className="product-desc">
      <h2>Description:</h2>
      <p>{props.desc}</p>
    </div>
  )
}

export default ProductDesc;