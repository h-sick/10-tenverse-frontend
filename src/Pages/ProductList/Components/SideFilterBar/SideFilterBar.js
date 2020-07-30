import React from "react";
import GenderTypeFilterBox from "./Components/GenderTypeFilterBox/GenderTypeFilterBox";
// import GenderFilterBox from "./Components/GenderFilterBox/GenderFilterBox";
// import TypeFilterBox from "./Components/TypeFilterBox/TypeFilterBox";
import ColorFilterBox from "./Components/ColorFilterBox/ColorFilterBox";
import SizeFilterBox from "./Components/SizeFilterBox/SizeFilterBox";
import "./SideFilterBar.scss";

class SideFilterBar extends React.Component {
  render() {
    const { filterDatas } = this.props || [];

    return (
      <aside className="SideFilterBar">
        <GenderTypeFilterBox
          filters={filterDatas && filterDatas.gender_filters}
          handleFilterChange={this.props.handleFilterChange}
          name="gender"
        />
        <GenderTypeFilterBox
          filters={filterDatas && filterDatas.type_filters}
          handleFilterChange={this.props.handleFilterChange}
          name="type"
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
