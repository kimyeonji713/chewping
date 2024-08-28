## 프로젝트 소개

- url

> https://kimyeonji713.github.io/chewping/

### 사용한 api

> https://www.data.go.kr/data/15101933/openapi.do

### 타이틀 작성 (앱 이름)

> chewing + camping = 츄핑, 껌 씹는 일 처럼 쉽게 얻는 캠핑장 정보

### 목적성

> 한찬 캠핑을 다닐 때 예약을 하려고 하면 예약 사이트나 홈페이지를 보면 정보가 부족한 경우가 대부분이였습니다. 그래서 블로그나 인스타그램 등 이전에 이용했던 사람들의 후기를 하나하나 찾아보고 비교해보며 예약 해야하는 불편함을 늘 겪곤 했습니다.

> 그래서 가고자 하는 캠핑장 위치, 홈페이지, 외부시설, 내부시설, 주변 이용 가능 시설, 반려동물 동반 가능 여부 등 유저가 얻고자 하는 정보를 한 페이지에 다 담아 보여줄 수 있으면 좋겠다고 생각해 기획하게 되었습니다.

### 기술 (Stack)

> js, react, node js, git, github, css, chakra ui

### 개발 기간

> 8월 20일 ~ 8월 26일 (총 7일)

### 구현 기능

> 다크모드
> 스와이퍼를 이용해 '캠핑안전수칙' 메인배너 슬라이드
> 무한 스크롤을 이용하여 스크롤시 관련된 정보들을 더 많이 볼 수 있게 구현
> 도시명을 검색하면 해당 도시에 있는 캠핑장 나열
> top버튼 클릭시 홈페이지 상단으로 이동
> 상호명, 주소, 전화번호, 소개글, 외부/ 내부/ 주변이용시설, 반려동물 동반 가능 여부, 홈페이지를 디테일 페이지에 대표 이미지와 함께 구현

### 지원디바이스

- PC/모바일/브라우저 사용 가능 기기
- 웹/앱 지원

### 방식

- 개발

### 프로젝트 기획

- 색상

> light : "#178254"(logo),#fff(bg), "#423F3E"(font)
> dark : "#FFAD60"(logo),#1a202c(bg), "#fff"(font)

- 폰트

> heading: `"Do Hyeon", sans-serif`,
> body: `"Noto Sans KR", sans-serif`,

- 레퍼런스 UI

> <img src="https://platum.kr/wp-content/uploads/2021/10/camp.png" alt="camfit">

> https://platum.kr/wp-content/uploads/2021/10/camp.png

> <img src="https://img.freepik.com/premium-psd/camping-reservation-mobile-app-ui-kit_553413-1042.jpg" alt="campingapp">

> https://img.freepik.com/premium-psd/camping-reservation-mobile-app-ui-kit_553413-1042.jpg

### 프로젝트 진행 중 새로 알게 된 내용

- chakra ui

> style component만 사용하다 차크라 ui를 처음 사용해봤는데 편리하고 코드 길이가 좀 더 단축된다는 장점도 있고 고정 값으로 들어가는 부분은 수정이 힘들다는 단점도 있는 것 같습니다. 하지만 시간을 단축시킬 수 있다는 큰 장점이 있기 때문에 여러 기능들을 써보고 익숙해지면 추후에 많이 활용할 기능인 것 같습니다.

### 프로젝트 진행 중 반성 및 칭찬 사항

- 칭찬

> 막혔던 부분을 포기하지 않고 끝까지 풀어낸 점입니다. 디테일 페이지와 검색 페이지에서 filter를 사용해야했던 부분이 있었는데 state 값이 null로 나와 많은 검색을 통해 문제점을 찾아보고 다른 방법으로도 시도를 해봤지만 해결이 안되서 좌절을 했었습니다. 하지만 포기 하지 않고 검사창 console을 통해 공통적으로 가져올 수 있는 값을 확인한 뒤 filter를 사용함으로써 문제를 해결 할 수 있었습니다. 이로써 console 확인의 중요성을 재차 깨닫고 filter의 사용법을 완벽히 깨우친 계기가 되었습니다.

- 반성

> chakra ui를 처음 쓰다보니 생소해서 반응형을 제대로 못한 점이 반성할 점이라고 생각합니다. 그래서 chakra ui를 좀 더 사용해보고 공부하면서 반응형을 익힐 생각입니다.
