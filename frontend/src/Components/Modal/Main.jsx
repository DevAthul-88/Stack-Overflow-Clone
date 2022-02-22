import React from 'react'
import { TOGGLE_AUTH_MODAL} from "../../redux/AuthModal/type";
import {USER_REGISTER_SUCCESS} from '../../redux/Auth/type'
import {useSelector , useDispatch} from 'react-redux'
import Login from './Login'
import SignUp from './SignUp'
import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";

function Main() {
    const dispatch = useDispatch()
    const {state , bool} = useSelector((state) => state.authModal)
    
  return (
    <div className={`modal ${ bool ? "is-active":""}`}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title has-text-centered has-text-weight-bold">{state}</p>
      <button className="delete" aria-label="close" onClick={() => dispatch({type:TOGGLE_AUTH_MODAL , bool:false})}></button>
    </header>
    <section className="modal-card-body">
      {state == "Login" ? <Login /> : <SignUp />}
    </section>
  
  </div>
</div>
  )
}

export default Main