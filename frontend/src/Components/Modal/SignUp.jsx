import React from 'react'

function SignUp({toggle}) {
  return (
    <div>SignUp
      <button onClick={() => toggle("Login")}>Already have an account?</button>
    </div>
  )
}

export default SignUp