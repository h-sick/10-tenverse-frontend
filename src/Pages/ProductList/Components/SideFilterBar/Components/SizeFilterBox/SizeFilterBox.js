import React from "react";
import { FiMinus } from "react-icons/fi";
import "./SizeFilterBox.scss";

class SizeFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      sizes: [
        220,
        225,
        230,
        235,
        240,
        245,
        250,
        255,
        260,
        265,
        270,
        275,
        280,
        285,
        290,
        295,
        300,
      ],
    };
  }

  render() {
    const { sizes } = this.state;
    return (
      <div className="SizeFilterBox">
        <header>
          <p>색상</p>
          <FiMinus />
        </header>
        {sizes.map((size) => {
          return <div>{size}</div>;
        })}
      </div>
    );
  }
}

export default SizeFilterBox;
