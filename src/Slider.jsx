import React from 'react'
import { useState, useEffect } from "react";


export default function Slider() {
    const addr = "https://picsum.photos/v2/list?limit=10";
    const [images, setImages] = useState([]);


    useEffect(()=>{
        fetch(addr)
        .then((resp)=>resp.json())
        .then((data)=>{setImages(data)})

    },[])


    
    console.log(images);
    if(images.length == 0){
        return (
            <>Loading...</>
        )
    }else{
  return (
    <div>
         {images.map((item,i)=>{
            return (
                <img src={item.download_url} className='sliderImg' style={{width:"100px"}} key={i}/>
            )
         })}   

    </div>
  )
   }
}
