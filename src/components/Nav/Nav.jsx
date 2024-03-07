import "./nav.css"

function Nav(props) {
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
