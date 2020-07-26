import React from "react";
import "./SignUp.scss";
import { kakaoLogo } from "../../config";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPw: "",
      userRePw: "",
      userName: "",
      userNumber: "",
      userBirthDate: "",
      gender: "여성",
      // incorrectEmail: false,
      // incorrectPw: false,
      // incorrectRePw: false,
      // incorrectName: false,
      // incorrectNumber: false,
      // incorrectBirthDate: false,
      // incorrectGender: false,
      entireCheck: false,
      firstCheck: false,
      secondCheck: false,
      thirdCheck: false,
      fourthCheck: false,
    };
  }

  handleSignUp = () => {
    const {
      userEmail,
      userPw,
      userName,
      userNumber,
      userBirthDate,
      incorrectEmail,
      incorrectPw,
      gender,
      incorrectRePw,
      incorrectName,
      incorrectNumber,
      incorrectBirthDate,
      incorrectGender,
      incorrectEntireCheck,
    } = this.state;

    if (
      !incorrectEmail &&
      !incorrectPw &&
      !incorrectRePw &&
      !incorrectName &&
      !incorrectNumber &&
      !incorrectBirthDate &&
      !incorrectGender &&
      !incorrectEntireCheck
    ) {
      fetch("http://10.58.0.114:8000/user/ignup", {
        method: "POST",
        body: JSON.stringify({
          email: userEmail,
          password: userPw,
          name: userName,
          phone_number: userNumber,
          birth_date: userBirthDate,
          gender: gender,
        }),
      })
        .then((res) => {
          console.log(res);
          if (!res.ok) throw new Error();
          return res.json();
        })
        .then((res) => this.props.history.push("/"))
        .catch((error) => console.error("Error:", error));
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleId = (e) => {
    const { userEmail } = this.state;
    return userEmail.includes("@");
    // const incorrectEmail = userEmail.includes("@");

    // this.setState({
    //   incorrectEmail: e.target.value.includes("@") ? false : true,
    // });
  };

  handlePw = (e) => {
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
      return false;
    } else if (
      numbers.test(userPw) &&
      spellings.test(userPw) &&
      specialCharacters.test(userPw) &&
      userPw.length >= 8 &&
      userPw.length < 17
    ) {
      return true;
    }
  };

  checkingPw = () => {
    const { userPw, userRePw } = this.state;
    // this.setState({
    //   incorrectPw: !(userPw === e.target.value),
    // });
    console.log(userPw);
    return userPw === userRePw;
  };

  checkingName = (e) => {
    const { userName } = this.state;
    return userName.length > 0;
    // this.setState({
    //   incorrectName: e.target.value.length < 0,
    // });
  };

  checkingNumber = () => {
    const { userNumber } = this.state;
    return userNumber.length === 11 && parseInt(userNumber.value[0]) === 0;
    // this.setState({
    //   incorrectNumber: !(
    //     e.target.value.length === 11 && parseInt(e.target.value[0]) === 0
    //   ),
  };

  checkingBirth = (e) => {
    const { userBirthDate } = this.state;
    return userBirthDate.length === 10;
    // this.setState({
    //   incorrectBirthDate:
    //     e.target.value.length < 10 || e.target.value.length > 10,
    // });
  };

  checkingFeMale = (e) => {
    this.setState({
      gender: "여성",
    });
    return e.target.checked;
  };

  checkingMale = (e) => {
    this.setState({
      gender: "남성",
    });
    return e.target.checked;
  };

  checkingState = (e) => {
    this.setState({
      firstCheck: !this.state.firstCheck,
      secondCheck: !this.state.secondCheck,
      thirdCheck: !this.state.thirdCheck,
      fourthCheck: !this.state.fourthCheck,
    });
  };

  render() {
    const {
      // incorrectEmail,
      // incorrectPw,
      // incorrectRePw,
      // incorrectName,
      // incorrectNumber,
      // incorrectBirthDate,
      firstCheck,
      secondCheck,
      thirdCheck,
      fourthCheck,
    } = this.state;
    return (
      <div className="SignUp">
        <div className="signUpHeader">
          <div className="textBox">
            <p className="firstLine">회원가입</p>
            <div className="secondLine">
              <p>지금 컨버스 회원으로 가입하시고,특별한 멤버십 혜택과</p>
              <p>다양한 회원 전용 상품을 만나보세요</p>
            </div>
          </div>
        </div>
        <div className="signUpBody">
          <div className="leftBody">
            <div className="innerBox">
              <div className="kakaoSignUpBox">
                <svg viewBox="0 0 24 22">
                  <path d={kakaoLogo}></path>
                </svg>
                <a href="#" className="kakaoBtn">
                  카카오 계정으로 1초 회원가입
                </a>
              </div>
              <div className="breakLine">
                <div className="line"></div>
                <span>OR</span>
                <div className="line"></div>
              </div>
              <div className="mustInfoBox">
                <div className="fieldHeader">
                  <span>필수정보</span>
                </div>
                <div className="fieldRow">
                  <input
                    className="infoBox"
                    name="userEmail"
                    type="email"
                    placeholder="이메일 형태로 입력해주세요.(필수)"
                    onKeyUp={this.handleInput}
                    // onChange={this.handleId}
                  ></input>
                  <span className={this.handleId() ? "hidden" : "warningText"}>
                    이메일 형태로 입력해주세요
                  </span>
                </div>
                <div className="fieldRow">
                  <input
                    className="infoBox"
                    name="userPw"
                    type="password"
                    placeholder="비밀번호 (영문/숫자/특수문자 조합 8자이상)"
                    onKeyUp={this.handleInput}
                    // onChange={this.handlePw}
                  ></input>
                  <span className={this.handlePw() ? "hidden" : "warningText"}>
                    영문/숫자/특수문자 조합 8~16자 조합으로 입력해주세요.
                  </span>
                </div>
                <div className="fieldRow">
                  <input
                    className="infoBox"
                    name="userRePw"
                    type="password"
                    placeholder="비밀번호 입력 확인"
                    onKeyUp={this.handleInput}
                    // onChange={this.checkingPw}
                  ></input>
                  <span
                    className={this.checkingPw() ? "hidden" : "warningText"}
                  >
                    입력값이 일치하지 않습니다
                  </span>
                </div>
                <div className="fieldRow">
                  <input
                    className="infoBox"
                    name="userName"
                    type="text"
                    placeholder="이름을 입력해주세요.(필수)"
                    onKeyUp={this.handleInput}
                    // onChange={this.checkingName}
                  ></input>
                  <span
                    className={this.checkingName() ? "hidden" : "warningText"}
                  >
                    필수 입력 항목입니다
                  </span>
                </div>
                <div className="fieldRow">
                  <input
                    className="infoBox"
                    name="userNumber"
                    type="number"
                    placeholder="휴대폰 번호'-'표 없이 입력해주세요.(필수)"
                    onKeyUp={this.handleInput}
                    // onChange={this.checkingNumber}
                  ></input>
                  <span
                    className={this.checkingNumber() ? "hidden" : "warningText"}
                  >
                    올바른 휴대폰 번호를 입력해주세요.
                  </span>
                </div>
                <div className="fieldRow">
                  <span className="birthDay">
                    *생일/성별은 기입 후 수정이 불가합니다
                  </span>
                  <input
                    className="infoBox"
                    name="userBirthDate"
                    type="string"
                    placeholder="생년월일을 입력해주세요.(1999-01-01)"
                    onKeyUp={this.handleInput}
                    // onChange={this.checkingBirth}
                  ></input>
                  <span
                    className={this.checkingBirth() ? "hidden" : "warningText"}
                  >
                    생년월일(YYYY-MM-DD)은 숫자 8자리 와 "-" 총 10자리만 입력
                    가능합니다
                  </span>
                </div>
                <div className="genderBtn">
                  <button onClick={this.checkingFeMale}>여성</button>
                  <button onClick={this.checkingMale}>남성</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rightBody">
            <div className="innerBox">
              <div className="fieldRow">
                <div className="checkBox">
                  <input type="checkbox" onChange={this.checkingState} />
                  <p class="checkAll">모든 약관 동의</p>
                </div>
                <span className="firstSpan">
                  <p>아래 모든 약관(필수), 개인정보 수집 및 이용에 대한 동의</p>
                  <p>
                    (필수) 및 광고성 정보수신 동의(선택) 내용을 확인하고 전체
                  </p>
                  <p>동의합니다.</p>
                </span>
                <ul className="agreeList">
                  <li>
                    필수 정보의 수집 및 이용에 관한 동의를 거부하실 수 있으나,
                    다
                  </li>
                  <li>
                    만 이 경우 회원 가입 및 관련 서비스 이용은 불가합니다.
                  </li>
                  <li>
                    선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을 미치
                  </li>
                  <li>지 않습니다.</li>
                  <li>만 14세 미만은 서비스 이용이 불가합니다.</li>
                </ul>
              </div>
              <div className="fieldRow">
                <p className="agreeText">
                  컨버스 공식 온라인 스토어 회원 약관 및 개인정보 수집•이용에
                  대한 동의
                </p>
                <div className="checkBox">
                  <input type="checkbox" checked={firstCheck} />
                  <p clssName="agreeCheck">(필수) 이용 약관에 대한 동의</p>
                </div>
                <div className="checkBox">
                  <input type="checkbox" checked={secondCheck} />
                  <p clssName="agreeCheck">
                    (필수) 개인정보 수집 및 이용에 대한 동의
                  </p>
                </div>
              </div>
              <div className="fieldRow">
                <p className="agreeText">
                  광고성 정보 수신 동의
                  <p className="eventNews">
                    (회원 전용 다양한 이벤트 소식을 받아보세요)
                  </p>
                </p>
                <div className="checkBox">
                  <input type="checkbox" checked={thirdCheck} />
                  <p clssName="agreeCheck">(선택) 이메일 수신 동의</p>
                </div>
                <div className="checkBox">
                  <input type="checkbox" checked={fourthCheck} />
                  <p clssName="agreeCheck">(선택) 문자 수신 동의</p>
                </div>
              </div>
              <button className="signBtn" onClick={this.handleSignUp}>
                회원가입하기 (만 14세이상)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
