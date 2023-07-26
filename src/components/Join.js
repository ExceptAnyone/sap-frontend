import React, { useState } from "react";

const Join = () => {
  const [userID, setUserID] = useState("");
  const [isValidID, setIsValidID] = useState(true);

  // 유효성 검사
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
        </div>{" "}
        <div className="input_item">
          <label htmlFor="userPW" className="input_title">
            비밀번호
          </label>
          <input
            type="text"
            id="userPW"
            minLength={8}
            maxLength={64}
            className="joinInput"
            placeholder="영문, 숫자, 특수문자(@, #, $, !, %, *, ?, & 하나 이상) 조합 8-16자"
          />
        </div>
        <div className="input_item">
          <label htmlFor="pwCheck" className="input_title">
            비밀번호 확인
          </label>
          <input
            type="text"
            id="pwCheck"
            minLength={8}
            maxLength={64}
            className="joinInput"
            placeholder="영문, 숫자, 특수문자(@, #, $, !, %, *, ?, &) 조합 8자 이상"
          />
        </div>
        <div className="input_item">
          <label htmlFor="phone" className="input_title">
            휴대폰 번호
          </label>
          <input
            type="tel"
            id="phone"
            maxLength={15}
            className="joinInput"
            placeholder="010-1234-1234"
          />
        </div>
        <div className="input_item">
          <label htmlFor="address" className="input_title">
            주소
          </label>
          <input type="text" id="address" className="joinInput" />
          <button type="button">주소검색</button>

          <label htmlFor="detailAddress">상세주소</label>
          <input type="text" id="detailAddress" placeholder="상세주소" />
        </div>
        <div className="input_item">
          <label htmlFor="address" className="input_title">
            이메일
          </label>
          <input type="text" id="email" className="joinInput" placeholder="" />
          @
          <input
            type="text"
            className="joinInput"
            placeholder="직접입력"
            list="domainList"
          />
          <datalist id="domainList"></datalist>
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
