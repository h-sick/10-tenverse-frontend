import React, { Component } from "react";
import "./SocialInsta.scss";
import DetailInstaList from "./Components/DetailInstaList";
import { instaAPI } from "../../../../config";
import { gif } from "../../../../config";

const LIMIT = 8;

class SocialInsta extends Component {
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
    const { posts } = this.state;

    return (
      <div className="SocialInsta">
        <div className="socialTitle">LOOKS FROM THE CONVERSE COMMUNITY</div>
        <div className="socialSubtitle">
          컨버스 커뮤니티가 전하는 인스타그램 속 <span>#컨버스스타일</span>
        </div>
        <div className="instaContainer">
          {posts.length !== 0 && <DetailInstaList posts={posts} />}
        </div>
        <button>더보기</button>
      </div>
    );
  }
}

export default SocialInsta;
