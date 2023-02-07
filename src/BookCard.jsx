const BookCard = ({ book }) => {
    return (
        <div>
            <div 
                className="bookList"
            >{book.image}
            </div>
        </div>
    );
};

export default BookCard