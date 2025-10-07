// import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import { useState } from "react";
import FullScreenPhoto from './FullScreenPhoto';


import './App.css';

function App() {

  const [visible, setVisible] = useState(false);
  const [src, setSrc] = useState("");

  function openCard(el){
    setSrc(el.src);
    setVisible(!visible);
}



  return (
    <div className="App">
      <Header />
      <h1 className='title'>Hello React</h1>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo error amet officiis, similique, eos nostrum, repellat in hic eveniet minima voluptatem? Tempore libero explicabo ab sequi ad ipsam temporibus.</p>
      {/* <img className="image" src="https://picsum.photos/200/300" alt="picsum" /> */}
      <div className="cards flex">
        <Card src="https://picsum.photos/id/5/200/300" title="Bilde 1" onClick={openCard(this)} />
        <Card src="https://picsum.photos/id/9/200/300" title="Bilde 2" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/10/200/300" title="Bilde 3" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" onClick={openCard(this)}/>
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" onClick={openCard(this)}/>
      </div>

      {visible&&
              <FullScreenPhoto src={src} />
       }
      <Footer />
    </div>
  );
}

export default App;
