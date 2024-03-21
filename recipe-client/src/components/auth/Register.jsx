import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const nav = useNavigate()

  const handleRegister = () => {
    // TODO: log user in
    fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // shorthand, because our key names match the value names
        email,
        password,
        username,
      }),
    })
      .then(res => res.json())
      .then(res => nav("/users"))
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <h3>Register</h3>
      <input
        className="global-input"
        type="text"
        name="username"
        placeholder="Username"
        onChange={e => {
          setUsername(e.target.value)
        }}
      />
      <br />
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
      />
      <br />
      <button className="global-button" onClick={handleRegister}>
        Register
      </button>
    </>
  )
}

export default Register
