import "./nav.css"

// anything passed as a property from the parent component
// will be included in the props object
function Nav(props) {
  // use a logical OR to define a default in case a prop isn't passed
  // otherwise the prop will be undefined
  // (or don't, and let it throw an error if props are missing)
  const tabs = props.tabs || []
  return (
    <nav>
      {tabs.map(tab => (
        <a href="" className="nav-link" key={`header-tab-${tab}`}>
          {tab}
        </a>
      ))}
    </nav>
  )
}

export default Nav
