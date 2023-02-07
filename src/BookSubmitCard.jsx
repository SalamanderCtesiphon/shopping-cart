const BookSubmitCard = ({ book, setAddToCart}) => {
    return(
        <div 
                className="bookList"
            >{book.image}
            <div 
                className="btn"
                onClick={() => setAddToCart(null)}
            >Submit</div>
            </div>
    );
};

export default BookSubmitCard