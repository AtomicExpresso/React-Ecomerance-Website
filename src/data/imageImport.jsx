import keyboard from '../assets/images/shop-items/keyboard.svg';
import monitor from '../assets/images/shop-items/monitor.svg';
import gamingpc from '../assets/images/shop-items/gamingpc.webp';
import smarttoaster from '../assets/images/shop-items/smarttoaster.webp';
import headset from '../assets/images/shop-items/headset.webp';
import googlehome from '../assets/images/shop-items/googlehome.webp';
import ps5 from '../assets/images/shop-items/ps5.webp';
import xbox from '../assets/images/shop-items/xbox.png';
import airpods from '../assets/images/shop-items/airpods.webp';
import amazonecho from '../assets/images/shop-items/amazonecho.png';
import iphonex from '../assets/images/shop-items/iphonex.png';
import laptop from '../assets/images/shop-items/laptop.png';

function getImage(imgPath) {
  switch (imgPath) {
    case 'keyboard':
      return keyboard;
    case 'monitor':
      return monitor;
    case 'gamingpc':
      return gamingpc;
    case 'smarttoaster':
      return smarttoaster;
    case 'headset':
      return headset;
    case 'googlehome':
      return googlehome;
    case 'ps5':
      return ps5;
    case 'xbox':
      return xbox;
    case 'airpods':
      return airpods;
    case 'amazonecho':
      return amazonecho;
    case 'iphonex':
      return iphonex;
    case 'laptop':
      return laptop;
    default:
      return null;
  }
}

export default getImage