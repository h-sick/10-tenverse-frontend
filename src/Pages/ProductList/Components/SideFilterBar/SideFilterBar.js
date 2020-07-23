import React from "react";
import GenderFilterBox from "./Components/GenderFilterBox/GenderFilterBox";
import TypeFilterBox from "./Components/TypeFilterBox/TypeFilterBox";
import ColorFilterBox from "./Components/ColorFilterBox/ColorFilterBox";
import "./SideFilterBar.scss";

class SideFilterBar extends React.Component {
  constructor() {
    super();
    this.state = [
      {
        headerTitle: "구분",
        filterList: ["남성", "여성"],
      },
      {
        headerTitle: "제품타입",
        filterList: ["뮬", "샌들&뮬", "스니커즈"],
      },
    ];
  }

  render() {
    return (
      <aside className="SideFilterBar">
        <GenderFilterBox />
        <TypeFilterBox />
        <ColorFilterBox />
      </aside>
    );
  }
}

export default SideFilterBar;
