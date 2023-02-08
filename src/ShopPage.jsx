import { Link } from "react-router-dom";
import { useState } from "react";
import BookCard from "./BookCard";
import bladerunner from "./images/bladerunner.jpeg";
import catbook from "./images/catbook.jpeg";
import crimeandpunishment from "./images/crimeandpunishment.jpeg";
import dragon from "./images/dragon.jpeg";
import neuromancer from "./images/neuromancer.jpeg";
import warAndPeace from "./images/war_and_peace.jpeg";
import './App.css';
import BookSubmitCard from "./BookSubmitCard";
import cart from "./images/icons8-shopping-cart-24.png";

const ShopPage = () => {
    const [books] = useState([
        {
            id: 1,
            title: 'DoAndrioidsDreamOfElectricSheep',
            image: <img src={bladerunner} alt="bladerunner" style={{height: '20vh', width: '8vw', borderRadius: '8px'}}/>,
        },
        {
            id: 2,
            title: 'Schroedinger\'s Cat',
            image: <img src={catbook} alt="schroedingers cat" style={{height: '20vh', width: '8vw', borderRadius: '8px'}}/>,
        },
        {
            id: 3,
            title: 'Crime and punishment',
            image: <img src={crimeandpunishment} alt="crime and punishment" style={{height: '20vh', width: '8vw', borderRadius: '8px'}}/>,
        },
        {
            id: 4,
            title: 'Dragon Lance',
            image: <img src={dragon} alt="dragon lance" style={{height: '20vh', width: '8vw', borderRadius: '8px'}}/>,
        },
        {
            id: 5,
            title: 'Neuromancer',
            image: <img src={neuromancer} alt="nueromancer" style={{height: '20vh', width: '8vw', borderRadius: '8px'}}/>,
        },
        {
            id: 6,
            title: 'War and Peace',
            image: <img src={warAndPeace} alt="war and peace" style={{height: '20vh', width: '8vw', borderRadius: '8px'}}/>,
        },
    ])
    const [shoppingCart, setShoppingCart] = useState(['']);
    const [addToCart, setAddToCart] = useState(null);
    const quantity = 0;

    function submitShoppingCart() {
         let shoppingCart= quantity;
        return shoppingCart;
    }


    return (
        <div className="page">
            <div className="navBar">
                <div className='btn'>
                        <Link to="/">Home</Link>
                </div>
                <h1 className='title'>Forgotten Lore Book Shop</h1>
                <img src={cart} alt="shoppin cart"></img>{shoppingCart}
                <div className="btn">Check out</div>
            </div>
            <div className="list">
                <ul>
                    {books.map((book) => {
                        return(
                        <li key={book.id}>
                            {book.id === addToCart ? (
                                <BookSubmitCard 
                                book={book}
                                setAddToCart={setAddToCart}
                                setShoppingCart={setShoppingCart}
                                shoppingCart={shoppingCart}
                                submitShoppingCart={submitShoppingCart}
                                />
                            ) :
                            (
                                <BookCard 
                                    book={book}
                                    setAddToCart={setAddToCart}
                                />
                            )}
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default ShopPage