import { useState } from "react"

import "./App.css"
import TextInput from "./components/TextInput/TextInput"
import ContentBox from "./components/ContentBox/ContentBox"

function App() {
  // state "belongs to" the component that establishes it
  // by declaring state in a parent component, we can pass
  // the state variable and the update function to child components
  let [bestCereal, setBestCereal] = useState([])
  let [worstCereal, setWorstCereal] = useState([])

  return (
    <div className="App">
      <div className="box-wrapper">
        {/* the state and update function are passed as props */}
        <ContentBox
          title="Best Cereal"
          contentList={bestCereal}
          setContentList={setBestCereal}
        />
        <ContentBox
          title="Worst Cereal"
          contentList={worstCereal}
          setContentList={setWorstCereal}
        />
      </div>
      <hr />
      <TextInput
        contentList={bestCereal}
        setContentList={setBestCereal}
        placeholder={"Best Cereal"}
      />
      <TextInput
        contentList={worstCereal}
        setContentList={setWorstCereal}
        placeholder={"Worst Cereal"}
      />
    </div>
  )
}

export default App
