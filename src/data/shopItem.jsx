import Keyboard from '../assets/images/shop-items/keyboard.svg';
import RatingStar from '../assets/icons/rating-star.svg';

const shopContext = [
  {
    id: 1,
    img: Keyboard,
    name: 'Keyboard',
    price: `\$${40}`,
    rating: 5,
    ratingCount: `${75}`,
    percentOff: `${50}%`
  },
  {
    id: 2,
    img: Keyboard,
    name: 'Iphone 8',
    price: `\$${75}`,
    rating: 4,
    ratingCount: `${2}`,
  },
  {
    id: 3,
    img: Keyboard,
    name: 'Smart Toaster',
    price: `\$${245}`,
    rating: 3,
    ratingCount: `${12}`,
  },
  {
    id: 4,
    img: Keyboard,
    name: 'Gaming PC',
    price: `\$${1245}`,
    rating: 5,
    ratingCount: `${52}`,
    percentOff: `${12}%`
  },
  {
    id: 5,
    img: Keyboard,
    name: 'Headset',
    price: `\$${20}`,
    rating: 4,
    ratingCount: `${2.5}`,
    percentOff: `${5}%`
  },
  {
    id: 6,
    img: Keyboard,
    name: 'Windows 11 PRO',
    price: `\$${45}`,
    rating: 4,
    ratingCount: `${11.3}`,
    percentOff: `${65}%`
  },
]

// Generates a shop item from the shopcontext array
function ShopItem() {
  const ShopConArr = () => (
    shopContext.map(item => (
      <div className='store-item' key={item.id}>
        <div className='store-item-img'>
          <img src={item.img} draggable="false" alt={item.name} />
          <div className='sale-percent-off' style={item.percentOff ? {display:'flex'} : {display: 'none'}}>
            <h1>{item.percentOff}</h1>
            <p>OFF</p>
          </div>
        </div>
        <div className='store-item-bottom'>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
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
    ))
  );

  return (
    <ShopConArr/>
  )
}


export default ShopItem;