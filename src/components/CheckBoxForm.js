import React, { useState } from "react";

export default function CheckBoxForm() {
  const [isCheck, setIsCheck] = useState(false);

  const isCheckConfirm = (e) => {
    console.log(e.target.checked);
    setIsCheck(true);
  };

  return (
    <div>
      <div className="agree">
        [필수]만 14세 이상이며 모두 동의합니다
        <input
          type="checkbox"
          className="agreeInput"
          checked={isCheck}
          onClick={isCheckConfirm}
        />
      </div>
    </div>
  );
}
