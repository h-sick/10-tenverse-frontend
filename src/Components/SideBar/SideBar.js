import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./SideBar.scss";

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navDatas: [
        { title: "전체보기", url: "/category/shoes" },
        { title: "척테일러 올스타", url: "/category/chucktaylorallstar" },
        { title: "척 70", url: "/category/chuck70" },
        { title: "원스타", url: "/category/onestar" },
        { title: "잭퍼셀", url: "/category/jackpurcell" },
        { title: "프로레더", url: "/category/proleather" },
      ],
      recommendDatas: [
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
      ],
    };
  }
  render() {
    const { navDatas, recommendDatas } = this.state;
    const { sideBarDisplay } = this.props;
    console.log(sideBarDisplay);
    return (
      <div className={sideBarDisplay ? "SideBar" : "HiddenSideBar"}>
        <div className="sideBarOverlay">
          <div className="positionBox">
            <svg
              id="icon-close"
              viewBox="0 0 37 37"
              onClick={this.props.handleSideBar}
            >
              <path
                fill-rule="nonzero"
                d="M36.533 3.533L33 0 18.267 14.733 3.533 0 0 3.533l14.733 14.734L0 33l3.533 3.533L18.267 21.8 33 36.533 36.533 33 21.8 18.267z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="sideBarInner">
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
