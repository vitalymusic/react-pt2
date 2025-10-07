import './Card.css';
import { useState } from "react";


export default function Card(props) {

  const [visible, setVisible] = useState(false);

  function openCard(){
    setVisible(!visible);
}

  return (
    <div className="card" onClick={openCard}>
        <img src={props.src} alt={props.title} />
        <h5>{props.title}</h5>
        {visible&&
            <>
              <div className='alert'>Parādās bloks</div>
            </>
          
        }
    </div>
  )
}
