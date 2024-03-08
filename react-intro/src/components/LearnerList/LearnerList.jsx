import "./learnerList.css"

// you can destructure the props object directly in the
// props variable declaration, in the function definition
function LearnerList({ learners, cohortName }) {
  //  or, instead, you can use 'props' as the variable declaration
  //  and then destructure them like this:
  //  const { learners, cohortName } = props

  return (
    <>
      <h3>Learners in {cohortName}:</h3>
      <ul>
        {/* you can create lists of elements using Array.map() or Array.filter() */}
        {learners.map(student => {
          return (
            <li className="learner-name" key={`studentName-${student}`}>
              {student}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default LearnerList
