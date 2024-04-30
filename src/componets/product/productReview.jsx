function ratingsfn(rate){
  console.log('ydsds')
  switch(rate){
    case 5:
      console.log('y')
      return 100
    break;
  }
}

function ProductReview(props){
  return(
    <div className="product-reviews">
      <h1>Reviews</h1>
      <hr></hr>
      <div className="product-reviews-ratebar-container">
        <div className="product-reviews-ratebar-numbers">
          <h2>5</h2>
          <div className="product-reviews-ratebar-bar" style={{width: ratingsfn(props.ratings)}}>dfd</div>
        </div>
      </div> 
    </div>
  )
}

export default ProductReview