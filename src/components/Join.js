import React, { useState } from "react";

const Join = () => {
  const [userID, setUserID] = useState("");
  const [isValidID, setIsValidID] = useState(true);
  const [userPW, setUserPW] = useState("");
  const [isValidPW, setIsValidPW] = useState(true);
  const [pwCheck, setPWcheck] = useState("");
  const [pwConfirm, setPwConfirm] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [domain, setDomain] = useState("");
  const [isValidDomain, setIsValidDomain] = useState(true);
  const [domainList, setDomainList] = useState([
    "naver.com",
    "gmail.com",
    "daum.net",
  ]);

  // 유효성 검사 ***
  const handleIdChange = (e) => {
    const newUserID = e.target.value;
    setUserID(newUserID);

    const regID = /^[a-z]+[a-z0-9]{6,20}$/g; // 소문자, 숫자 포함 6-20자
    if (regID.test(newUserID)) {
      setIsValidID(true);
    } else {
      setIsValidID(false);
    }
  };

  const handlePwChange = (e) => {
    const newUserPW = e.target.value;
    setUserPW(newUserPW);

    // 영문, 숫자, 특수문자(@, $, !, %, *, ?, &, #) 조합 8자 이상
    const regPW =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/g;
    // /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/g; 
    // 대문자, 소문자, 숫자, 특수문자

    if (regPW.test(newUserPW)) {
      setIsValidPW(true);
    } else {
      setIsValidPW(false);
    }
  };

  const handlePwCheckChange = (e) => {
    const newUserPwCheck = e.target.value;
    setPWcheck(newUserPwCheck);

    if (newUserPwCheck === userPW) {
      setPwConfirm(true);
    } else {
      setPwConfirm(false);
    }
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    setPhone(newPhone);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const regEmail = /^[a-z]+[a-z0-9]{6,20}$/g; // 소문자, 숫자 포함 6-20자

    if (regEmail.test(newEmail)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleDomainChange = (e) => {
    const newDomain = e.target.value;
    setDomain(newDomain);

    const regDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g; // '.' 포함 여부 확인

    if (regDomain.test(newDomain)) {
      setIsValidDomain(true);
    } else {
      setIsValidDomain(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="join_container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_item">
          <label htmlFor="userID" className="input_title">
            아이디
          </label>
          <input
            type="text"
            id="userID"
            className="joinInput"
            value={userID}
            minLength={6}
            maxLength={20}
            onChange={handleIdChange}
            placeholder="소문자, 숫자 조합 6-20자"
          />
          {}
          <button type="button" className="">
            중복검사
          </button>

          {!isValidID && userID.length > 0 && (
            <span className="joinError">
              소문자, 숫자 조합 6-20자를 입력해주세요.
            </span>
          )}
        </div>

        <div className="input_item">
          <label htmlFor="userPW" className="input_title">
            비밀번호
          </label>
          <input
            type="text"
            id="userPW"
            value={userPW}
            minLength={8}
            maxLength={64}
            onChange={handlePwChange}
            className="joinInput"
            placeholder="영문, 숫자, 특수문자(@, #, $, !, %, *, ?, & 하나 이상) 조합 8-16자"
          />

          {!isValidPW && userPW.length > 0 && (
            <span className="joinError">
              영문, 숫자, 특수문자(@, #, $, !, %, *, ?, &) 조합 8자 이상
              입력해주세요.
            </span>
          )}
        </div>

        <div className="input_item">
          <label htmlFor="pwCheck" className="input_title">
            비밀번호 확인
          </label>
          <input
            type="text"
            id="pwCheck"
            value={pwCheck}
            minLength={8}
            maxLength={64}
            onChange={handlePwCheckChange}
            className="joinInput"
            placeholder="영문, 숫자, 특수문자(@, #, $, !, %, *, ?, &) 조합 8자 이상"
          />

          {!pwConfirm && pwCheck.length > 0 && (
            <span className="joinError">비밀번호를 정확히 입력해주세요.</span>
          )}
        </div>

        <div className="input_item">
          <label htmlFor="phone" className="input_title">
            휴대폰 번호
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            maxLength={15}
            onChange={handlePhoneChange}
            className="joinInput"
            placeholder="010-1234-1234"
          />
          {phone.length < 10 && (
            <span className="joinError">
              휴대폰 번호를 정확히 입력해주세요.
            </span>
          )}
        </div>

        <div className="input_item">
          <label htmlFor="address" className="input_title">
            이메일
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="joinInput"
            placeholder=""
          />
          @
          <input
            type="text"
            value={domain}
            onChange={handleDomainChange}
            className="joinInput"
            placeholder="직접입력"
            list="domainList"
          />
          <datalist id="domainList">
            {domainList.map((domain) => (
              <option key={domain} value={domain} />
            ))}
          </datalist>
          {!isValidEmail || !isValidDomain ? (
            <span className="joinError">이메일을 정확히 입력해주세요.</span>
          ) : null}
        </div>

        <div className="">
          <label htmlFor="agree" className="">
            <input type="checkbox" id="agree" />
            &#91;필수&#93; 만 14세 이상이며 모두 동의합니다.
          </label>
        </div>

        <button type="submit" className="joinBtn">
          가입하기
        </button>
      </form>
    </div>
  );
};

export default Join;
