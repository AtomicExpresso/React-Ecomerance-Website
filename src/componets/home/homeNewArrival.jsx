import { useState, useEffect } from 'react';
import newArrival from '../../data/json/newArrival.json';
import PS5 from '../../assets/images/articles/ps5.svg';
import laptop from '../../assets/images/articles/laptop.svg';
import speakers from '../../assets/images/articles/speakers.svg';
import smartdevice from '../../assets/images/articles/smartdevice.svg';

function HomeNewArrival(){
  const articleBG = (props) => {
    switch(props){
      case 'PS5':
        return PS5;
      break;
      case 'laptop':
        return laptop;
      break;
      case 'speakers':
        return speakers;
      break;
      case 'smartdevice':
        return smartdevice;
      break;
    }
  }
  const ArticleBuild = newArrival.NewArrivals.map(item => {
    return (
      <div className='article-item' key={item.id} style={{backgroundImage: `url(${articleBG(item.Img)})`, backgroundSize: 'cover', borderRadius: '10px'}}>
        {item.BoxType === 'Big' && 
          <div style={{width: '400px', height: '400px'}} className='article-big'>
            <h1>{item.Title}</h1>
            <p>{item.Desc}</p>
            <button className='btn btn-primary'>{item.BtnTxt}</button>
          </div>
        }
      </div>
    )
  })

  const ArticleBuildTwo = newArrival.NewArrivals.map(item => {
    return (
      <div>
      {item.BoxType === 'Wide' &&
      <div className='article-item' key={item.id} style={{backgroundImage: `url(${articleBG(item.Img)})`, backgroundSize: 'cover', borderRadius: '10px'}}> 
        <div style={{width: '500px', height: '160px'}} className='article-wide'>
          <h1>{item.Title}</h1>
          <p>{item.Desc}</p>
          <button className='btn btn-primary'>{item.BtnTxt}</button>
        </div>
        </div>
      }
    </div>
    )
  })

  const ArticleBuildThree = newArrival.NewArrivals.map(item => {
    return (
      <div>
      {item.BoxType === 'Square' && 
      <div className='article-item' key={item.id} style={{backgroundImage: `url(${articleBG(item.Img)})`, backgroundSize: 'cover', borderRadius: '10px'}}>
      <div style={{width: '220px', height: '220px'}} className='article-square'>
        <h1>{item.Title}</h1>
        <p>{item.Desc}</p>
        <button className='btn btn-primary'>{item.BtnTxt}</button>
      </div>
      </div>
      }
      </div>
    )
  })


  return (
    <div className="trending-container">
      <div className="sales-legend">
        <div></div>
        <h1>Featured</h1>
      </div>
      <div className="trending-title">
        <h1>New Arrivals</h1>
      </div>
      <div className='new-arrival-articles'>
        <div>
          {ArticleBuild}
        </div>
        <div className='article-col'>
          <div>
            {ArticleBuildTwo}
          </div>
          <div className='article-row'>
            {ArticleBuildThree}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNewArrival;