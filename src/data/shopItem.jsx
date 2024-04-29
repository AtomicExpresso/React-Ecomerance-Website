import RatingStar from '../assets/icons/rating-star.svg';
import notOnSale from './json/store-items/notOnSale.json';
import onSale from './json/store-items/onSale.json';
import keyboard from '../assets/images/shop-items/keyboard.svg'
import {useNavigate } from "react-router-dom";

function getImage(imgPath) {
  switch (imgPath) {
    case 'keyboard':
      return keyboard;
    case 'path/to/image2.jpg':
      return image2;
    default:
      return null;
  }
}
/* Generates a shop item from the shopcontext array, if the shop item is on sale, it will calculate
the new price and display that the item is on sale. 
*/
function ShopItem() {
  const navigate = useNavigate();
  const ShopConArr = () => (
    onSale.map(item => {
      //Calculate the discounted price from the oldprice and percent off. This only executes if the item is on sale, if its not the tenray returns an empty string
      const discountedPrice = item.onSale ? (item.oldPrice - (item.oldPrice * (item.percentOff / 100))).toFixed(2) : '';

      if(item.onSale){
        return(
          <div className='store-item' key={item.id} onClick={() => navigate(`/product/${item.id}/${item.name}`)}>
            <div className='store-item-img'>
              <img src={getImage(item.img)} draggable="false" alt={item.name} />
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
        )}
      })
    )

  return (
    <ShopConArr/>
  )
}

//If the item isnt on sale
function ShopItemTwo(){
  const navigate = useNavigate();

  const ShopConArrNotDiscount = () => (
    notOnSale.map(item => {
      if(!item.onSale){
        return(
          <div className='store-item' key={item.id} onClick={() => navigate(`/product/${item.id}/${item.name}`)}>
            <div className='store-item-img'>
              <img src={getImage(item.img)} draggable="false" alt={item.name} />
            </div>
            <div className='store-item-bottom'>
              <h1>{item.name}</h1>
              <div className='store-item-price'>
                <h2>{`$${item.price}`}</h2>
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
        )}
      })
    )
    return (
      <ShopConArrNotDiscount/>
    )
}


export {ShopItem, ShopItemTwo};