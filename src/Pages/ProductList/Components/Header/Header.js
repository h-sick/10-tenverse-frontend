import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const { links, imgUrl, title } = this.props;

    return (
      <header className="Header">
        <div className="headerNav">
          {links.map((link) => {
            return <Link to={link.linkTo}>{link.linkText}</Link>;
          })}
        </div>
        <div
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
          className="headerImg"
        >
          <p>{title}</p>
        </div>
      </header>
    );
  }
}

export default Header;
