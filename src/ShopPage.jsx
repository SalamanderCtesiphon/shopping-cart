import { Link } from "react-router-dom";
import { useState } from "react";
import bladerunner from "./images/bladerunner.jpeg";
import './App.css';

const ShopPage = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'DoAndrioidsDreamOfElectricSheep',
            image: <img src={bladerunner} alt="bladerunner" style={{height: '20vh', width: '10vw'}}/>,
        }
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