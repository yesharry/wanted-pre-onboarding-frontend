# 원티드 프리온보딩 프론트엔드 인턴십 사전과제

## 기능 시연 영상

[시연 영상 유튜브](https://youtu.be/nD7fvlHOb5k)

### ✅ 로그인, 회원가입

<img src="https://user-images.githubusercontent.com/101863209/207669733-1fbbab83-c3ea-48ac-b2a7-e287edb5d9d0.gif" width="700" height="450"/>

**Assignment1**

- 이메일, 비밀번호의 유효성 검사 기능 구현 (이메일 조건: @ 포함, 비밀번호 조건 :8자 이상)
- 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼 활성화

**Assignment2**

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동

**Assignment3**

- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속하면 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속하면 `/` 경로로 리다이렉트

### ✅ Todo List

<img src="https://user-images.githubusercontent.com/101863209/207669985-1d7e6d8e-321f-4d1f-a62e-6dfcf93cdd9f.gif" width="700" height="450"/>

**Assignment4**

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 구현
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부 표시
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 구현

<img src="https://user-images.githubusercontent.com/101863209/207670260-f7f808ce-9efd-4c38-8131-9b40e8f535ae.gif" width="700" height="450"/>

**Assginment5**

- 투두 리스트의 수정, 삭제 기능을 구현
  - 투두 리스트의 개별 아이템 우측에 수정버튼이 존재, 해당 버튼을 누르면 수정모드가 활성화, 투두 리스트의 내용을 수정할 수 있도록 구현
  - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시, 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 구현
  - 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재, 해당 버튼을 누르면 투두 리스트가 삭제되도록 구현

**추가 구현**

- 로그아웃(로컬 스토리지에서 토큰 삭제)

## 프로젝트 설치 및 실행

### 프로젝트 패키지 설치

```
npm install
```

### 프로젝트 실행

```
npm start
```

## 사용한 기술 스택

- react
- react-router-dom
- styled-components

