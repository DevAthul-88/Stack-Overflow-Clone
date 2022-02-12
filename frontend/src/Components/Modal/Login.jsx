import React from 'react'

function Login({toggle}) {
  return (
    <div>Login
      <br />
      <button onClick={() => toggle("SignUp")}>Don't have an account</button>
    </div>
  )
}

export default Login