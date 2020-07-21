import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends React.Component {
  render() {
    console.log(this.props);

    return (
      <header className="Header">
        <nav>
          {this.props.links.map((link) => {
            return <Link to={link.linkTo}>{link.linkText}</Link>;
          })}
        </nav>
        <div
          style={{
            backgroundImage: `url(${this.props.imgUrl})`,
          }}
        >
          <p>{this.props.title}</p>
        </div>
      </header>
    );
  }
}

export default Header;
