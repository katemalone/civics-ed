import React from 'react';
import globe from '../utils/Images/spinning-globe.gif';
import invalidNote from '../utils/Images/invalid_note.svg';
import { Link } from 'react-router-dom'

export const invalidRoutes = () => {

  return (
    <div className="invalidRoutes">
      <img className="invalid-note" type="image" src={ invalidNote }/>
      <Link to='/'><img className="invalidRoutes_img" type="image" src={globe} /></Link>
    </div>
  )
}

export default invalidRoutes; 