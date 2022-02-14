import React,{useState} from "react";
import Logo from "../../assets/logo-stackoverflow.svg";
import { SET_CURRENT_STATE} from "../../redux/AuthModal/type";
import {useSelector} from 'react-redux'
import { Link } from "wouter";
import ActiveLink from "../../Components/ActiveLink";


function Navbar() {
  const {state} = useSelector((state) => state.auth )
  return (
    <div className="nav">
      <div className="navbar  has-shadow is-fixed-top">
        <div className="navbar-brand ml-4">
          <a href="" className="navbar-item ">
            <img src={Logo} alt="logo" className="nav-img" />
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
        <Link href="/profile/" >
            <img src={`https://secure.gravatar.com/avatar/${state._id}?s=164&d=identicon`} alt="" className="avatar_nav" title={`${state.userName}`}/>
          </Link>
        </div>
        <div className="navbar-item has-dropdown is-hoverable ">
    <a className="navbar-link is-arrowless">
     <i className="fab fa-stack-exchange fa-lg" aria-hidden="true"></i>
    </a>

    <div className="navbar-dropdown is-right">
      <Link href="#" className="navbar-item">
       Profile
      </Link>
      <hr className="navbar-divider" />
      <div className="navbar-item">
        Logout
      </div>
    </div>
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

        <p className="menu-label mt-6">DASHBOARD</p>
        <ul className="menu-list">
          <li>
            <ActiveLink href="/me/profile">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <span>Profile</span>
              </span>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/me/questions">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </span>
                <span>Your Questions</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/me/answers">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-comment" aria-hidden="true"></i>
                </span>
                <span>Your Answers</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/settings">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </span>
                <span>Settings</span>
              </span>
            </ActiveLink>
          </li>
        </ul>
      </aside>
     
    </div>
  );
}

export default Navbar;
