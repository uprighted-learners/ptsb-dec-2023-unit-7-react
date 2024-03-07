import "./App.css"
import Nav from "./components/Nav/Nav"

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

  return (
    <>
      <Nav tabs={tabs} />
      <h1>React App Intro Lesson</h1>
      <h3>Learners in PTSB Dec 2023:</h3>
      <ul>
        {learners.map(student => {
          return (
            <li className="learner-name" key={`studentName-${student}`}>
              {student}
            </li>
          )
        })}
      </ul>
      <Nav tabs={["About Me", "Contact", "More Stuff"]} />
    </>
  )
}

export default App
