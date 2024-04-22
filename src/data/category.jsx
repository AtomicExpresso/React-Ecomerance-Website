import SmartPhoneIcon from '../assets/icons/smartphone-icon.svg';
import ComputerIcon from '../assets/icons/computer-icon.svg';
import SmartWatchIcon from '../assets/icons/smartwatch-icon.svg';
import CameraIcon from '../assets/icons/camera-icon.svg';
import HeadphonesIcon from '../assets/icons/headphones-icon.svg';
import GamePadIcon from '../assets/icons/gamepad-icon.svg';


const categoryContext = [
  {
    id: 1,
    title: 'Phones',
    icon: SmartPhoneIcon
  },
  {
    id: 2,
    title: 'Computers',
    icon: ComputerIcon
  },
  {
    id: 3,
    title: 'SmartWatch',
    icon: SmartWatchIcon
  },
  {
    id: 4,
    title: 'Camera',
    icon: CameraIcon
  },
  {
    id: 5,
    title: 'HeadPhones',
    icon: HeadphonesIcon
  },
  {
    id: 6,
    title: 'Gaming',
    icon: GamePadIcon
  },
];

function CategorieBuild(){
  const NewCatArr = () => (
    categoryContext.map(item => (
    <div className='category-item-container' key={item.id}>
      <img src={item.icon} draggable='false'></img>
      <h1>{item.title}</h1>
    </div>
  ))
);

  return (
    <div className='category-items'>
      <NewCatArr/>
    </div>
  )
}

export default CategorieBuild;