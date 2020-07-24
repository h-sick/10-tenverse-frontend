// import React, { Component } from "react";
// import "./SizeFilterBox.scss";

// class SizeFilterBox extends Component {
//   constructor() {
//     super();
//     this.state = {
//       shoeSizeStart: 220,
//       sizeTableBtnClicked: false,
//       isBtnActive: null,
//     };
//   }

//   sizeTableBtn = (i) => {
//     const { sizeTableBtnClicked } = this.state;
//     this.setState({
//       isBtnActive: i,
//       sizeTableBtnClicked: !sizeTableBtnClicked,
//     });
//   };

//   render() {
//     const { shoeSizeStart, isBtnActive } = this.state;
//     let shoeSizeArr = Array(17).fill(shoeSizeStart);

//     return (
//       <div className="SizeFilterBox">
//         <ul>
//           {shoeSizeArr.map((size, i) => {
//             return (
//               <li
//                 onClick={() => this.sizeTableBtn(i)}
//                 className={isBtnActive === i ? "sizeBtnClicked" : null}
//               >
//                 {(size += 5 * i)}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default SizeFilterBox;

import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import "./SizeFilterBox.scss";

class SizeFilterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      fold: false,
      clicked: false,
    };
  }

  handleFolder = () => {
    this.setState({ fold: !this.state.fold });
  };

  handleSizeClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { fold, clicked } = this.state;
    const { filters } = this.props;

    return (
      <div className="SizeFilterBox">
        <section className={fold ? "fold" : "display"}>
          <header onClick={this.handleFolder}>
            <p>사이즈</p>
            <FiMinus className={fold ? "hidden" : "minusIcon"} />
            <FiPlus className={fold ? "plusIcon" : "hidden"} />
          </header>
          <ul className="box">
            {filters &&
              filters.size_filters.map((sizeFilter) => {
                return (
                  <li
                    onclick={this.handleSizeClick}
                    name={clicked ? "sizeBtnClicked" : null}
                  >
                    {sizeFilter}
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    );
  }
}

export default SizeFilterBox;
