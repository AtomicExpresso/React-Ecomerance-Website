import HomeHero from "../componets/home/homeHero";
import HomeSale from "../componets/home/homeSale";
import HomeCategory from "../componets/home/homeCatergory";
import HomeBestSaleing from "../componets/home/homeBestSelling";
import HomeExplore from "../componets/home/homeExplore";
import HomeNewArrival from "../componets/home/homeNewArrival";
import HomeService from "../componets/home/homeService";

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
      <HomeService/>
    </div>
  )
}

export default LandingPage;