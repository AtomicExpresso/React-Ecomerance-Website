import { useState, useEffect } from 'react';
import BoltIcon from '../../assets/icons/bolt-icon.svg';
import ShopItem from '../../data/shopItem';
import useTimer from '../../logic/timer'


function HomeSale(){
  const { curHour, curMinute, curSecond } = useTimer();

  return (
    <div className="sale-container">
      <div className="sales-legend">
        <div></div>
        <h1>Today's</h1>
      </div>
      <div className="sale-title">
        <img src={BoltIcon} draggable="false"></img>
        <h1>Flash Sale!</h1>
          <div className="sale-timer">
            <div>
              <h3>Hours</h3>
              <h2>{curHour}</h2>
            </div>
            <h1>:</h1>
            <div>
              <h3>Minutes</h3>
              <h2>{curMinute}</h2>
            </div>
            <h1>:</h1>
            <div>
              <h3>Seconds</h3>
              <h2>{curSecond}</h2>
            </div>
          </div>
      </div>
      <div className='sale-row'>
        <ShopItem/>
      </div>
        <button className="btn btn-danger">View All</button>
    </div>
  )
}

export default HomeSale;