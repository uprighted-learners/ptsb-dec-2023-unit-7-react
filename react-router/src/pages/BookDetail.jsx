import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ErrorPage from "./404"

function BookDetail() {
  // useParams is a hook provided by React Router
  // it pulls all urls params into a JS object we can destructure
  const { id } = useParams()

  //setting the initial state as -1 bypasses
  // premature loading of the error page
  const [book, setBook] = useState({ id: -1 })
  // building this out would be the better solution
  // const [loading, setLoading] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8000/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.log(err.message))
  }, [])

  // you can conditionally render the entire component!
  if (!book.id) {
    return <ErrorPage />
  } else {
    return (
      <>
        <h3>{book.title}</h3>
        <h4>By: {book.author}</h4>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          labore non. Quas, pariatur praesentium sit, ducimus, dignissimos
          voluptatem provident nemo cumque ad voluptate dicta reiciendis
          laudantium rerum consectetur necessitatibus tempore?
        </p>
        <button>Buy Now</button>
      </>
    )
  }
}

export default BookDetail
