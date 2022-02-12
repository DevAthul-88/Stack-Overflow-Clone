import React from 'react'

function Login({toggle}) {
  return (
    <div>
      
      <button onClick={() => toggle("SignUp")}>Don't have an account</button>
    </div>
  )
}

export default Login