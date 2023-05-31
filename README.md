# ⭐ pair2-board-project

### 1조 2페어의 게시판 토이 프로젝트 레퍼지토리입니다

## ➡️ 프로젝트 소개

😺 이미지 캐러셀, 페이지네이션, 게시물 및 댓글 CRUD 기능을 구현한 게시판 프로젝트

## ➡️ 프로젝트 개요

😺 faker.js 의 고양이 이미지를 활용한 게시글 형태(모달을 이용하여 게시물을 추가)의 메인 섹션과

페이지네이션을 이용한 인기 게시물 섹션으로 나누어 작업하였습니다.

## ➡️ 작업 기간

#### 2023/05/25 ~ 2023/05/31

## ➡️ 와이어프레임
![pair2_wireframe](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/270580b9-2738-4fae-8f5c-5394ee5856ac)

## ➡️ 진행 팀원 소개

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="https://github.com/yesoryeseul">🥰 김예슬</a></td>
    <td><a href="https://github.com/seungyonggo">❄️ 고승용</a></td>
    <td><a href="https://github.com/GrayHound0801">🦊 심재원</a></td>
  </tr>
</table>

## ➡️ 역할 분담

- 1순위
  - 테마 구현(레이아웃 디자인) / 예슬
  - 목 데이터 생성 / 같이

- 2순위
  - 이미지 캐러셀 / 승용
  - 페이지네이션 / 재원
  - 게시글, 댓글 CRUD / 예슬

## ➡️ Main UI

![메인UI디자인](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/9eb487f9-5ecd-4092-bd4e-114bf94d57d8)


## ➡️ 배포 링크 및 시연 영상

### 이미지 슬라이드
![slide](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/bc8805ac-484d-4e5a-a981-e3d5cdefedba)

### 페이지네이션
![pagination](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/1d5780a0-961b-4dc6-9a74-d96eb925c203)

### 게시물 CRUD

- 게시물 추가 (모달창)

![글추가_모달](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/7c9e510e-c374-4b12-9fc0-82ff72defa78)

- 게시물 수정, 삭제

![글수정삭제](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/6e38261f-819d-4bc5-8968-025183a4f17a)

- 본인이 작성한 글만 수정, 삭제가 가능

![본인글수정](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/cadf8718-40bc-4c21-b27a-59db40351c1a)
![본인글삭제](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/cdec1b0b-f89c-4384-a0f7-ad1a93e97f5f)
![본인삭제](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/18805119-e36e-427c-856f-7d3b950c5444)

### 댓글 CRUD
![댓글crud](https://github.com/KIT-Frontend-Team1/pair2-board-project/assets/123865139/32d3dca7-fd9f-4108-bdb7-d87166e45ca2)

## ➡️ 폴더 구조

```javascript
- components
  - layout
    - header
      - Header.js
    - Layout.js
  - slide
    - CustomArray.js
    - Slide.js
- context
  - commentEditMode.js
  - editMode.js
  - item.js
  - prev.js
- data
  - bestMock.js
  - catsMock.js
- hooks
  - use-input.js
- pages
  - best
    - style
      - StyledReactPaginate.js
    - Best.js
    - BestItems.js
  - main
    - components
      - Comments.js
      - ICons.js
      - TextArea.js
    - modal
      - AddModal.js
    - Main.js
- routes
  - Routing
- style
  - common.js
  - global.js
  - theme.js

```

## ➡️ 사용한 기술 스택 및 라이브러리
```
- REACT
- faker.js : 목데이터 생성
- react-router-dom : 라우팅 연결
- react-slick, slick-carousel : 이미지 슬라이더
- react-paginate : 페이지네이션
- fortawesome : 아이콘
- styled-components, styled-reset : css-in-js
- husky : git hook
```

## ➡️ 회고

#### 아쉬운 점

- 초반 설계가 잘 이뤄지지 않아 작업 시 혼란스러움
     
- 빠른 구현으로 인해 컴포넌트명, 파일명 등의 컨밴션이 잘 지켜지지 않음

- 컴포넌트화가 잘 이뤄지지 않아 메인 로직이 깔끔하지 못함
  
#### 개선할 점

- 리팩토링을 하며 변수명, 컴포넌트명, 폴더 구조를 알아보기 쉽게 수정
     
- 초기 설계의 중요성
     
   : 초기 구조를 잡을 때 컴포넌트, 폴더 구조 등의 틀을 먼저 생각하고 진행하여 코드의 가독성과 유지보수성 및 재사용성을 높일 것
       
## ➡️ 관심사 분리와, DI(의존성 주입)를 실행하기 위해 해당 프로젝트에서 어떤 노력을 했는지

### 관심사 분리

: 관련된 기능과 코드를 분리하여 코드 가독성, 유지보수성과 재사용성 및 확장성을 키우는 개념, 규모가 커질수록 단일 컴포넌트에 모든 기능을 집어넣게 되면 복잡성을 증가시킬 수 있다

  1) 컴포넌트 분리 : 메인 로직에 모두 작성하기보다는 하나의 기능을 하는 컴포넌트를 분리하여 작업
      
      ex) 슬라이드, 아이콘, 댓글, 댓글 입력창, 모달창 컴포넌트 등
      
  2) 커스텀 훅 : 입력한 값과 입력 값의 변경 함수를 관리하는 로직을 커스텀 훅화하여 다른 컴포넌트에서 입력 값을 관리하는 로직을 중복으로 작성하지 않아 재사용성에 용이하게 한다

      ex) hooks > use-input.js
      
  3) Context와 Provider : createContext 함수를 사용하여 새로운 컨텍스트를 생성하고 Provider로 컴포넌트를 감싸 해당 상태 관리를 Context를 통해 사용할 수 있음 -> 이로 인해 컴포넌트는 UI 관련 로직에 집중할 수 있으며, Provider는 상태 관리에 집중할 수 있다 
  
      ex) context > commentEditMode.js, item.js ...
      
  4) 관련된 로직끼리 폴더 구조를 나눔 : context, data, hooks, style, routes, components 등 관련있는 기능 또는 모듈을 별도의 폴더로 분리하여 관리하면 기능 간의 의존성이 줄어들고, 해당 폴더에서 해당 기능만을 다룰 수 있다 
      
### DI(Dependency Injection, 의존성 주입)

: 의존성 주입이란 하나의 객체가 다른 객체의 의존성을 제공하는 것을 말하는데 이 의존성 주입은 객체의 생성과 사용의 관심을 분리하여 가독성과 코드 재사용을 높혀준다는 특징이 있다

  1) Context 사용 : 전역 상태 관리를 위해 사용. 해당 Context를 구독하는 컴포넌트는 Context로부터 데이터나 함수를 받아와 사용할 수 있다. 상태를 한 곳에서 관리하여 상태 변경 및 업데이트 로직을 한 곳에서 관리하므로 코드의 가독성과 유지보수성이 향상되고, 다른 컴포넌트에서 해당 상태를 사용할 수 있어 확장성에 용이하다. 상태를 한 곳에서 관리하여 오류 발생 시 해당 Context에서 확인하면 되므로 쉽게 디버깅할 수 있는 장점도 있다
      
      ex) context > item.js, commentEditMode.js, editMode.js, prev.js

  2) Reducer 사용 : 상태를 관리하고 업데이트하기 위한 함수 사용. Reducer를 통하여 의존성을 주입함으로써 해당 리듀서 함수를 다른 외부 컴포넌트에서 호출하여 상태를 업데이트 할 수 있다 (재사용성, 유지보수성)

      ex) context > item.js > itemReducer
      
  -> Context와 Reducer를 사용하여 의존성을 주입하면 리액트에서 상태 관리와 데이터 흐름을 집중화시킬 수 있고, 컴포넌트 간의 의존성을 해걸할 수 있다.

## ➡️ 문서화

📋 스프린트

<a href="https://equatorial-rhythm-d75.notion.site/2-2-76808b2ab82542ea8bf495e985823281">@Pair2 Notion</a>

📅 데일리 스크럼

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="https://equatorial-rhythm-d75.notion.site/cd5a8f312ed24e39aa31f0c957515f90">🥰 김예슬</a></td>
    <td><a href="https://equatorial-rhythm-d75.notion.site/c685ec6512e649b4a1bf9335e16c74e0">❄️ 고승용</a></td>
    <td><a href="https://equatorial-rhythm-d75.notion.site/150ed2963c234b09a0bfe2750beb59d9">🦊 심재원</a></td>
  </tr>
</table>


## ➡️ 회의 내용
### 5/24
- 와이어프레임 구상, 어떤 기능 구현할지, 어떤 라이브러리 있는지 각자 조사해오기

### 5/25

- 와이어프레임 제작
- 기능별 담당자 정하기
- 목 데이터 생성하기

### 5/26

- 목데이터 완성
- 라우팅 연결 및 컨밴션, 프로젝트 세팅 작업, 사용 라이브러리 설치

### 5/27

- husky 설정 추가
- UI 디자인 구현 완료(feat/design)
- 이미지 슬라이더 구현 완료(feat/slide)
- 페이지네이션 구현 완료(feat/pagination)

### 5/28 ~ 5/30

- 게시글 CRUD 기능 구현 완료
- 댓글 CRUD 기능 구현 완료
