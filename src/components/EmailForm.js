import React, { useState } from "react";
import { REGEX } from "../constants";
export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailOption, setEmailOption] = useState("select");
  const [customEmail, setCustomEmail] = useState("");

  const handleEmailOptionChange = (e) => {
    setEmailOption(e.target.value);
  };

  const handleCustomEmailChange = (e) => {
    setCustomEmail(e.target.value);
    const regex = REGEX.EMAIL;
    //TODO: 이메일 정규표현식 점검
    if (regex.test(customEmail)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="email">
        이메일 <br />
        <input
          className="emailId"
          placeholder="abc123"
          value={email}
          onChange={handleEmail}
        />
        <span>@</span>
        <span className="emailOption">
          <select value={emailOption} onChange={handleEmailOptionChange}>
            <option value="select">선택하세요</option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">google.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
            <option value="kakao.com">kakao.com</option>
            <option value="direct">직접 입력</option>
          </select>
        </span>
        {emailOption === "direct" && (
          <div>
            직접입력
            <input
              type="text"
              value={customEmail}
              onChange={handleCustomEmailChange}
            />
          </div>
        )}
      </div>
      <div className="emailCheck">
        {!emailValid && customEmail.length > 0 && (
          <div>올바른 이메일 형식으로 입력해주세요.</div>
        )}
      </div>
    </div>
  );
}
