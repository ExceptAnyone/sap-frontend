import React from "react";

const Agree = ({ agree, setAgree }) => {
  return (
    <div className="agree">
      <label htmlFor="agree" className="agreeCheck">
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        &#91;필수&#93; 만 14세 이상이며 모두 동의합니다.
      </label>
    </div>
  );
};

export default Agree;
