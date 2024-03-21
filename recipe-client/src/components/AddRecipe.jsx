import { useState } from "react"
import { TOKEN_KEY } from "../constants"
import { useNavigate } from "react-router-dom"

function AddRecipe() {
  const [title, setTitle] = useState("")
  const [ingredient1, setIngredient1] = useState("")
  const [ingredient2, setIngredient2] = useState("")
  // TODO: variable number of ingredient inputs
  const nav = useNavigate()

  const handleSave = e => {
    const token = localStorage.getItem(TOKEN_KEY)

    const body = {
      title,
      author: "danny", // TODO: where do we get the user info from?
      ingredients: [ingredient1, ingredient2],
    }

    fetch("http://localhost:4000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    })
      .then(res => nav("/recipes"))
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        className="global-input"
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="ingredient1"
        placeholder="First ingredient"
        className="global-input"
        onChange={e => setIngredient1(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="ingredient2"
        placeholder="Second ingredient"
        className="global-input"
        onChange={e => setIngredient2(e.target.value)}
      />
      <br />
      <button className="global-button" onClick={handleSave}>
        Save Recipe
      </button>
    </>
  )
}

export default AddRecipe
