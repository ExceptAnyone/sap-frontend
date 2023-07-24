import React, { useEffect, useState } from "react";
import "./Contents.css";

export default function Contents() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwCheck, setPwCheck] = useState("");
  const [pwMatch, setPwMatch] = useState(true);
  const [phone, setPhone] = useState(Number);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [finalBtn, setFinalBtn] = useState(true);

  const handleIdChange = (e) => {
    setId(e.target.value);
    const regex = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }

    setPwMatch(pw === pwCheck); // 비밀번호 일치여부 확인
  };

  const handlePwCheck = (e) => {
    // 비밀번호 일치여부 확인
    setPwCheck(e.target.value);
    setPwMatch(pw === e.target.value);
  };

  const handlePhoneNumber = (e) => {
    //폰넘버 자동 하이픈 삽입로직

    const phoneNumberValue = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    setPhone(phoneNumberValue);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  useEffect(() => {

  },[])

  return (
    <div className="form">
      <div className="sign-up">회원가입</div>

      <div className="id">
        아이디 <br />
        <input
          className="idInput"
          type="text"
          maxLength={15}
          minLength={6}
          placeholder="abcd1234"
          value={id}
          onChange={handleIdChange}
        />
      </div>
      <div className="errorId">
        {!idValid && id.length > 0 && <div>아이디를 정확히 입력해주세요.</div>}
      </div>

      <div className="password">
        비밀번호 <br />
        <input
          className="passwordInput"
          type="password"
          placeholder="영문, 숫자, 특수문자 조합 8-16자"
          value={pw}
          onChange={handlePwChange}
        />
      </div>

      <div className="errorPw">
        {!pwValid && pw.length > 0 && (
          <div>
            비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두
            포함해야 합니다.
          </div>
        )}
      </div>

      <div className="pwCheck">
        비밀번호 확인 <br />
        <input
          className="pwCheckInput"
          type="password"
          value={pwCheck}
          onChange={handlePwCheck}
        />
      </div>
      <div className="errorPwCheck">
        {!pwMatch && pwCheck.length > 0 && (<div>비밀번호가 다릅니다.</div>)}
      </div>

      <div className="phoneNumber">
        휴대폰 번호 <br />
        <input
          className="phoneNumberInput"
          placeholder="-없이 입력해주세요"
          // type="number"
          value={phone}
          maxLength={13}
          onChange={handlePhoneNumber}
        />
      </div>

      <div className="address">
        주소 <br />
        <input className="addressInput1" /> <br />
        <input className="addressInput2" />
      </div>

      <div className="email">
        이메일 <br />
        <input
          className="emailInput"
          placeholder="abc123@gmail.com"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="emailCheck">
        {
            !emailValid && email.length > 0 && (<div>올바른 이메일 형식으로 입력해주세요.</div>)
        }
        </div>

      <div className="agree">
        [필수]만 14세 이상이며 모두 동의합니다
        <input type="checkbox" className="agreeInput" />
      </div>

      <div>
        <button disabled={finalBtn}>가입하기</button>
      </div>
    </div>
  );
}
