import RatingStar from '../../assets/icons/rating-star.svg';
import keyboard from '../../assets/images/shop-items/keyboard.svg'

//Weird issue with react and vite, Vite dosent allow dynamically importing images yet. So i have to do this weird work around to sort out the issue. Obv, this isnt very efficient, it will work for a small project like this, but if this was a real e-comerance site with a ton of different items, this method might cause performance issues
const ImgSearch = img => {
  switch(img){
    case 'keyboard':
      return keyboard
    break;
  }
}

function ProductTop(props){
  
  return (
    <div className="product-page-top">
    <div className="product-page-top-img">
      <img src={ImgSearch(props.img)}></img>
    </div>
    <div className="product-page-top-title"> 
      <h1>{props.title}</h1>
      <div className="product-page-rate-bar">
        {[...Array(props.rating)].map((_, index) => (
                <img key={index} src={RatingStar} draggable="false" alt="Rating Star" />
        ))}
        <h3>v</h3>
        <h3>|</h3>
        <h3 className='product-page-ratings-count'>(ratings {props.rateingCount})</h3>
        <h3>|</h3>
        <h3><span style={{color: props.inStock ? "green" : "red"}}>{props.inStock ? "In Stock" : "Out of Stock"}</span></h3>
      </div>
      <h2>${props.price}</h2>
      <div className="product-page-top-item-container">
        <button className="btn btn-danger">Add to cart</button>
        <button className="btn btn-warning">Wishlist</button>
        <div className="product-quan-container">
          <label htmlFor='product-quan'>Quantity:</label>
          <input className="form-control" name='product-quan' type="number" min={1} max={50}></input>
        </div>
      </div>
    </div>
    <hr></hr>
    </div>
  )
}

export default ProductTop