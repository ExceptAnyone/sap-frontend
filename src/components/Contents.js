// 정규표현식 상수화 (이름 신경써서) -완
// props 형태로 반복되는 것들 모아주자 -완
// react hook form 써보자
// 이메일 정규표현식 점검해야함.
// 각 컴포넌트의 상태를 전부 끌어올려서 모든 항목 조건이 충족되면 가입하기 버튼 활성화 시키자

import React, { useEffect, useState } from "react";
import "./Contents.css";
import "../api/SearchAddress";
import IdForm from "./IdForm";
import PwForm from "./PwForm";
import PhoneForm from "./PhoneForm";
import AddressForm from "./AddressForm";
import EmailForm from "./EmailForm";
import CheckBoxForm from "./CheckBoxForm";
import axios from "axios";

export default function Contents() {
  const [finalBtn, setFinalBtn] = useState(true);
  const [posts,setPosts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    //TODO: url 수정
    axios.post('https://jsonplaceholder.typicode.com/todos/1', {
      'user_id' : '',
      'password' : '',
      'phone_number' : '',
      'address' : '',
      'email' : '',
    })
    .then(response => console.log(response))
    .catch(error => {
      console.log(error);
    });
    }
  , []);
  

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
      <CheckBoxForm />

      <div className="btnBackground">
        <button className="bottomBtnText" type="submit" disabled={finalBtn}>
          가입하기
        </button>
      </div>
    </div>
  );
}
