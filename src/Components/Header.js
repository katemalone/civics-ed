import React from 'react'; 
import logo from '../utils/Images/StateOfAffairs.svg';
import { Link } from 'react-router-dom'

export const Header = () => {

  return(
    <div className="Header"> 
      <Link to='/'><img className="Header_image" type="image" src={logo} /></Link>
      <p className="Header_tag">Look up your local government!</p>
    </div>
  )
}

export default Header; 