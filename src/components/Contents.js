// 정규표현식 상수화 (이름 신경써서)
// props 형태로 반복되는 것들 모아주자
// react hook form 써보자
// 이메일 정규표현식 점검해야함.

import React, { useEffect, useState } from "react";
import "./Contents.css";
import "../api/SearchAddress";
import ReactDOM from "react-dom";
import SearchAddress from "../api/SearchAddress";
import IdForm from "./IdForm";
import PwForm from "./PwForm";
import PhoneForm from "./PhoneForm";
import AddressForm from "./AddressForm";
import EmailForm from "./EmailForm";

export default function Contents() {
  const [finalBtn, setFinalBtn] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if(idValid && pwValid && pwMatch && emailValid) {
  //       setFinalBtn(false)
  //       return ;
  //   }
  //   setFinalBtn(true)
  // },[idValid, pwValid, pwMatch, emailValid ])

  return (
    <div className="form">
      <div className="sign-up">회원가입</div>
      <IdForm />
      <PwForm />
      <PhoneForm />
      <AddressForm />
      <EmailForm />

      <div className="agree">
        [필수]만 14세 이상이며 모두 동의합니다
        <input type="checkbox" className="agreeInput" />
      </div>

      <div>
        <button type="submit" disabled={finalBtn}>
          가입하기
        </button>
      </div>
    </div>
  );
}
