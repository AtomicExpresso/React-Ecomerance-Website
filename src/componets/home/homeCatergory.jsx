import CategoryIcon from '../../assets/icons/category-icon.svg';
import CategorieBuild from '../../data/category';

function HomeCategory(){
  const moveSaleRowScroll = scrollThis => {
    const catRow = document.querySelector('.category-row');

    switch(scrollThis){
      case 'right':
        catRow.scrollTo({
          left: catRow.scrollLeft + 100,
          behavior: 'smooth'
        });
      break;
      case 'left':
        catRow.scrollTo({
          left: catRow.scrollLeft - 100,
          behavior: 'smooth'
        });
      break;
      default:
        console.error('Scroll button erorr')
      break;
    }
  }

  return (
    <div className="sale-container">
      <div className="sales-legend">
        <div></div>
        <h1>Categories</h1>
      </div>
      <div className="sale-title">
        <img src={CategoryIcon} draggable="false"></img>
        <h1>Browse By Category</h1>
          <div className='sale-btn-row'>
          <button onClick={() => moveSaleRowScroll('left')}>{`<`}</button>
          <button onClick={() => moveSaleRowScroll('right')}>{`>`}</button>
        </div>
      </div>
      <div className='category-row'>
        <CategorieBuild/>
      </div>
    </div>
  )
}

export default HomeCategory;