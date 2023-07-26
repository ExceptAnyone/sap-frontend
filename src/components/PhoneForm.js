import React, { useState } from "react";

export default function PhoneForm() {
  const [phone, setPhone] = useState(Number);

  const handlePhoneNumber = (e) => {
    //폰넘버 자동 하이픈 삽입로직

    const phoneNumberValue = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    setPhone(phoneNumberValue);
  };
  return (
    <div>
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
    </div>
  );
}
