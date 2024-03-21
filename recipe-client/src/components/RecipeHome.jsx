import { useState, useEffect } from "react"
import { TOKEN_KEY } from "../constants"
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"

function RecipeHome() {
  const [recipes, setRecipes] = useState()

  const token = localStorage.getItem(TOKEN_KEY)

  useEffect(() => {
    fetch("http://localhost:4000/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => setRecipes(res))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <Link to="add">
        <button className="global-button recipe-button">Add New Recipe</button>
      </Link>

      <button className="global-button recipe-button">Favorites</button>
      <div className="recipe-box">
        {recipes &&
          recipes.map(r => {
            return <RecipeCard key={r._id} recipe={r} />
          })}
      </div>
    </>
  )
}

export default RecipeHome
