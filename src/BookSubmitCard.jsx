const BookSubmitCard = ({ book, setAddToCart}) => {
    return(
        <div 
                className="bookList"
            >{book.image}
            <label>Quantity:</label>
            <input type="number" name="quantity" id="quantity" min='0' step="1"></input>
            <div 
                className="btn"
                onClick={() => setAddToCart(null)}
            >Submit</div>
            </div>
    );
};

export default BookSubmitCard