import React from 'react'
import './gyfGridItem.css';

export const GyfGridItem = ({title,url}) => {
  return (
    <div className="img-content">
         <div className='img-section'>
            <img src={url} alt={title} />
         </div>
         <p>{title}</p>
       </div>
  )
}
