function RecipeCard({ recipe }) {
  let rating = ""
  for (let i = 0; i < Number(recipe.rating); i++) {
    rating += "⭐"
  }

  return (
    <div className="recipe-card">
      {rating && rating}
      <h4>{recipe.title}</h4>
      <h5>by: {recipe.author}</h5>
      <ul>
        {recipe.ingredients.map(ing => (
          <li key={`${recipe._id}${ing}`}>{ing}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeCard
