import React,{useState} from "react";
import Logo from "../../assets/logo-stackoverflow.svg";
import { SET_CURRENT_STATE} from "../../redux/AuthModal/type";
import {useDispatch} from 'react-redux'
import ActiveLink from "../../Components/ActiveLink";
import {Link} from 'wouter'

function Navbar() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  return (
    <div className="nav">
      <div className="navbar  has-shadow is-fixed-top">
        <div className="navbar-brand ml-4">
         <Link href="/">
         <a className="navbar-item ">
            <img src={Logo} alt="logo" className="nav-img" />
          </a>
         </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setActive(!active)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu mr-4 ${active ? "is-active" : ""}`}>
          <div className="navbar-end">

          <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-hidden-desktop">MENU</a>

              <div className="navbar-dropdown">
                <Link href="/" className="navbar-item">
                  Questions
                </Link>
                <Link href="/tags" className="navbar-item">
                  Tags
                </Link>
                <Link href="/users" className="navbar-item">
                  Users
                </Link>
              </div>
            </div>

            <div className="navbar-item">
              <button className="button nav-btn-2" onClick={() => dispatch({type:SET_CURRENT_STATE ,state:"Login" , bool:true})}>
                Login
              </button>
            </div>
            <div className="navbar-item">
              <button className="button nav-btn" onClick={() => dispatch({type:SET_CURRENT_STATE ,state:"SignUp" , bool:true})}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <aside className="menu mt-6  ml-5 is-hidden-mobile is-fullwidth sidebar ">
        <ul className="menu-list mt-6"></ul>
        <p className="menu-label">MENU</p>
        <ul className="menu-list">
          <li>
            <ActiveLink href="/">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-question" aria-hidden="true"></i>
                </span>
                <span>Questions</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/tags">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-tag" aria-hidden="true"></i>
                </span>
                <span>Tags</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/users">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-users" aria-hidden="true"></i>
                </span>
                <span>Users</span>
              </span>
            </ActiveLink>
          </li>
        </ul>

        
      </aside>
     
    </div>
  );
}

export default Navbar;
