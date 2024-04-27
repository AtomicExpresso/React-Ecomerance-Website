import qrCode from '../../assets/images/footer/qrcode.svg';
import playstore from '../../assets/images/footer/playstore.svg';
import applestore from '../../assets/images/footer/applestore.svg';
import socialFacebook from '../../assets/icons/social-facebook.svg';
import socialTwitter from '../../assets/icons/social-twitter.svg';
import socialInstagram from '../../assets/icons/social-instagram.svg';
import socialLinkedin from '../../assets/icons/social-linkedin.svg';

const footerCol = [
  {
    title: 'Account',
    item: [
      "My Account",
      "Cart",
      "Wishlist",
      "Shop"
    ]
  },
  {
    title: 'Tools',
    item: [
      "Developer API",
      "Become a seller"
    ]
  },
  {
    title: 'Support',
    item: [
      "Customer Support",
      "Help Center",
      "Forms"
    ]
  },
  {
    title: 'Legal',
    item: [
      "Terms of service",
      "Privacy",
      "Data use",
      "DMCA"
    ]
  }
]


function Footer(){
  const BuildCol = footerCol.map(item => {
    return (
      <div className="footer-col">
        <ul>
          <h1>{item.title}</h1>
          {item.item.map(list => <li><a>{list}</a></li>)}
        </ul>
      </div>
    )
  })

  return (
    <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>TechShop</h1>
            <p>Latest tech, made simple</p>
            <div className='footer-socials'>
              <div className='social-content'><a href='#'><img src={socialFacebook} alt='facebook' draggable="false"></img></a></div>
              <div className='social-content'><a href='#'><img src={socialTwitter} alt='twitter' draggable="false"></img></a></div>
              <div className='social-content'><a href='#'><img src={socialInstagram} alt='instagram' draggable="false"></img></a></div>
              <div className='social-content'><a href='#'><img src={socialLinkedin} alt='linkedin' draggable="false"></img></a></div>
            </div>
          </div>
          {BuildCol}
          <div className="footer-app">
            <h1>Download our app</h1>
            <p>Save $3 with our app</p>
            <div className='footer-app-img'>
              <img src={qrCode} draggable='false'></img>
              <div className='footer-app-store'>
                <a href='https://google.com'><img src={playstore} draggable='false'></img></a>
                <a href='https://apple.com'><img src={applestore} draggable='false'></img></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <hr></hr>
          <h2>© Copyright <span><a href='https://atomicdev.vercel.app/'>Atomic</a></span> 2024. All right reserved</h2>
        </div>
    </div>
  )
}

export default Footer;