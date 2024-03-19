import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

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
          setToken(res.token)
          localStorage.setItem("authToken", res.token)
          console.log(localStorage)
        } else {
          console.log("invalid password")
          // TODO: handle bad passwords
        }
      })
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <input
        className="auth-input"
        type="text"
        name="email"
        placeholder="Email address"
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <br />
      <input
        className="auth-input"
        type="password"
        name="password"
        placeholder="Password"
        onChange={e => {
          setPassword(e.target.value)
        }}
      />
      <br />
      <button className="auth-button" onClick={handleLogin}>
        Login
      </button>

      <div>
        No account? <a href="users/register">JOIN NOW!</a>
      </div>
    </>
  )
}

export default Login
