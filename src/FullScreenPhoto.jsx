import React from 'react';
import './FullScreenPhoto.css';

export default function FullScreenPhoto(props) {
  return (
    <div className='fullScreen'>
        <img src={props.src} />
          
        </div>
  )
}
