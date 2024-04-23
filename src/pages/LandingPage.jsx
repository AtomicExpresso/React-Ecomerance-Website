import HomeHero from "../componets/home/homeHero";
import HomeSale from "../componets/home/homeSale";
import HomeCategory from "../componets/home/homeCatergory";
import HomeBestSaleing from "../componets/home/homeBestSelling";

function LandingPage() {
  return (
    <div className="landing-page">
      <HomeHero/>
      <HomeSale/>
      <hr></hr>
      <HomeCategory/>
      <hr></hr>
      <HomeBestSaleing/>
    </div>
  )
}

export default LandingPage;