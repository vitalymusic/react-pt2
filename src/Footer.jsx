import React from 'react'
import { useState } from "react";
export default function Footer() {

   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  function submit(e){
      e.preventDefault();

      console.log(name,email,message);

  }

  return (
    <footer className='footer'>
      <form onSubmit={submit}>
        <input 
          type='text'
          name='name'
          onInput={(e)=>{setName(e.target.value)}}
        />
        <input 
          type='email'
          name='email'
          onInput={(e)=>{setEmail(e.target.value)}}
        />
        <textarea 
        name="" 
        onInput={(e)=>{setMessage(e.target.value)}}
        />

        <input 
        type='submit' 
        value="Nosūtīt"
        />
      </form>

    </footer>
  )
}
