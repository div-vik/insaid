import React, { useState } from "react";
import { Link, Routes } from "react-router-dom";
import ".//Header.css";
import Menu_items from "./Menu_items";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link exact="true" to="/">
            <img
              className="logo-icon"
              src="https://www.insaid.co/wp-content/uploads/2021/05/insaid-text-logo-2x-150x69.png"
            />
          </Link>
        </div>
        <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {Menu_items.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    to={item.url}
                    activeclassname="active"
                    className={item.cName}
                    onClick={handleClick}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
