const BookCard = ({ book, addItem }) => {
    return (
        <div>
            <div 
                className="bookList"
            >{book.image}
            <div 
                className="btn"
                onClick={addItem}
            >add to cart</div>
            </div>
        </div>
    );
};

export default BookCard