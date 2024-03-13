import "./library.css"
import { useEffect, useState } from "react"
import Book from "../Book/Book"

function Library() {
  let [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/books/")
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <>
      <h2>PTSB Dec 2023 Library</h2>
      <div id="library-wrapper">
        {books.map(b => (
          <Book book={b} />
        ))}
      </div>
    </>
  )
}

export default Library
