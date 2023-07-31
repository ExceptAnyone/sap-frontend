import { useDaumPostcodePopup } from "react-daum-postcode";

const Address = ({ address, setAddress, detailAddress, setDetailAddress }) => {
  // 다음 주소 검색
  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ""; // 추가될 주소

    if (data.addressType === "R") {
      // 주소타입이 도로명주소일 경우
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        //건물명
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      //지역주소 제외 전체주소 치환
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setAddress(fullAddress);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleAddressClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleAddressChange = () => {
    if (address === "") {
      open({ onComplete: handleComplete });
    }
  };

  return (
    <div className="input_item">
      <label htmlFor="address" className="input_title">
        주소
      </label>
      <input
        type="text"
        id="address"
        className="inputBox"
        value={address}
        onFocus={handleAddressChange}
      />
      <button className="inputBtn" onClick={handleAddressClick}>주소검색</button>

      <label htmlFor="detailAddress" className="hide">상세주소</label>
      <input
        type="text"
        id="detailAddress"
        className="inputBox"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
        placeholder="상세주소"
      />
    </div>
  );
};

export default Address;
