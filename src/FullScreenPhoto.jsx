import React from 'react';
import './FullScreenPhoto.css';

export default function FullScreenPhoto(props) {
  return (
    <div className='fullScreen'>
        <button onClick={props.closeCard}>X</button>
        <img src={props.src} alt="test" />

        </div>
  )
}
