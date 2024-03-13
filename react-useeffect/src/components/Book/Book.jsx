import "./book.css"

function Book({ book }) {
  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>
  )
}

export default Book
