import HomeHero from "../componets/home/homeHero";
import HomeSale from "../componets/home/homeSale";
import HomeCategory from "../componets/home/homeCatergory";

function LandingPage() {
  return (
    <div>
      <HomeHero/>
      <HomeSale/>
      <HomeCategory/>
    </div>
  )
}

export default LandingPage;