import { useState, useEffect } from 'react';
import {ShopItemTwo} from '../../data/shopItem';

function HomeExplore(){

  return (
    <div className="trending-container">
      <div className="sales-legend">
        <div></div>
        <h1>Explore</h1>
      </div>
      <div className="trending-title">
        <h1>Explore more</h1>
      </div>
      <div className='explore-row'>
        <ShopItemTwo />
      </div>
      <div className='explore-row'>
        <ShopItemTwo />
      </div>
      <div className='explore-btn-container'>
          <button className='btn btn-danger viewall'>View All</button>
        </div>
    </div>
  )
}

export default HomeExplore;