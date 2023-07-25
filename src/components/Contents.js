// 정규표현식 상수화 (이름 신경써서)
// props 형태로 반복되는 것들 모아주자
// react hook form 써보자

import React, { useEffect, useState } from "react";
import "./Contents.css";
import '../api/SearchAddress';
import ReactDOM from "react-dom"; 
import SearchAddress from "../api/SearchAddress";

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
  const [address, setAddress] = useState({
    address:'',
  })
  const [addressPopup, setAddressPopup] = useState(false)

  

  const handleAddressChange = (data) => {
    setAddress({
      address: data.address
      
    })
    setAddressPopup(false);
  }

  const handleOpenAddressPopup = () => {
    const width = 400;
    const height = 500;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const options = `width=${width},height=${height},left=${left},top=${top}`;
    const newWindow = window.open("", "AddressPopup", options);

    newWindow.document.write(`
      <div style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.25); z-index: 9999;">
        <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: #fff; border: 1px solid #ccc; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <div class="searchAddress"></div>
        </div>
      </div>
    `);

    const searchAddressDiv = newWindow.document.querySelector(".searchAddress");
    ReactDOM.render(<SearchAddress company={address} setcompany={handleAddressChange} />, searchAddressDiv);
  };

  // const handleOpenAddressPopup = () => {
  //   setAddressPopup(true); //주소찾기 버튼을 클릭하여 팝업창 열기
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

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
    if(idValid && pwValid && pwMatch && emailValid) {
        setFinalBtn(false)
        return ;
    }
    setFinalBtn(true)
  },[idValid, pwValid, pwMatch, emailValid ])

  return (
    <div className="form">
      <div className="sign-up">회원가입</div>

      <div className="id">
        아이디 <br />
        <input
          className="idInput"
          type="text"
          autoFocus
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
          placeholder="영문, 숫자, 특수문자 조합 8자이상"
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
        <input className="addressInput1" 
        placeholder="주소"
        type="text"
        value={address.address}
        required={true}
        
        onChange={() => {}}/>
        <button onClick={handleOpenAddressPopup}>주소찾기</button>
          {
            addressPopup && (<SearchAddress company={address} setcompany={handleAddressChange}/>) //company는 prop을 의미
          }
         <br />
        <input className="addressInput2" 
        type="text"
        placeholder="상세주소"/>
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
        <button type="submit"
        disabled={finalBtn}>가입하기</button>
      </div>
    </div>
  );
}
