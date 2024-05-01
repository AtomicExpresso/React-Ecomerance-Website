import userReview from '../../data/json/user/userReview.json';
import def from '../../assets/images/user/def.webp';
import RatingStar from '../../assets/icons/rating-star.svg';

function ratingsfn(rate){
  switch(rate){
    case 5:
      return `100%`
    break;
    case 4:
      return `70%`
    break;
    case 3:
      return `50%`
    break;
    case 2:
      return `30%`
    break;
    case 1:
      return `10%`
    break;
    default:
      return `1%`
    break;
  }
}

//Quite a bit of code here, its used for displaying the product reviews section
function ProductReview(props){

  //Builds the user reviews and gets the content from the json file
  const UserReviewConstructor = userReview.UseReview.map(item => {
    return (
      <div key={item.id} className="user-review-content">
        <div className="user-review-top">
          <img src={def} draggable='false'></img>
          <h2>{item.name}</h2>
        </div>
        <div className="user-review-mid">
          {[...Array(item.rating)].map((_, index) => (
                    <img key={index} src={RatingStar} draggable="false" alt="Rating Star" style={{height: `16px`, width: `16px`, marginTop: '7px'}}/>
          ))}
          <h2>{item.rateTitle}</h2>
        </div>
        <div className="user-review-bottom">
          <p>{item.desc}</p>
        </div>
      </div>
  )})

  return(
    <div className="product-reviews-container">
    <div className="product-reviews product-reviews-col-one">
      <h1>Reviews</h1>
      <hr></hr>
      <div className="product-reviews-ratebar-container">
        <div className="product-reviews-ratebar-numbers">
          <h2>5</h2>
          <div className="product-reviews-ratebar-bar-container">
            <div className="product-reviews-ratebar-bar" style={{width: ratingsfn(props.rating)}}></div>
          </div>
        </div>
        <div className="product-reviews-ratebar-numbers">
          <h2>4</h2>
          <div className="product-reviews-ratebar-bar-container">
            <div className="product-reviews-ratebar-bar" style={{width: props.rating >= 5 ? ratingsfn(props.rating) : ratingsfn(3)}}></div>
          </div>
        </div>
        <div className="product-reviews-ratebar-numbers">
          <h2>3</h2>
          <div className="product-reviews-ratebar-bar-container">
            <div className="product-reviews-ratebar-bar" style={{width: props.rating >= 5 ? ratingsfn(props.rating) : ratingsfn(2)}}></div>
          </div>
        </div>
        <div className="product-reviews-ratebar-numbers">
          <h2>2</h2>
          <div className="product-reviews-ratebar-bar-container">
            <div className="product-reviews-ratebar-bar" style={{width: props.rating >= 5 ? ratingsfn(props.rating) : ratingsfn(1)}}></div>
          </div>
        </div>
        <div className="product-reviews-ratebar-numbers">
          <h2>1</h2>
          <div className="product-reviews-ratebar-bar-container">
            <div className="product-reviews-ratebar-bar" style={{width: props.rating >= 5 ? ratingsfn(props.rating) : ratingsfn(1)}}></div>
          </div>
        </div>
      </div> 
    </div>
    <div className="product-reviews-col-two">
      <div className="product-review-col-two-content-container">
        <h2>Top reviews</h2>
        <div className="product-review-col-two-user-container">
          {UserReviewConstructor}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductReview