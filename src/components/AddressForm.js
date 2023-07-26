import React, { useState } from 'react'
import ReactDOM from "react-dom"; 
import SearchAddress from "../api/SearchAddress";

export default function AddressForm() {

    const [address, setAddress] = useState({
        address:'',
      })
      const [addressPopup, setAddressPopup] = useState(false)

      const handleAddressChange = (data) => {
        setAddress({
          address: data.address
          
        })
        setAddressPopup(false);
      }
    
      const handleOpenAddressPopup = () => {
        const width = 400;
        const height = 500;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const options = `width=${width},height=${height},left=${left},top=${top}`;
        const newWindow = window.open("", "AddressPopup", options);
    
        newWindow.document.write(`
          <div style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.25); z-index: 9999;">
            <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: #fff; border: 1px solid #ccc; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <div class="searchAddress"></div>
            </div>
          </div>
        `);
    
        const searchAddressDiv = newWindow.document.querySelector(".searchAddress");
        ReactDOM.render(<SearchAddress company={address} setcompany={handleAddressChange} />, searchAddressDiv);
      };
  return (
    <div>
        <div className="address">
        주소 <br />
        <input className="addressInput1" 
        placeholder="주소"
        type="text"
        value={address.address}
        required={true}
        
        onChange={() => {}}/>
        <button onClick={handleOpenAddressPopup}>주소찾기</button>
          {
            addressPopup && (<SearchAddress company={address} setcompany={handleAddressChange}/>) //company는 prop을 의미
          }
         <br />
        <input className="addressInput2" 
        type="text"
        placeholder="상세주소"/>
      </div>

    </div>
  )
}
