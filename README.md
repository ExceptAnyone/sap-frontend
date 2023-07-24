1. 공통
    - 각 인풋 창 오른쪽 끝에 키 입력된 순간 x표시 출력
    - length = 0 일 경우 x표시 삭제
    - 각 인풋 창 요구사항 충족 안될시 빨간색으로 변환
    - 요구사항 만족시 다시 검정색 리턴
    - 각 인풋 창에 요구사항이 하나라도 충족 안되면 가입하기 버튼 비활성화
    - **7/19 (수) 추가 회원가입 페이지에서 뒤로가기 혹은 새로고침 상황 발생할 경우 경고메세지 출력 (ux)
2. 아이디
    - [x]영어와 숫자만 가능, 한글과 특수문자 불가 기능(정규표현식 권장?)
    - [x]영어와 숫자가 아닌 다른문자 입력시 '아이디를 정확히 입력해주세요' -> 빨간색 밑줄 밑에 출력
    - [x]'아이디', '아이디를 정확히 입력해주세요' -> 아이디 정확히 입력 전까지 유지
    - 입력이 정확히 되면 빨간색에서 검정색으로 리턴, '아이디를 정확히 입력해주세요' 삭제
    - 애니메이션?
3. 비밀번호
    - [x]특수문자,숫자,대소문자 -> 8-16자리 이상 (필수 요구사항)
    - [x]length = 0 일 때 회색으로 안내문 표시 ( 영문,숫자, 특수문자 조합 8-16자) 출력
    - [x]필수 요구사항이 아니면 => '비밀번호', "비밀번호를 정확히 입력해주세요" 빨간색 밑줄 밑 출력 -> 정확히 입력 전까지 유지
    - [x]입력이 정확히 되면 빨간색에서 검정색으로 리턴
    - [x]'비밀번호를 정확히 입력해주세요' 삭제
4. 비밀번호 확인
    - 2번과 동일.
    - [x]3번 인풋과 2번 인풋이 다를 경우 "비밀번호가 다릅니다" 빨간색 밑줄 밑 출력 -> 정확히 입력 전까지 유지
    - [x]입력이 정확히 되면 빨간색에서 검정색으로 리턴
    - [x]"비밀번호가 다릅니다" 삭제
5. 휴대폰 번호
    - [x]length = 0 일때 '-없이 입력해주세요' 회색으로 표시
    - '-' 입력한다면 에러 메세지 빨간색 밑줄 밑 출력
    - '-' 입력한다면 '휴대폰 번호'빨간색 출력 -> 정확히 입력 전까지 유지
    - 입력이 정확히 되면 빨간색에서 검정색으로 리턴
    - 에러 메세지 삭제
6. 주소
    - 인풋1 버튼(찾아보기) 회색 오른쪽에 설정
    - 찾아보기 버튼은 계속 유지
    - 인풋1에 버튼 (찾아보기) 클릭 -> 다음 api 도로명 주소
    - 인풋2에 length = 0 이면 회색 '상세 주소' 왼쪽 출력
    - 인풋2에 입력 시작하면 '상세 주소' 삭제

/* 6. 이메일 주소 (정규표현식 사용 권장)

- length = 0 일 때 '예)안티거플@gmail.com' 회색 표시
- '이메일 주소를 정확히 입력해주세요' => 밑줄 밑에 빨간색
- 입력이 정확히 되면 빨간색에서 검정색으로 리턴
- 에러 메세지 삭제
*/
1. 개인정보 동의 창
    - 체크박스 초기 값 : false
    - 체크박스에 클릭이 모두 완료 되면 가입하기 버튼 활성화