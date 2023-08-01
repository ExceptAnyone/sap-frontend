import React, { useState } from "react";
import { strongPasswordRegex } from "../utils/constants";

const UserPW = ({
  userPW,
  setUserPW,
  isValidPW,
  setIsValidPW,
  pwCheck,
  setPWcheck,
  pwConfirm,
  setPwConfirm,
}) => {
  const handlePwChange = (e) => {
    const newUserPW = e.target.value;
    setUserPW(newUserPW);

    // 영문, 숫자, 특수문자(@, $, !, %, *, ?, &, #) 조합 8자 이상
    const regPW = strongPasswordRegex;

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

  return (
    <div>
      <div className="input_item">
        <label
          htmlFor="userPW"
          className={
            !isValidPW && userPW.length > 0 ? "input_titleError" : "input_title"
          }
        >
          비밀번호
        </label>
        <input
          type="text"
          id="userPW"
          value={userPW}
          minLength={8}
          maxLength={64}
          onChange={handlePwChange}
          className={
            !isValidPW && userPW.length > 0 ? "inputError" : "inputBox"
          }
          placeholder="영문, 숫자, 특수문자 (@, #, $, !, %, *, ?, &) 조합 8자 이상"
        />

        {!isValidPW && userPW.length > 0 && (
          <span className="joinError">
            영문, 숫자, 특수문자 (@, #, $, !, %, *, ?, &) 조합 8자 이상
            입력해주세요.
          </span>
        )}
      </div>
      <div className="input_item">
        <label
          htmlFor="pwCheck"
          className={
            !isValidPW && userPW.length > 0 ? "input_titleError" : "input_title"
          }
        >
          비밀번호 확인
        </label>
        <input
          type="text"
          id="pwCheck"
          value={pwCheck}
          minLength={8}
          maxLength={64}
          onChange={handlePwCheckChange}
          className={
            !isValidPW && userPW.length > 0 ? "inputError" : "inputBox"
          }
          placeholder="영문, 숫자, 특수문자 (@, #, $, !, %, *, ?, &) 조합 8자 이상"
        />

        {!pwConfirm && pwCheck.length > 0 && (
          <span className="joinError">비밀번호를 정확히 입력해주세요.</span>
        )}
      </div>
    </div>
  );
};

export default UserPW;
