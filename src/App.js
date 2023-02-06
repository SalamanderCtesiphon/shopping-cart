import { Link } from 'react-router-dom';
import './App.css';
import books from "./images/books.jpg";

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <h1>Forgotten Lore Book Shop</h1>
        <div className='btn'>
          <Link to="ShopPage">Shop</Link>
        </div>
      </div>
      <div className='body'>
        <img src={books}/>
      </div>
    </div>
  );
}

export default App;
