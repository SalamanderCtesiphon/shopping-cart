const BookCard = ({ book, setAddToCart}) => {
    return (
        <div>
            <div 
                className="bookList"
            >{book.image}
            <div 
                className="btn"
                onClick={() => setAddToCart(book.id)}
            >add to cart</div>
            </div>
        </div>
    );
};

export default BookCard