import React, { useState } from 'react'

export default function PwForm() {

    const [pw, setPw] = useState("");
    const [pwValid, setPwValid] = useState(false);
    const [pwCheck, setPwCheck] = useState("");
    const [pwMatch, setPwMatch] = useState(true);

    const handlePwChange = (e) => {
        setPw(e.target.value);
        const regex =
          /^(?=.*[a-zA-Z])(?=.*[@$!%*?&])(?=.*[0-9]).{8,25}$/ //영문,숫자,특수문자 포함 8자리 이상
          // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
    
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
    

  return (
    <>
    <div>
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
            비밀번호는 8자 이상이어야 하며, 숫자/영문/특수문자를 모두
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

    </div>
    </>
  )
}
