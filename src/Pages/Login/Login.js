import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPw: "",
      incorrectId: false,
      incorrectPw: false,
    };
  }

  handleInput = (e) => {
    e.target.className === "id"
      ? this.setState({ userId: e.target.value })
      : this.setState({ userPw: e.target.value });
    if (e.keyCode === 13) {
      this.handleLogin();
    }
  };

  handleId = (e) => {
    this.state.userId.includes("@")
      ? this.setState({ incorrectId: false })
      : this.setState({ incorrectId: true });
  };

  handlePw = (e) => {
    console.log(this.state.userPw);
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    const specialCharacters = /[~!@#$%<>^&*]/;
    const { userPw } = this.state;
    if (
      !numbers.test(userPw) ||
      !spellings.test(userPw) ||
      !specialCharacters.test(userPw) ||
      userPw.length < 8 ||
      userPw.length > 16
    ) {
      this.setState({ incorrectPw: true });
    } else if (
      numbers.test(userPw) &&
      spellings.test(userPw) &&
      specialCharacters.test(userPw) &&
      userPw.length >= 8 &&
      userPw.length < 17
    ) {
      this.setState({ incorrectPw: false });
    }
  };

  handleLogin = (e) => {
    const { userId, userPw } = this.state;
    fetch("http://10.58.0.114:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.props.history.push("/"));
  };

  render() {
    const { incorrectId, incorrectPw } = this.state;
    return (
      <main className="Login">
        <section>
          <h1>로그인</h1>
          <input
            type="email"
            placeholder="이메일 형태로 입력해주세요."
            className="id"
            onKeyUp={this.handleInput}
            onChange={this.handleId}
          ></input>
          <div className={incorrectId ? "warningText" : "hidden"}>
            이메일 형태로 입력해주세요
          </div>
          <input
            type="password"
            placeholder="비밀번호 (영문/숫자/특수문자 조합 8자 이상)"
            className="pw"
            onKeyUp={this.handleInput}
            onChange={this.handlePw}
          ></input>
          <div className={incorrectPw ? "warningText" : "hidden"}>
            영문/숫자/특수문자 조합 8~16자 조합으로 입력해주세요.
          </div>
          <div className="sideBetween forgotPw">
            <div>
              <input
                type="checkbox"
                name="staySignedIn"
                value="staySignedIn"
                className="staySignInBtn"
              />
              <p>로그인 상태 유지</p>
            </div>
            <p className="right">아이디/비밀번호 찾기</p>
          </div>
          <button onClick={this.handleLogin} className="loginBtn">
            로그인
          </button>
          <button className="kakaoLoginBtn">
            <svg id="icon-kakao" viewBox="0 0 24 22">
              <path d="M12,0C5.373,0,0,4.238,0,9.465c0,3.403,2.277,6.386,5.693,8.054 c-0.251,0.935-0.909,3.387-1.04,3.912c-0.163,0.65,0.239,0.643,0.502,0.467c0.206-0.138,3.288-2.229,4.618-3.13 c0.722,0.106,1.466,0.163,2.227,0.163c6.627,0,12-4.238,12-9.466C24,4.238,18.627,0,12,0"></path>
            </svg>
            <p>카카오 계정으로 1초 로그인</p>
          </button>
          <div className="sideBetween signUpBox">
            <p>회원가입</p>
            <p>비회원 주문조회</p>
          </div>
          <div className="membershipBenefit">
            <svg id="icon-giftbox" viewBox="0 0 32 32">
              <path d="M24.96,6.197c0.607-0.653,0.986-1.541,0.986-2.521C25.946,1.632,24.313,0,22.335,0 c-1.502,0-4.964,2.246-6.348,4.264c-1.43-2.018-4.879-4.199-6.321-4.199c-1.973,0-3.612,1.633-3.612,3.677 c0,0.946,0.353,1.802,0.921,2.448H0v8.784h1.907V32h10.012h8.169H30.1V14.981H32V6.197H24.96z M22.335,1.365 c1.228,0,2.246,1.018,2.246,2.383c0,1.149-0.803,2.136-1.842,2.345h-5.524c-0.353-0.105-0.464-0.229-0.464-0.301 C16.751,4.63,20.833,1.365,22.335,1.365 M9.666,1.365c1.43,0,5.583,3.265,5.583,4.427c0,0.105-0.242,0.222-0.418,0.301H9.267 C8.229,5.884,7.425,4.897,7.425,3.749C7.419,2.449,8.444,1.365,9.666,1.365 M11.912,30.636H3.266V14.981h8.646V30.636z M11.912,13.688H1.365V7.563h10.554v6.126H11.912z M18.717,30.636H13.27V7.557h5.447V30.636z M28.729,30.636h-8.646V14.981h8.646 V30.636z M30.629,13.688H20.082V7.563h10.553v6.126H30.629z"></path>
            </svg>
            지금 회원으로 가입하시고, 특별한 멤버십 혜택과 <br></br>다양한 회원
            전용 상품을 만나보세요.
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
