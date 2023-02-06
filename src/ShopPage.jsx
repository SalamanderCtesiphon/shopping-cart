import { Link } from "react-router-dom";
import { useState } from "react";
import {bladerunner} from "./images/bladerunner.jpeg";

const ShopPage = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'DoAndrioidsDreamOfElectricSheep',
            image: <img src={bladerunner} alt="bladerunner"/>
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
            {books.image}
        </div>
    )
};

export default ShopPage