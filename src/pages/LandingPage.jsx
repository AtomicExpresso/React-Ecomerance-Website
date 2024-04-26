import HomeHero from "../componets/home/homeHero";
import HomeSale from "../componets/home/homeSale";
import HomeCategory from "../componets/home/homeCatergory";
import HomeBestSaleing from "../componets/home/homeBestSelling";
import HomeExplore from "../componets/home/homeExplore";
import HomeNewArrival from "../componets/home/homeNewArrival";

function LandingPage() {
  return (
    <div className="landing-page">
      <HomeHero/>
      <HomeSale/>
      <hr></hr>
      <HomeCategory/>
      <hr></hr>
      <HomeBestSaleing/>
      <HomeExplore/>
      <hr></hr>
      <HomeNewArrival/>
    </div>
  )
}

export default LandingPage;