export const REGEX = Object.freeze({
    ID: /^[a-z]+[a-z0-9]{5,19}$/g,
    PW: /^(?=.*[a-zA-Z])(?=.*[@$!%*?&])(?=.*[0-9]).{8,25}$/, //영문,숫자,특수문자 포함 8자리 이상
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,//TODO: 이메일 정규표현식 점검
    
})

