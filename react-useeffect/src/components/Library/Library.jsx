/* 
? useEffect

useEffect is for handling "side effects"
it's a function we call, it doesn't return anything 

most common side effect: making API calls

two arguments: 
* a function object (callback)
    * this function runs when the effect is called for
* an array of dependencies
    * none (default) - the function runs once per render of the component
    * [] - it runs once when the components mounts
    * [some-state] - runs when the dependency changes

*/

import "./library.css"
import { useEffect, useState } from "react"
import Book from "../Book/Book"

function Library() {
  let [books, setBooks] = useState([])
  let [filteredBooks, setFilteredBooks] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/books/")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.log(err.message))
  }, [])

  useEffect(() => {
    const newBooks = books.filter(book => {
      return (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setFilteredBooks(newBooks)
  }, [searchTerm])

  const resultIsEmpty = searchTerm !== "" && filteredBooks.length === 0

  return (
    <>
      <h2>PTSB Dec 2023 Library</h2>
      <label htmlFor="search-term">Search for:</label>
      <input
        id="search-term"
        type="text"
        placeholder="search the library"
        onChange={e => setSearchTerm(e.target.value)}
      />
      {resultIsEmpty ? <p className="warning">No results found</p> : <p></p>}

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

export default Library
