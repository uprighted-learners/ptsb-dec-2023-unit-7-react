import "./content-box.css"

function ContentBox({ title, contentList, setContentList }) {
  const handleDelete = listItem => {
    // filter out items that match the item we clicked on
    let newList = [...contentList].filter(c => c !== listItem)
    setContentList(newList)
  }

  return (
    <div className="cereal-box">
      <h4>{title}</h4>
      <ul>
        {/* loop over the list and make an li for each one */}
        {contentList.map(c => (
          <li key={c}>
            {/* to pass a paramter to a handler, wrap it in a callback */}
            {c} <span onClick={() => handleDelete(c)}>[x]</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentBox
