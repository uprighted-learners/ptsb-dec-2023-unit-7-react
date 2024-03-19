import "./App.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import About from "./pages/About"
import Contact from "./pages/Contact"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import ShopHome from "./pages/ShopHome"
import RecipeDetail from "./pages/RecipeDetail"
import ErrorPage from "./pages/404"

// router will be a BrowserRouter object that will handle the urls
// while still loading the app as a Single Page Application
const router = createBrowserRouter(
  createRoutesFromElements(
    // Routes create a tree of url paths and load components (elements)
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop">
        <Route path="" element={<ShopHome />} />
        <Route path=":id" element={<RecipeDetail />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  // Router Provider attaches the router object to wherever App is mounted
  return <RouterProvider router={router} />
}

export default App
