import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./TextBox.scss";

class TextBox extends React.Component {
  render() {
    const { title, text } = this.props;

    return (
      <div className="TextBox">
        <h2>{title}</h2>
        <div>
          <FiArrowRight />
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default TextBox;
