import React from "react";
import GenderFilterBox from "./Components/GenderFilterBox/GenderFilterBox";
import TypeFilterBox from "./Components/TypeFilterBox/TypeFilterBox";
import ColorFilterBox from "./Components/ColorFilterBox/ColorFilterBox";
import SizeFilterBox from "./Components/SizeFilterBox/SizeFilterBox";
import "./SideFilterBar.scss";

class SideFilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      category: {},
    };
  }

  componentDidMount() {
    fetch("http://10.58.0.114:8000/product/category")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ category: json });
      });
  }

  render() {
    const { category } = this.state;
    console.log(category);

    return (
      <aside className="SideFilterBar">
        <GenderFilterBox filters={category.filters} />
        <TypeFilterBox filters={category.filters} />
        <ColorFilterBox filters={category.filters} />
        <SizeFilterBox filters={category.filters} />
      </aside>
    );
  }
}

export default SideFilterBar;
