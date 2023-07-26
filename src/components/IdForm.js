import React, { useEffect, useState } from "react";
import { REGEX } from "../constants";
import { debounce } from "lodash";

export default function IdForm() {
  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState(false);

  const validateId = debounce((value) => {
    if (REGEX.ID.test(value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  }, 500);

  const handleIdChange = (e) => {
    console.log("e.target.value:", e.target.value);
    const value = e.target.value
    setId(value);
    validateId(value)
    console.log("idValid:", idValid)
      };
  
  return (
    <div>
      <div className="id">
        아이디 <br />
        <input
          className="idInput"
          type="text"
          autoFocus
          maxLength={15}
          minLength={6}
          placeholder="abcd1234"
          value={id}
          onChange={handleIdChange}
        />
      </div>
      <div className="errorId">
        {!idValid && id.length > 0 && <div>아이디를 정확히 입력해주세요.</div>}
      </div>
    </div>
  );
}
