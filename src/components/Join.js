import React, { useEffect, useState } from "react";
import Address from "./Address";
import UserID from "./UserID";
import UserPW from "./UserPW";
import Phone from "./Phone";
import Email from "./Email";
import Agree from "./Agree";
import axios from "axios";

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
  const [agree, setAgree] = useState(false);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 데이터 가져오기
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // 응답 받은 데이터를 상태로 설정
        setUsers(response.data);
        console.log("API DATA: ", users);
      })
      .catch((error) => {
        console.error("서버 요청 실패!", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userID: userID,
      userPW: userPW,
      phone: phone,
      email: email,
      domain: domain,
      address: address,
      detailAddress: detailAddress,
      agree: agree,
    };

    try {
      // API 호출
      const response = await axios.post(
        "http://localhost:8080/members/join",
        userData
      );

      // API 호출 성공시
      console.log("회원가입 성공!", response.data);
    } catch (error) {
      // API 호출 실패시
      console.error("회원가입 실패!", error);
    }
  };

  return (
    <div className="join container">
      <div className="contents">
        <h2 className="title">회원가입</h2>
        <div className="form_warp">
          <form onSubmit={handleSubmit}>
            <UserID
              userID={userID}
              setUserID={setUserID}
              isValidID={isValidID}
              setIsValidID={setIsValidID}
            />

            <UserPW
              userPW={userPW}
              setUserPW={setUserPW}
              isValidPW={isValidPW}
              setIsValidPW={setIsValidPW}
              pwCheck={pwCheck}
              setPWcheck={setPWcheck}
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
              email={email}
              setEmail={setEmail}
              isValidEmail={isValidEmail}
              setIsValidEmail={setIsValidEmail}
              domain={domain}
              setDomain={setDomain}
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
