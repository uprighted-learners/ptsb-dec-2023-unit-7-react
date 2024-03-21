import { NavLink, Outlet } from "react-router-dom"
import { TOKEN_KEY } from "../constants"

function AppLayout() {
  const loggedIn = localStorage.getItem(TOKEN_KEY)
  return (
    <div className="app-layout">
      <header>
        <h1>PTSB Dec 2023 Recipe App</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="recipes">Recipes</NavLink>
        {loggedIn ? (
          <>
            <NavLink to="userhome">Hello, User</NavLink>
            <NavLink to="logout">Logout</NavLink>
          </>
        ) : (
          <NavLink to="users">Login</NavLink>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
