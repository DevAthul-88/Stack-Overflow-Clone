import { SET_CURRENT_STATE} from "../../redux/AuthModal/type";
import React from 'react';
import {useDispatch} from 'react-redux'

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <label className="label">Email</label>
      <input type="text" className="input model_input"/>

      <label className="label mt-4">Password</label>
      <input type="password" className="input model_input"/>

     <div className="columns mt-4">
       <div className="column">
       <button className="button nav-btn">Save changes</button>

       </div>
       <div className="column">
       <button className=" button " onClick={() => dispatch({type:SET_CURRENT_STATE , state:"SignUp" , bool:true})}>Don't have an account?</button>
       </div>
     </div>
    </div>
  )
}

export default Login