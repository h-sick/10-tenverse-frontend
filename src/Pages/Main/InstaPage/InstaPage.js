import React from "react";
// import InstaList from "../Components/ItemList";
import "./InstaPage.scss";
import InstaList from "../Components/Instagram/InstaList";

class InstaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/insta.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          posts: res.posts,
        });
      });
  }

  render() {
    console.log(this.state.posts);
    const { posts } = this.state;

    return (
      <div className="InstaPage">
        <div className="instaTitle">
          <p>CONVERSE COMMUNITY</p>
        </div>
        <div className="imgContainer">
          <InstaList posts={posts} />
        </div>
        <div className="viewMoreBox">
          <button type="text">더보기</button>
        </div>
      </div>
    );
  }
}

export default InstaPage;
