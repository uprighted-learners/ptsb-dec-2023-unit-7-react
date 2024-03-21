import { useState } from "react"
import { TOKEN_KEY } from "../../constants"
import { Link, useNavigate } from "react-router-dom"

// TODO: add a log out
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [invalid, setInvalid] = useState(false)

  const nav = useNavigate()

  const handleLogin = () => {
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem(TOKEN_KEY, res.token)
          nav("/")
        } else {
          setInvalid(true)
        }
      })
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <input
        className="global-input"
        type="text"
        name="email"
        placeholder="Email address"
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <br />
      <input
        className="global-input"
        type="password"
        name="password"
        placeholder="Password"
        onChange={e => {
          setPassword(e.target.value)
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            handleLogin()
          }
        }}
      />
      {invalid && <span className="warning">Invalid password</span>}
      <br />
      <button className="global-button" onClick={handleLogin}>
        Login
      </button>

      <div>
        No account? <Link to="register">JOIN NOW!</Link>
      </div>
    </>
  )
}

export default Login
