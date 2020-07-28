import React from "react";
import { iconGiftBox, iconKaKao, signinAPI } from "../../config";
import "./Login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      incorrectId: false,
      incorrectPw: false,
      loginErr: false,
    };
  }

  handleInput = (e) => {
    const { id, pw } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    if (e.keyCode === 13 && id && pw) {
      this.handleLogin();
    }
  };

  handleId = () => {
    const { id } = this.state;
    this.setState({ incorrectId: id.includes("@") ? false : true });
  };

  handlePw = () => {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    const specialCharacters = /[~!@#$%<>^&*]/;
    const { pw } = this.state;

    if (
      !numbers.test(pw) ||
      !spellings.test(pw) ||
      !specialCharacters.test(pw) ||
      pw.length < 8 ||
      pw.length > 16
    ) {
      this.setState({ incorrectPw: true });
    } else if (
      numbers.test(pw) &&
      spellings.test(pw) &&
      specialCharacters.test(pw) &&
      pw.length >= 8 &&
      pw.length < 17
    ) {
      this.setState({ incorrectPw: false });
    }
  };

  handleLogin = () => {
    const { id, pw, incorrectId, incorrectPw } = this.state;

    if (!incorrectId && !incorrectPw) {
      fetch(signinAPI, {
        method: "POST",
        body: JSON.stringify({
          email: id,
          password: pw,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          }
          return res.json();
        })
        .then((res) => {
          if (res.access_token) {
            this.props.history.push("/main");
          }
        })
        .catch(
          (error) => console.error("Error:", error),
          this.setState({ loginErr: true })
        );
    } else {
      return null;
    }
  };

  render() {
    const { incorrectId, incorrectPw, loginErr } = this.state;

    return (
      <main className="Login">
        <section>
          <h1>로그인</h1>
          <div className={loginErr ? "displayErr" : "hidden"}>
            아이디 혹은 비밀번호가 잘못 입력되었습니다.
          </div>
          <input
            type="email"
            placeholder="이메일 형태로 입력해주세요."
            className="id"
            name="id"
            onKeyUp={this.handleInput}
            onChange={this.handleId}
          />
          <div className={incorrectId ? "warningText" : "hidden"}>
            이메일 형태로 입력해주세요
          </div>
          <input
            type="password"
            placeholder="비밀번호 (영문/숫자/특수문자 조합 8자 이상)"
            className="pw"
            name="pw"
            onKeyUp={this.handleInput}
            onChange={this.handlePw}
          />
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
              <path d={iconKaKao}></path>
            </svg>
            <p>카카오 계정으로 1초 로그인</p>
          </button>
          <div className="sideBetween signUpBox">
            <p>회원가입</p>
            <p>비회원 주문조회</p>
          </div>
          <div className="membershipBenefit">
            <svg id="icon-giftbox" viewBox="0 0 32 32">
              <path d={iconGiftBox}></path>
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
