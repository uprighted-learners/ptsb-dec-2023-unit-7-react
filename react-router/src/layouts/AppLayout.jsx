import { NavLink, Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <h1>PTSB Dec 2023 Bookstore</h1>
        {/* The `to` attribute must match the route path */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </header>
      <main>
        {/* Outlet is where the components that are 
        loaded by the router at each path will be rendered */}
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
