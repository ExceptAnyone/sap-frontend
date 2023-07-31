import React, { useState } from "react";
import Address from "./Address";
import UserID from "./UserID";
import UserPW from "./UserPW";
import Phone from "./Phone";
import Email from "./Email";
import Agree from "./Agree";

const Join = () => {
  const [isValidID, setIsValidID] = useState(true);
  const [isValidPW, setIsValidPW] = useState(true);
  const [pwConfirm, setPwConfirm] = useState(true);
  const [phone, setPhone] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidDomain, setIsValidDomain] = useState(true);
  const [agree, setAgree] = useState(false);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="join container">
      <div className="contents">
        <h2 className="title">회원가입</h2>
        <div className="form_warp">
          <form onSubmit={handleSubmit}>
            <UserID isValidID={isValidID} setIsValidID={setIsValidID} />

            <UserPW
              isValidPW={isValidPW}
              setIsValidPW={setIsValidPW}
              pwConfirm={pwConfirm}
              setPwConfirm={setPwConfirm}
            />

            <Phone phone={phone} setPhone={setPhone} />

            <Address
              address={address}
              setAddress={setAddress}
              detailAddress={detailAddress}
              setDetailAddress={setDetailAddress}
            />

            <Email
              isValidEmail={isValidEmail}
              setIsValidEmail={setIsValidEmail}
              isValidDomain={isValidDomain}
              setIsValidDomain={setIsValidDomain}
            />

            <Agree agree={agree} setAgree={setAgree} />

            <button
              type="submit"
              className="button"
              disabled={
                !isValidID ||
                !isValidPW ||
                !pwConfirm ||
                phone.length < 10 ||
                !isValidEmail ||
                !isValidDomain ||
                !agree ||
                address === ""
              }
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
