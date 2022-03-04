import React, { useState } from "react";
import Logo from "../../assets/logo-stackoverflow.svg";
import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";
import { useSelector } from "react-redux";
import { Link } from "wouter";
import ActiveLink from "../../Components/ActiveLink";

function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);
  const [active, setActive] = useState(false);
  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="nav">
      <div className="navbar   has-shadow is-fixed-top">
        <div className="navbar-brand ml-4">
          <Link href="/">
            <a className="navbar-item">
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
            <div className="navbar-item">
              <Link href="/ask" className="button nav_ask is-small">
                <span className="icon">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
                <span>Ask Question</span>
              </Link>
            </div>

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

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-hidden-desktop">DASHBOARD</a>

              <div className="navbar-dropdown">
                <Link href="/profile" className="navbar-item">
                  Profile
                </Link>
                <Link href="/questions" className="navbar-item">
                  Your Questions
                </Link>
                <Link href="/answers" className="navbar-item">
                  Your Answers
                </Link>
                <Link href="/profile/settings" className="navbar-item">
                  Settings
                </Link>
              </div>
            </div>

            <div className="navbar-item is-hidden-touch">
              <Link href="/profile">
                <img
                  src={`https://secure.gravatar.com/avatar/${userInfo._id}?s=164&d=identicon`}
                  alt=""
                  className="avatar_nav"
                  title={`${userInfo.userName}`}
                />
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable ">
              <a className="navbar-link is-arrowless">
                <i
                  className="fab fa-stack-exchange fa-lg"
                  aria-hidden="true"
                ></i>
              </a>

              <div className="navbar-dropdown is-right">
                <Link href="/profile" className="navbar-item">
                  Profile
                </Link>
                <hr className="navbar-divider" />
                <div className="navbar-item is-danger" onClick={LogOut}>
                  <a className="is-danger">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="menu mt-6  ml-5 is-hidden-touch is-fullwidth sidebar">
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
            <ActiveLink href="/profile">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <span>Profile</span>
              </span>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/questions">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </span>
                <span>Your Questions</span>
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/answers">
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
