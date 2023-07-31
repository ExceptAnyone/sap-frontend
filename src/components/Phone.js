import React from "react";

const Phone = ({ phone, setPhone }) => {
  const handlePhoneChange = (e) => {
    const newPhone = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    setPhone(newPhone);
  };

  return (
    <div className="input_item">
      <label
        htmlFor="phone"
        className={
          (phone.length < 10 && phone.length > 0)
            ? "input_titleError"
            : "input_title"
        }
      >
        휴대폰 번호
      </label>
      <input
        type="tel"
        id="phone"
        value={phone}
        maxLength={15}
        onChange={handlePhoneChange}
        className={
          (phone.length < 10 && phone.length > 0) ? "inputError" : "inputBox"
        }
        placeholder="' - ' 없이 입력해주세요."
      />
      {(phone.length < 10 && phone.length > 0) && (
        <span className="joinError">휴대폰 번호를 정확히 입력해주세요.</span>
      )}
    </div>
  );
};

export default Phone;
