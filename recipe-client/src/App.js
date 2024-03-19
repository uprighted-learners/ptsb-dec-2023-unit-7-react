import "./App.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./components/Home"
import RecipeHome from "./components/RecipeHome"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="recipes" element={<RecipeHome />}>
        {/* TODO: create components for these routes */}
        <Route path="add" />
        <Route path="edit" />
      </Route>
      <Route path="users">
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
