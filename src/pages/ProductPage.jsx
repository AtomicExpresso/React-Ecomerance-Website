import {useParams} from "react-router-dom";
import itemText from '../data/json/store-items/onSale.json'
import keyboard from '../assets/images/shop-items/keyboard.svg'

//Weird issue with react and vite, Vite dosent allow dynamically importing images yet. So i have to do this weird work around to sort out the issue. Obv, this isnt very efficient, it will work for a small project like this, but if this was a real e-comerance site with a ton of different items, this method might cause performance issues
const ImgSearch = img => {
  switch(img){
    case 'keyboard':
      return keyboard
    break;
  }
}

//Creates the product page dynamically
function ProductPage(){
  const { id } = useParams();
  const title = itemText[id].name
  const desc = itemText[id].productinfo[0].desc
  const getImg = itemText[id].img

  function ItemBuilder(props){
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <img src={ImgSearch(props.img)}></img>
      </div>
    )
  }

  return (
    <div>
      <ItemBuilder title={title} desc={desc} img={getImg}/>
    </div>
  )
}

export default ProductPage;