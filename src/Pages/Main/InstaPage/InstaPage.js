import React from "react";
import "./InstaPage.scss";
import InstaList from "../Components/Instagram/InstaList";
import { instaAPI } from "../../../config";
import { gif } from "../../../config";

const LIMIT = 8;

class InstaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      offset: 0,
      loading: false,
    };
  }

  clickViewMore = () => {
    const { offset, posts, loading } = this.state;

    this.setState(
      {
        offset: offset + 1,
        loading: true,
      },
      () => {
        fetch(`${instaAPI}?page=${this.state.offset}&limit=${LIMIT}`)
          .then((res) => res.json())
          .then((res) => {
            this.setState(
              {
                posts: [...this.state.posts, ...res.posts],
              },
              () => {
                this.setState({ loading: false });
              }
            );
          });
      }
    );
  };

  componentDidMount() {
    const { offset } = this.state;
    fetch(`${instaAPI}?page=${offset}&limit=${LIMIT}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          posts: res.posts,
        });
      });
  }

  render() {
    const { posts, loading } = this.state;
    console.log("InstaPage: ", posts);

    return (
      <div className="InstaPage">
        <div className="instaTitle">
          <p>CONVERSE COMMUNITY</p>
        </div>
        <div className="imgContainer">
          <InstaList posts={posts} />
        </div>
        <div className="viewMoreBox">
          <button type="text" onClick={this.clickViewMore}>
            더보기
          </button>
        </div>
        <div className={`loadingModal ${loading ? "" : "hidden"}`}>
          <img src={gif} alt="preloader gif" />
        </div>
        ;
      </div>
    );
  }
}

export default InstaPage;
