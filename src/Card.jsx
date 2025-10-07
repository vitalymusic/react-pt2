import './Card.css';
import { useState } from "react";
import FullScreenPhoto from './FullScreenPhoto';


export default function Card(props) {

  const [visible, setVisible] = useState(false);
  const [src, setSrc] = useState("");

  function openCard(){
    setVisible(!visible);
}

  return (
    <>
    <div className="card" onClick={openCard}>
        <img src={props.src} alt={props.title} />
        <h5>{props.title}</h5>
        
    </div>
    {visible&&
              <FullScreenPhoto src={src} />
        }
  </>
  )
}
