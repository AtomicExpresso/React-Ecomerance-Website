import TruckService from '../../assets/icons/service-truck.svg'
import CustomerService from '../../assets/icons/service-customer-support.svg'
import ShieldService from '../../assets/icons/service-shield.svg'

const services = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    para: "Free delivery for all orders over $140",
    img: TruckService
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    para: "Friendly 24/7 customer support",
    img: CustomerService
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    para: "We return money within 30 days",
    img: ShieldService
  },
]

function HomeService(){
  const ServiceBuild = () => {
    return services.map(item => {
      return (
        <div className='service-item' key={item.id}>
          <img src={item.img}></img>
          <h1>{item.title}</h1>
          <p>{item.para}</p>
        </div>
      )
    })
  }

  return(
    <div className='service-container'>
      <ServiceBuild />
    </div>
  )
}

export default HomeService