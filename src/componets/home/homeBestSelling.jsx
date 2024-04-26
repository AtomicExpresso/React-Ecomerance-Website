import { useState, useEffect } from 'react';
import {ShopItemTwo} from '../../data/shopItem';

function HomeBestSaleing(){
  const moveSaleRowScroll = scrollThis => {
    const TrendRow = document.querySelector('.trend-row');

    switch(scrollThis){
      case 'right':
        TrendRow.scrollTo({
          left: TrendRow.scrollLeft + 100,
          behavior: 'smooth'
        });
      break;
      case 'left':
        TrendRow.scrollTo({
          left: TrendRow.scrollLeft - 100,
          behavior: 'smooth'
        });
      break;
      default:
        console.error('Scroll button erorr')
      break;
    }
  }

  return (
    <div className="trending-container">
      <div className="sales-legend">
        <div></div>
        <h1>This Month</h1>
      </div>
      <div className="trending-title">
        <h1>Trending</h1>
        <div className='trending-btn-container'>
        <button className='btn btn-danger viewall'>View All</button>
        <div className='trend-btn-row'>
          <button onClick={() => moveSaleRowScroll('left')}>{`<`}</button>
          <button onClick={() => moveSaleRowScroll('right')}>{`>`}</button>
        </div>
        </div>
      </div>
      <div className='trend-row'>
        <ShopItemTwo />
      </div>
    </div>
  )
}

export default HomeBestSaleing;