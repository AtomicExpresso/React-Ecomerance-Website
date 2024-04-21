import HomeHeroBanner1 from '../../assets/images/home-hero-banner-1.png'

function HomeHero(){
  return (
    <div className="home-hero">
      <div className="home-hero-list">
          <div><li>Smart Phones</li></div>
          <div><li>Gaming Controllers</li></div>
          <div><li>Headsets</li></div>
          <div><li>Laptops</li></div>
          <div><li>Tablets</li></div>
          <div><li>Software</li></div>
      </div>
      <div className="home-hero-banner">
        <img src={HomeHeroBanner1} draggable="false"></img>
      </div>
    </div>
  )
}

export default HomeHero;