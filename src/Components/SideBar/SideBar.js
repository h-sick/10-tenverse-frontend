import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";

const navDatas = [
  { title: "전체보기", url: "/category/shoes" },
  { title: "척테일러 올스타", url: "/category/chucktaylorallstar" },
  { title: "척 70", url: "/category/chuck70" },
  { title: "원스타", url: "/category/onestar" },
  { title: "잭퍼셀", url: "/category/jackpurcell" },
  { title: "프로레더", url: "/category/proleather" },
];

const recommendDatas = [
  {
    title: "빅 사이즈",
    url:
      "https://image.converse.co.kr/cmsstatic/menu/12723/Flyout_256x300_01-1.jpg",
  },
  {
    title: "농구화 컬렉션",
    url:
      "https://image.converse.co.kr/cmsstatic/menu/12733/Flyout_256x300_03-1.jpg",
  },
  {
    title: "크리에이트 더 퓨처",
    url:
      "https://image.converse.co.kr/cmsstatic/menu/12751/Flyout_256x300_02-1.jpg",
  },
  {
    title: "트라이블록",
    url:
      "https://image.converse.co.kr/cmsstatic/menu/12752/Flyout_256x300_04-1.jpg",
  },
];

class SideBar extends React.Component {
  render() {
    const { sideBarDisplay } = this.props;
    console.log(sideBarDisplay);
    return (
      <div className="SideBar">
        <div
          className={`sideBarOverlay ${sideBarDisplay ? "" : "hidden"}`}
        ></div>
        <div className={`sideBarInner ${sideBarDisplay ? "" : "hidden"}`}>
          <main className="main">
            <ul>
              {navDatas.map((navData) => {
                return (
                  <Link to={navData.url}>
                    <li className="navTitle">{navData.title}</li>
                  </Link>
                );
              })}
            </ul>
            <div className="recommendBox">
              <header>추천상품</header>
              <ul>
                {recommendDatas.map((recommendData) => {
                  return (
                    <li>
                      <img alt="추천상품 이미지" src={recommendData.url} />
                      <p>{recommendData.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default SideBar;
