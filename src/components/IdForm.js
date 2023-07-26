import React, { useState } from 'react'

export default function IdForm() {

    const [id, setId] = useState("");
    const [idValid, setIdValid] = useState(false);


    const handleIdChange = (e) => {
        setId(e.target.value);
        const regex = /^[a-z]+[a-z0-9]{5,19}$/g;
        if (regex.test(id)) {
          setIdValid(true);
        } else {
          setIdValid(false);
        }
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
  )
}
