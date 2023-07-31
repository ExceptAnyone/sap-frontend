import React, { useState } from "react";

const Email = ({
  isValidEmail,
  setIsValidEmail,
  isValidDomain,
  setIsValidDomain,
}) => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [domainList, setDomainList] = useState([
    "naver.com",
    "gmail.com",
    "daum.net",
  ]);

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

  return (
    <div className="input_item">
      <label
        htmlFor="email"
        className={
          !isValidEmail || !isValidDomain ? "input_titleError" : "input_title"
        }
      >
        이메일
      </label>
      <div className="email_row">
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={
            !isValidEmail || !isValidDomain ? "inputError" : "inputBox"
          }
        />
        @
        <input
          type="text"
          value={domain}
          onChange={handleDomainChange}
          className={
            !isValidEmail || !isValidDomain ? "inputError" : "inputBox"
          }
          placeholder="직접입력"
          list="domainList"
        />
        <datalist id="domainList">
          {domainList.map((domain) => (
            <option key={domain} value={domain} />
          ))}
        </datalist>
      </div>
      {!isValidEmail || !isValidDomain ? (
        <span className="joinError">이메일을 정확히 입력해주세요.</span>
      ) : null}
    </div>
  );
};

export default Email;
