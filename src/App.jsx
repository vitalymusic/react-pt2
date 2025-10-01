// import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='title'>Hello React</h1>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo error amet officiis, similique, eos nostrum, repellat in hic eveniet minima voluptatem? Tempore libero explicabo ab sequi ad ipsam temporibus.</p>
      {/* <img className="image" src="https://picsum.photos/200/300" alt="picsum" /> */}
      <div className="cards flex">
        <Card src="https://picsum.photos/id/5/200/300" title="Bilde 1" />
        <Card src="https://picsum.photos/id/9/200/300" title="Bilde 2" />
        <Card src="https://picsum.photos/id/10/200/300" title="Bilde 3" />
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" />
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" />
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" />
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" />
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" />
        <Card src="https://picsum.photos/id/20/200/300" title="Bilde 4" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
