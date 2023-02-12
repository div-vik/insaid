import React from "react";
import Footer_item from "./Footer_item";
import { Link } from "react-router-dom";
import ".//Footer.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <div className="top">
          <Link exact="true" to="/">
            <img
              className="footer-logo-icon"
              src="https://www.insaid.co/wp-content/uploads/2021/05/insaid-text-logo-2x-150x69.png"
            />
          </Link>
        </div>
        <div className="middle">
          <ul className="links">
            {Footer_item.map((item, index) => {
              return (
                <li className={item.cName} key={index}>
                  <Link exact="true" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bottom">
          <div className="social-media">
            <div className="facebook">
              <a href="#">
                <FacebookOutlined />
              </a>
            </div>
            <div className="instagram">
              <a href="#">
                <InstagramOutlined />
              </a>
            </div>
            <div className="twitter">
              <a href="#">
                <TwitterOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="copyright">
          <h5>
            Ⓒ 2022 INSAID A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved.
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
