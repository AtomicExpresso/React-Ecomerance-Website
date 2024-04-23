import Keyboard from '../assets/images/shop-items/keyboard.svg';
import RatingStar from '../assets/icons/rating-star.svg';

const shopContext = [
  {
    id: 1,
    img: Keyboard,
    name: 'Keyboard',
    oldPrice: `${40}`,
    price: `${40}`,
    rating: 5,
    ratingCount: `${75}`,
    percentOff: `${50}`,
    onSale: true
  },
  {
    id: 2,
    img: Keyboard,
    name: 'Iphone 8',
    oldPrice: `${75}`,
    price: `${75}`,
    rating: 4,
    ratingCount: `${2}`,
    percentOff: `${5}`,
    onSale: true
  },
  {
    id: 3,
    img: Keyboard,
    name: 'Smart Toaster',
    oldPrice: `${245}`,
    price: `${245}`,
    rating: 3,
    ratingCount: `${12}`,
    percentOff: `${2}`,
    onSale: true
  },
  {
    id: 4,
    img: Keyboard,
    name: 'Gaming PC',
    oldPrice: `${1245}`,
    price: `${1245}`,
    rating: 5,
    ratingCount: `${52}`,
    percentOff: `${12}`,
    onSale: true
  },
  {
    id: 5,
    img: Keyboard,
    name: 'Headset',
    percentOff: `${5}`,
    oldPrice: `${20}`,
    price: `${20}`,
    rating: 4,
    ratingCount: `${2.5}`,
    percentOff: `${8}`,
    onSale: true
  },
  {
    id: 6,
    img: Keyboard,
    name: 'Windows 11 PRO',
    oldPrice: `${45}`,
    price: `${45}`,
    rating: 4,
    ratingCount: `${11.3}`,
    percentOff: null,
    onSale: false
  },
]

/* Generates a shop item from the shopcontext array, if the shop item is on sale, it will calculate
the new price and display that the item is on sale. 
*/
function ShopItem() {
  const ShopConArr = () => (
    shopContext.map(item => {

      //Calculate the discounted price from the oldprice and percent off. This only executes if the item is on sale, if its not the tenray returns an empty string
      const discountedPrice = item.onSale ? (item.oldPrice - (item.oldPrice * (item.percentOff / 100))).toFixed(2) : '';

      return(
      <div className='store-item' key={item.id}>
        <div className='store-item-img'>
          <img src={item.img} draggable="false" alt={item.name} />
          <div className='sale-percent-off' style={item.percentOff ? {display:'flex'} : {display: 'none'}}>
            <h1>{`-${item.percentOff}%`}</h1>
          </div>
        </div>
        <div className='store-item-bottom'>
          <h1>{item.name}</h1>
          <div className='store-item-price'>
            <h2>{item.onSale ? `$${discountedPrice}` : `$${item.price}`}</h2>
            <h3 style={item.onSale ? {display: 'flex'} : {display: 'none'}}>{`$${item.oldPrice}`}</h3>
          </div>
          <div className='rating-row'>
            <div>
              {[...Array(item.rating)].map((_, index) => (
                <img key={index} src={RatingStar} draggable="false" alt="Rating Star" />
              ))}
            </div>
            <h1>{`(${item.ratingCount}k)`}</h1>
          </div>
        </div>
      </div>
    )})
  );

  return (
    <ShopConArr/>
  )
}


export default ShopItem;