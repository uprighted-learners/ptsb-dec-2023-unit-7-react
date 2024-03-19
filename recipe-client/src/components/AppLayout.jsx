import { NavLink, Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <h1>PTSB Dec 2023 Recipe App</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="recipes">Recipes</NavLink>
        <NavLink to="users">Login</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
