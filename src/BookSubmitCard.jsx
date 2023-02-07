const BookSubmitCard = ({ book, setAddToCart, setShoppingCart, shoppingCart, submitShoppingCart }) => {
    return(
        <form onSubmit={submitShoppingCart}>
            <div 
                    className="bookList"
                >{book.image}
                <div>
                    <label>Quantity:  </label>
                    <input 
                        type="number" 
                        name="quantity" 
                        id="quantity" 
                        min='0' 
                        step="1"
                        value={shoppingCart}
                        onChange={(e) => setShoppingCart(e.target.value)}
                    ></input>
                </div>
                <div 
                    className="btn"
                    onClick={() => setAddToCart(null)}
                >Submit</div>
                </div>
        </form>
    );
};

export default BookSubmitCard