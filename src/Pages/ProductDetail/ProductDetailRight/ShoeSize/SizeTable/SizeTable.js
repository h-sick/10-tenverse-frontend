import React, { Component } from "react";
import "./SizeTable.scss";

class SizeTable extends Component {
  constructor() {
    super();
    this.state = {
      // pickSizeBtnActive: false,
    };
  }
  // pickSizeBtn = (e) => {
  //   const { pickSizeBtnActive } = this.state;
  //   this.setState({ pickSizeBtnActive: !pickSizeBtnActive });
  // };

  render() {
    // const { pickSizeBtnActive } = this.state;
    return (
      <div className="SizeTable">
        <ul>
          <li className="pickSizeBtn">220</li>
          <li className="pickSizeBtn">225</li>
          <li className="pickSizeBtn">230</li>
          <li className="pickSizeBtn">235</li>
          <li className="pickSizeBtn">240</li>
          <li className="pickSizeBtn">245</li>
          <li className="pickSizeBtn">250</li>
          <li className="pickSizeBtn">255</li>
          <li className="pickSizeBtn">260</li>
          <li className="pickSizeBtn">265</li>
          <li className="pickSizeBtn">270</li>
          <li className="pickSizeBtn">275</li>
          <li className="pickSizeBtn">280</li>
          <li className="pickSizeBtn">285</li>
          <li className="pickSizeBtn">290</li>
          <li className="pickSizeBtn">295</li>
          <li className="pickSizeBtn">300</li>
        </ul>
      </div>
    );
  }
}

export default SizeTable;
