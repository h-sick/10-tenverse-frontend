import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="headerNav">
          {this.props.links.map((link) => {
            return <Link to={link.linkTo}>{link.linkText}</Link>;
          })}
        </div>
        <div
          style={{
            backgroundImage: `url(${this.props.imgUrl})`,
          }}
          className="headerImg"
        >
          <p>{this.props.title}</p>
        </div>
      </header>
    );
  }
}

export default Header;
