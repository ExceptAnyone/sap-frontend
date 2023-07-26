# SAP-frontend

깃허브 프론트엔드: https://github.com/ExceptAnyone/sap-frontend

깃허브 백엔드: https://github.com/cipp00h/sap-backend
<br/>
<br/>

## :bulb: 안전한 티켓 거래 플랫폼

SAP은 투명하고 신뢰성 있는 티켓 리셀 플랫폼입니다.  
고객이 안전하게 티켓을 거래할 수 있도록 지원함으로써, 고가 암표 거래를 방지하고 건강한 티켓 거래 문화를 선도하고자 합니다.
<br/>
<br/>

## :technologist: 팀 구성

| [<img src="https://avatars.githubusercontent.com/u/129707365?v=4" width="134px"/>](https://github.com/CaffeineTurtle) | [<img src="https://avatars.githubusercontent.com/u/33807391?v=4" width="134px"/>](https://github.com/cipp00h) | [<img src="https://avatars.githubusercontent.com/u/126966681?v=4" width="134px"/>](https://github.com/ExceptAnyone) | [<img src="https://avatars.githubusercontent.com/u/134493078?v=4" width="134px"/>](https://github.com/Haeun187) | [<img src="https://avatars.githubusercontent.com/u/130285905?v=4" width="134px"/>](https://github.com/gggggdsa) | [<img src="https://avatars.githubusercontent.com/u/134491629?v=4" width="134px"/>](https://github.com/SSUK-H) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| @CaffeineTurtle | @cipp00h | @ExceptAnyone | @Haeun187 | @gggggdsa | @SSUK-H |

<br/>
<br/>


## :memo: 개발일지

###  회원가입
  #### **1. 공통**
  
  - [ ]  각 인풋 창 오른쪽 끝에 키 입력된 순간 x표시 출력
  - [ ]  length = 0 일 경우 x표시 삭제
  - [ ]  각 인풋 창 요구사항 충족 안될시 빨간색으로 변환
  - [ ]  요구사항 만족시 에러메세지 제거
  - [ ]  각 인풋 창에 요구사항이 하나라도 충족 안되면 가입하기 버튼 비활성화
  - [ ]  ****7/19 (수) 추가 회원가입 페이지에서 뒤로가기 혹은 새로고침 상황 발생할 경우 경고메세지 출력 (ux)**
  
  #### **2. 아이디**
  
  - [ ]  영어와 숫자 6-15자, 한글과 특수문자 불가 기능(정규표현식 권장)
  - [ ]  영어와 숫자가 아닌 다른문자 입력시 '아이디를 정확히 입력해주세요' -> 빨간색 밑줄 밑에 출력
  - [ ]  '아이디', '아이디를 정확히 입력해주세요' -> 아이디 정확히 입력 전까지 유지
  - [ ]  정확히 입력되면 에러메세지 삭제
  - [ ]  애니메이션?
  - [ ]  ****중복검사 필요!**
  
  #### **3. 비밀번호**
  
  - [ ]  특수문자(@, $, !, %, *, ?, & 하나 이상), 숫자,영문조합 8자리 이상 (필수 요구사항)
  - [ ]  필수 요구사항이 아니면 => '비밀번호', "비밀번호를 정확히 입력해주세요" 빨간색 밑줄 밑 출력 -> 정확히 입력 전까지 유지
  - [ ]  정확히 입력되면 에러메세지 삭제
  
  #### **4. 비밀번호 확인**
  
  - [ ]  2번과 동일.
  - [ ]  3번 인풋과 2번 인풋이 다를 경우 "비밀번호가 다릅니다" 빨간색 밑줄 밑 출력 -> 정확히 입력 전까지 유지
  - [ ]  정확히 입력되면 에러메세지 삭제
  
  #### **5. 휴대폰 번호**
  
  - [ ]  번호 입력시 '-' 자동입력 
  - [ ]  입력이 정확히 되면 빨간색에서 검정색으로 리턴
  - [ ]  에러 메세지 삭제
  
  #### **6. 주소**
  
  - [ ]  인풋1 버튼(찾아보기) 회색 오른쪽에 설정
  - [ ]  찾아보기 버튼은 계속 유지
  - [ ]  인풋1에 버튼 (찾아보기) 클릭 -> 다음 api 도로명 주소
  - [ ]  인풋2에 length = 0 이면 회색 '상세 주소' 왼쪽 출력
  - [ ]  인풋2에 입력 시작하면 '상세 주소' 삭제
  
  #### **7. 이메일 주소 (정규표현식 사용 권장)**
  
  - [ ]  length = 0 일 때 예시로 '안티거플 @ gmail.com' 회색 표시 (<인풋창 ver1> @ <인풋창 ver2>  ver2부분은 리스트박스)
  - [ ]  '이메일 주소를 정확히 입력해주세요' => 밑줄 밑에 빨간색
  - [ ]  정확히 입력되면 에러메세지 삭제
  
  #### **8. 개인정보 동의 창**
  
  - [ ]  체크박스 초기 값 : false
  - [ ]  체크박스에 클릭이 모두 완료 되면 가입하기 버튼 활성화

  #### 9. 가입하기 버튼
  
  - [ ]  가입하기 버튼을 submit하면 서버에 전송(**POST)
