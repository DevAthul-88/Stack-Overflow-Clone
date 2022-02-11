import React from "react";
import Logo from '../../assets/logo-stackoverflow.svg'
import {Link} from 'wouter'
import ActiveLink from "../../Components/ActiveLink"

function Navbar() {
  
  return (
    <div className="nav">
      <div className="navbar  has-shadow is-fixed-top">
        <div className="navbar-brand ml-4">
          <a href="" className="navbar-item ">
            <img src={Logo} alt="logo" className="nav-img"/>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu mr-4">
          <div className="navbar-end">
          <div className="navbar-item">
              <Link href="/login" className="button nav-btn-2">
               Login
              </Link>
            </div>
            <div className="navbar-item">
              <Link href="/signup" className="button nav-btn">
               Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <aside className="menu mt-6  ml-5 is-hidden-mobile is-fullwidth sidebar ">
        <ul className="menu-list mt-6">
        </ul>
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
       
        <p className="menu-label mt-6">DASHBOARD</p>
        <ul className="menu-list">
          <li>
           <ActiveLink href="/">
             <span className="icon-text">
               <span className="icon">
                 <i className="fa fa-user" aria-hidden="true"></i>
               </span>
               <span>
                 Profile
               </span>
             </span>
           </ActiveLink>
          </li>
    
          <li>
            <ActiveLink href="/users">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </span>
                <span>Your Questions</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/users">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-comment" aria-hidden="true"></i>
                </span>
                <span>Your Answers</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/tags">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </span>
                <span>
                  Settings
                </span>
              </span>
            </ActiveLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
