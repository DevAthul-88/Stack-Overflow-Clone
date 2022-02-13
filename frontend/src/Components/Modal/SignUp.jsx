import React from 'react'
import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";
import {useDispatch} from 'react-redux'

function SignUp() {
  const dispatch = useDispatch()
  return (
    <div>SignUp
      <button onClick={() => dispatch({type:SET_CURRENT_STATE , state:"Login" , bool:true})}>Already have an account?</button>
    </div>
  )
}

export default SignUp