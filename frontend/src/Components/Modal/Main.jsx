import React from 'react'
import { SET_CURRENT_STATE} from "../../redux/AuthModal/type";
import {useSelector , useDispatch} from 'react-redux'
import Login from './Login'
import SignUp from './SignUp'

function Main() {
    const dispatch = useDispatch()
    const {state , bool} = useSelector((state) => state.authModal)
  return (
    <div className={`modal ${bool || bool ? "is-active":""}`}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title has-text-centered has-text-weight-bold">{state}</p>
      <button className="delete" aria-label="close" onClick={() => dispatch({type:SET_CURRENT_STATE , bool:false})}></button>
    </header>
    <section className="modal-card-body">
      {state == "Login" ? <Login /> : <SignUp />}
    </section>
    <footer className="modal-card-foot">
      <button className="button nav-btn-2" onClick={() => dispatch({type:SET_CURRENT_STATE , bool:false})}>Cancel</button>
    </footer>
  </div>
</div>
  )
}

export default Main