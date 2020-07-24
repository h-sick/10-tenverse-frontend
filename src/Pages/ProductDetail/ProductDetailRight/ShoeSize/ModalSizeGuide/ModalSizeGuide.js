import React, { Component } from "react";
import "./ModalSizeGuide.scss";

class ModalSizeGuide extends Component {
  render() {
    const sizeArr = [
      [3, 220, 3, "-"],
      [3.5, 225, 3.5, "-"],
      [4, 230, 4, "-"],
      [4.5, 235, 4.5, "-"],
      [5, 240, 5, 220],
      ["5.5/6", 245, "5.5/6", 225],
      [6.5, 250, 6.5, 230],
      [7, 255, 7, 235],
      [7.5, 260, 7.5, 240],
      [8, 265, 8, 245],
      [8.5, 270, 8.5, 250],
      [9, 275, 9, 255],
      [9.5, 280, 9.5, 260],
      [10, 285, 10, 265],
      [10.5, 290, 19.5, 270],
      [11, 295, 11, "-"],
    ];
    return (
      <div className="ModalSizeGuide">
        <div className="modalContent">
          <div className="modalTop">
            <button onClick={this.props.onClose}>X</button>
          </div>
          <div className="modalSizeGuideTitle">신발 사이즈 차트</div>
          <div className="sizeMeasure">
            <span>컨버스 사이즈</span>
            <span>밀리미터(mm)</span>
          </div>
          <table>
            <tr>
              <th>US MEN</th>
              <th>KOREA MEN</th>
              <th>US WOMEN</th>
              <th>KOREA WOMEN</th>
            </tr>
            {sizeArr.map((row) => {
              return (
                <tr>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default ModalSizeGuide;
