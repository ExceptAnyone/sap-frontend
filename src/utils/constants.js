// 정규 표현식

// 소문자, 숫자 포함 6-20자
export const lowercaseAndNumberRegex = /^[a-z]+[a-z0-9]{6,20}$/g;

// 영문, 숫자, 특수문자(@, $, !, %, *, ?, &, #) 조합 8자 이상
export const strongPasswordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/g;

// 대문자, 소문자, 숫자, 특수문자
// /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/g;

// '.' 포함 여부 확인
export const dotRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

// '-' 자동 입력
export const phoneRegex = /[^0-9]/g;
export const phoneFormatRegex = /^(\d{0,3})(\d{0,4})(\d{0,4})$/g;
export const phoneHyphenRegex = /(\-{1,2})$/g;
