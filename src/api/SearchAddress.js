import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import './SearchAddress.css';


const SearchAddress = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }

    return (
        <div className="searchAddressWrapper">
            <DaumPostcode
                className="searchAddress"
                autoClose
                onComplete={complete} />
        </div>
    );
};

export default SearchAddress;