// each component loads its own css
import "./App.css"
// import components from within the app
import Nav from "./components/Nav/Nav"
import LearnerList from "./components/LearnerList/LearnerList"

// components are defined with a function declaration
function App() {
  const learners = [
    "Abinav",
    "Brandon",
    "Frans",
    "Jason",
    "John",
    "Jose",
    "Martha",
    "Olivia",
  ]

  const tabs = ["Intro", "Components", "Props", "Hooks"]

  // each component must return a JSX element
  return (
    // use <> if you don't need to use a div or other named element as the root element
    <>
      {/* inside JSX, you can evaluate JS expressions inside curly brackets */}
      {/* including comments! */}
      <main>
        {/* inject child components like this */}
        <Nav tabs={tabs} />
        {/* JSX can include plain HTML too */}
        <h1>React App Intro Lesson</h1>
        <LearnerList learners={learners} cohortName="PTSB Dec 2023" />
      </main>
      {/* Any primitive data type can be passed as a prop to a component */}
      <Nav tabs={["About Me", "Contact", "More Stuff"]} />
    </>
  )
}

// all components must be exported before they can be used
export default App
