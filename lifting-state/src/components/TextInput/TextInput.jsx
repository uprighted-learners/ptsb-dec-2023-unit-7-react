import "./text-input.css"

function TextInput({ setContentList, contentList, placeholder }) {
  const handleEnterKey = e => {
    if (e.key === "Enter") {
      // the spread operator creates a copy
      // we do this because props are read only, changing props can cause weird side effects
      let newList = [...contentList]
      newList.push(e.target.value)
      // call the parent's update function
      // which was passed to this component as a prop
      setContentList(newList)
      // clear out the value of the input
      e.target.value = ""
    }
  }

  return (
    <input type="text" placeholder={placeholder} onKeyDown={handleEnterKey} />
  )
}

export default TextInput
