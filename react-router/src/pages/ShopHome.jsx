import { useEffect, useState } from "react"
import Book from "../components/Book"

function ShopHome() {
  let [books, setBooks] = useState([])
  let [filteredBooks, setFilteredBooks] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  // this one gets all the books once when the page loads
  useEffect(() => {
    fetch("http://localhost:8000/books/")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err.message))
  }, [])

  // this one updates the filter every time the search term changes
  useEffect(() => {
    const newBooks = books.filter(book => {
      return (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setFilteredBooks(newBooks)
  }, [searchTerm])

  // pull complex boolean expressions out of the JSX, just to be tidy
  const resultIsEmpty = searchTerm !== "" && filteredBooks.length === 0

  return (
    <>
      <label htmlFor="search-term">Search for:</label>
      <input
        id="search-term"
        type="text"
        placeholder="search the library"
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* The && is a common convention, 
      if the condition is false it will render nothing */}
      {resultIsEmpty && <p className="warning">No results found</p>}

      {filteredBooks.length === 0 ? (
        <div id="library-wrapper">
          {books.map(b => (
            <Book book={b} key={b.id} />
          ))}
        </div>
      ) : (
        <div id="library-wrapper">
          {filteredBooks.map(b => (
            <Book book={b} key={b.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default ShopHome
