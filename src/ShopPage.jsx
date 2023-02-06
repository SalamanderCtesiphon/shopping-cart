import { Link } from "react-router-dom";

const ShopPage = () => {
    return (
        <div className="navBar">
              <h1 className='title'>Forgotten Lore Book Shop</h1>
        <div className='btn'>
            <Link to="/">Home</Link>
        </div>
        </div>
    )
};

export default ShopPage