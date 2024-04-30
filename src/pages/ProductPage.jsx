import {useParams} from "react-router-dom";
import itemText from '../data/json/store-items/onSale.json'
import ProductTop from "../componets/product/productTop";
import ProductDesc from "../componets/product/productDesc";
import ProductReview from "../componets/product/productReview";

//Creates the product page dynamically
function ProductPage(){
  const { id } = useParams();
  const title = itemText[id].name
  const desc = itemText[id].productinfo[0].desc
  const price = itemText[id].price
  const getImg = itemText[id].img
  const brand = itemText[id].brand
  const rating = itemText[id].rating
  const rateingCount = itemText[id].ratingCount
  const inStock = itemText[id].inStock

  return (
    <div className="product-page">
      <ProductTop title={title} desc={desc} img={getImg} price={price} brand={brand} rating={rating} rateingCount={rateingCount} inStock={inStock}/>
      <hr></hr>
      <ProductDesc desc={desc}/>
      <ProductReview rating={rating} rateingCount={rateingCount}/>
    </div>
  )
}

export default ProductPage;