import React, { Component } from "react";
import FooterFacebook from "./svg/FooterFacebook";
import FooterInsta from "./svg/FooterInsta";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerLink">
          <div className="footerLinkSection">
            <p>FOLLOW US</p>
            <div className="footerSocial">
              <FooterFacebook />
              <div className="footerSocialBorder"></div>
              <FooterInsta />
            </div>
          </div>
          <div className="footerLinkBorder"></div>
          <div className="footerLinkSection">
            <p>SUPPORT</p>
            <div>고객지원센터</div>
            <div>1:1문의</div>
            <div>주문/배송 조회</div>
          </div>
          <div className="footerLinkBorder"></div>
          <div className="footerLinkSection">
            <p>INFORMATION</p>
            <div>컨버스에 대하여</div>
            <div>회원가입</div>
            <div>매장안내</div>
            <div>공지사항</div>
          </div>
          <div className="footerLinkBorder"></div>
          <div className="footerLinkSection">
            <p>POLICY</p>
            <div>이용약관</div>
            <div>
              <b>개인정보처리방침</b>
            </div>
          </div>
          <div className="footerLinkBorder"></div>
          <div className="footerLinkSection">
            <p>FAMILY SITES</p>
            <div>NIKE</div>
            <div>Jordan</div>
          </div>
        </div>
        <div className="footerInfo">
          <div className="footerInfoLeft">
            <div>
              (유)컨버스코리아 | 대표 주형준 | 개인정보책임 주형준 | 사업자등록번호 220-88-74818
            </div>
            <div>
              통신판매업 신고번호: 제2016-서울강남-00478호 | <span>통신판매업자 신원정보 확인</span>
            </div>
            <div>주소: 서울시 강남구 테헤란로 152 강남파이낸스센터 30F</div>
            <div>
              고객상담팀: 080-987-0182 (상담시간 월-금 : AM 09:00 - PM 05:30, 주말/공휴일 휴무 |
              conversekorea@converse.co.kr (24시간 접수 가능))
            </div>
            <p>
              <span>conversekorea@converse.co.kr</span> (24시간 접수 가능)
            </p>
            <div>2020 Converse Korea LLC. All Rights Reserved.</div>
          </div>
          <div className="footerInfoRight">
            <div>소비자피해 보증보험</div>
            <div>고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 구매</div>
            <div>안전서비스 소비자피해보증보험 서비스를 이용하실 수 있습니다. </div>
            <div>보증대상: 미배송, 반품/환불거부, 쇼핑몰 부도</div>
            <span>보증보험 가입사실 확인하기</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
