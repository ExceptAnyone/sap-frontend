import React, { useState } from "react";

const UserID = ({ isValidID, setIsValidID }) => {
  const [userID, setUserID] = useState("");

  // *** 유효성 검사
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

  return (
    <div className="input_item">
      <label
        htmlFor="userID"
        className={
          !isValidID && userID.length > 0 ? "input_titleError" : "input_title"
        }
      >
        아이디
      </label>
      <input
        type="text"
        id="userID"
        className={!isValidID && userID.length > 0 ? "inputError" : "inputBox"}
        value={userID}
        minLength={6}
        maxLength={20}
        onChange={handleIdChange}
        placeholder="소문자, 숫자 조합 6-20자"
      />
      <button type="button" className="inputBtn">
        중복검사
      </button>

      {!isValidID && userID.length > 0 && (
        <span className="joinError">
          소문자, 숫자 조합 6-20자를 입력해주세요.
        </span>
      )}
    </div>
  );
};

export default UserID;
