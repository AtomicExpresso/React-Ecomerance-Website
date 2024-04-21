import { Link } from 'react-router-dom';
import SearchIcon from '../../assets/icons/search-icon.svg';
import ProfileIcon from '../../assets/icons/profile-icon.svg';
import CartIcon from '../../assets/icons/cart-icon.svg';

const Navbar = () => {
  return (
    <nav>
      <h1>TechShop</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Cartpage">Gaming</Link>
        </li>
        <li>
          <Link to="/Cartpage">Desktop</Link>
        </li>
        <li>
          <Link to="/Cartpage">Kitchen</Link>
        </li>
      </ul>
        <div className='search-group'>
          <input className='form-control' placeholder='Search....'>
          </input>
          <button><img src={SearchIcon}></img></button>
        </div>
        <div className='profile-icons'>
          <div><img src={ProfileIcon}></img></div>
          <div><img src={CartIcon}></img></div>
        </div>
    </nav>
  );
};

export default Navbar;