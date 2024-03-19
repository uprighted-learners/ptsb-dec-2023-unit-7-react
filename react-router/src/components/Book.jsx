function Book({ book }) {
  const url = `http://localhost:3000/shop/${book.id}`

  return (
    <a className="bookLink" href={url}>
      <div className="book">
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>
    </a>
  )
}

export default Book
