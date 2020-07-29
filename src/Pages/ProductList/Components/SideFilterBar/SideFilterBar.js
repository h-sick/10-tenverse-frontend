import React from "react";
import GenderFilterBox from "./Components/GenderFilterBox/GenderFilterBox";
import TypeFilterBox from "./Components/TypeFilterBox/TypeFilterBox";
import ColorFilterBox from "./Components/ColorFilterBox/ColorFilterBox";
import SizeFilterBox from "./Components/SizeFilterBox/SizeFilterBox";
import { shoesListAPI } from "../../../../config";
import { filterAPI } from "../../../../config";
import "./SideFilterBar.scss";

class SideFilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      filterDatas: {
        gender_filters: ["여성", "남성", "남녀공용"],
        color_filters: [
          "black",
          "blue",
          "green",
          "indigo",
          "purple",
          "brown",
          "gray",
          "khaki",
          "beige",
          "red",
          "orange",
          "pink",
          "yellow",
          "white",
        ],
        type_filters: ["뮬", "샌들&뮬", "스니커즈"],
        size_filters: [
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
      },
    };
  }

  render() {
    const { filterDatas } = this.props || [];

    return (
      <aside className="SideFilterBar">
        <GenderFilterBox
          filters={filterDatas && filterDatas.gender_filters}
          handleFilterChange={this.props.handleFilterChange}
        />
        <TypeFilterBox
          filters={filterDatas && filterDatas.type_filters}
          handleFilterChange={this.props.handleFilterChange}
        />
        <ColorFilterBox
          filters={filterDatas && filterDatas.color_filters}
          handleFilterChange={this.props.handleFilterChange}
        />
        <SizeFilterBox
          filters={filterDatas && filterDatas.size_filters}
          handleFilterChange={this.props.handleFilterChange}
        />
      </aside>
    );
  }
}

export default SideFilterBar;
