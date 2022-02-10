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
            class="navbar-burger"
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

      <aside class="menu mt-6  ml-5 is-hidden-mobile is-fullwidth sidebar ">
        <ul class="menu-list mt-6">
         
       
        </ul>
        <p class="menu-label">Public</p>
        <ul class="menu-list">
          <li>
           <ActiveLink href="/">Questions</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/tags">Tags</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/users">Users</ActiveLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
