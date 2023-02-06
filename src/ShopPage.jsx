import { Link } from "react-router-dom";
import { useState } from "react";
import bladerunner from "./images/bladerunner.jpeg";
import catbook from "./images/catbook.jpeg";
import crimeandpunishment from "./images/crimeandpunishment.jpeg";
import dragon from "./images/dragon.jpeg";
import neuromancer from "./images/neuromancer.jpeg";
import warAndPeace from "./images/war_and_peace.jpeg";
import './App.css';

const ShopPage = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'DoAndrioidsDreamOfElectricSheep',
            image: <img src={bladerunner} alt="bladerunner" style={{height: '20vh', width: '10vw'}}/>,
        },
        {
            id: 2,
            title: 'Schroedinger\'s Cat',
            image: <img src={catbook} alt="schroedingers cat" style={{height: '20vh', width: '10vw'}}/>,
        },
        {
            id: 3,
            title: 'Crime and punishment',
            image: <img src={crimeandpunishment} alt="crime and punishment" style={{height: '20vh', width: '10vw'}}/>,
        },
        {
            id: 4,
            title: 'Dragon Lance',
            image: <img src={dragon} alt="dragon lance" style={{height: '20vh', width: '10vw'}}/>,
        },
        {
            id: 5,
            title: 'Neuromancer',
            image: <img src={neuromancer} alt="nueromancer" style={{height: '20vh', width: '10vw'}}/>,
        },
        {
            id: 1,
            title: 'War and Peace',
            image: <img src={warAndPeace} alt="war and peace" style={{height: '20vh', width: '10vw'}}/>,
        },
    ])
    return (
        <div className="page">
            <div className="navBar">
                    <h1 className='title'>Forgotten Lore Book Shop</h1>
                <div className='btn'>
                    <Link to="/">Home</Link>
                </div>
            </div>
            {books.map((book) => {
                return (<div className="bookList">{book.image}</div>)
            })}
        </div>
    )
};

export default ShopPage