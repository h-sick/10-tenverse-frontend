import React from "react";
import { Link } from "react-dom";
import "./SideNav.scss";

const titles = [
  { title: "전체보기", link: "/category/shoes" },
  { title: "척테일러 올스타", link: "/category/chucktaylorallstar" },
  { title: "척 70", link: "/category/chuck70" },
  { title: "원스타", link: "/category/onestar" },
  { title: "잭퍼셀", link: "/category/jackpurcell" },
  { title: "프로레더", link: "/category/proleather" },
];

class SideNav extends React.Component {
  render() {
    return (
      <div className="SideNav">
        <ul>
          {titles.map((title) => {
            return (
              <Link to={title.link}>
                <li>{title.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideNav;
