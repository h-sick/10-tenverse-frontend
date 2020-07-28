import React from "react";
import GenderFilterBox from "./Components/GenderFilterBox/GenderFilterBox";
import TypeFilterBox from "./Components/TypeFilterBox/TypeFilterBox";
import ColorFilterBox from "./Components/ColorFilterBox/ColorFilterBox";
import SizeFilterBox from "./Components/SizeFilterBox/SizeFilterBox";
import { categoryAPI } from "../../../../config";
import "./SideFilterBar.scss";

class SideFilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      category: {},
    };
  }

  handleGenderChange = (value) => {
    fetch(`${categoryAPI}/${value}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ category: json });
      });
  };

  componentDidMount() {
    fetch(categoryAPI)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ category: json });
      });
  }

  render() {
    const { filters } = this.state.category || [];

    return (
      <aside className="SideFilterBar">
        <GenderFilterBox
          filters={filters && filters.gender_filters}
          onGenderFilterChange={this.handleGenderChange}
        />
        <TypeFilterBox filters={filters && filters.type_filters} />
        <ColorFilterBox filters={filters && filters.color_filters} />
        <SizeFilterBox filters={filters && filters.size_filters} />
      </aside>
    );
  }
}

export default SideFilterBar;
