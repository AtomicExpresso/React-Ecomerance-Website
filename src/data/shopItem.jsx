import Keyboard from '../assets/images/shop-items/keyboard.svg'
import RatingStar from '../assets/icons/rating-star.svg';

const shopContext = [
  {
    id: 1,
    img: Keyboard,
    name: 'Keyboard',
    price: `\$${40}`,
    rating: 5,
    ratingCount: `${75}`,
  },
  {
    id: 2,
    img: Keyboard,
    name: 'Iphone 8',
    price: `\$${75}`,
    rating: 5,
    ratingCount: `${2}`,
  }
]

// Generates a shop item from the shopcontext array
function ShopItem() {
  const ShopConArr = () => (
    shopContext.map(item => (
      <div className='store-item' key={item.id}>
        <div className='store-item-img'>
          <img src={item.img} draggable="false" alt={item.name} />
        </div>
        <div className='store-item-bottom'>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <div className='rating-row'>
            <div>
              {[...Array(5)].map((_, index) => (
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