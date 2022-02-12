import React,{useEffect, useState} from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Main({current , activate}) {
    const [state , setState] = useState("Login");
    const [active , setActive] = useState(true)

  return (
    <div className={`modal ${active ? "is-active":""}`}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title has-text-centered has-text-weight-bold">{state}</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
      {state == "Login" ? <Login toggle={setState}/> : <SignUp toggle={setState}/>}
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success">Save changes</button>
      <button className="button" onClick={() => setActive(false)}>Cancel</button>
    </footer>
  </div>
</div>
  )
}

export default Main