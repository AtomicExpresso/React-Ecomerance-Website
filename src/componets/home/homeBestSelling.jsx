import { useState, useEffect } from 'react';
import {ShopItemTwo} from '../../data/shopItem';

function HomeBestSaleing(){

  return (
    <div className="trending-container">
      <div className="sales-legend">
        <div></div>
        <h1>This Month</h1>
      </div>
      <div className="trending-title">
        <h1>Trending</h1>
        <button className='btn btn-danger'>View All</button>
      </div>
      <div className='sale-row'>
        <ShopItemTwo />
      </div>
    </div>
  )
}

export default HomeBestSaleing;