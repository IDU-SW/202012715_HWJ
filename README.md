# Mapping
Method | URL | 기능
------ | ------ | ------
get | / | Index Page
get | /luxuries | 전체 조회
get | /luxuries/:luxuryId | 상세 조회
get | /luxury/add | Add Page
post | /luxuries | 추가
post | /luxury/edit/:luxuryId | 수정
get | /luxury/del/:luxuryId | 삭제


# REST 서비스 (6주차)

## JSON
JSON 파싱, 요청과 응답

- jsonParsing : JSON 파싱
- jsonRequest : JSON 요청 분석하기. HTTP 모듈과 Express 모듈
- jsonResponse : JSON 응답 작성하기. HTTP 모듈과 Express 모듈


## Luxuries
JSON 초기 데이터, Express를 이용해서 작성한 REST 서버


## 통신규약
요청에 따른 응답

1. Get /luxuries : 모든 데이터 출력
 - req : localhost:3000/luxuries
 - res : {"data":[
     {"id":0,"brand":"구찌","founder":"구찌오 구찌","country":"이탈리아"},
     {"id":1,"brand":"샤넬","founder":"코코 샤넬","country":"프랑스"},
     {"id":2,"brand":"버버리","founder":"토마스 버버리","country":"영국"}
     ],"count":3}

2. Get /luxuries/:luxuryId : 해당 id 출력
 - req : localhost:3000/luxuries/1
 - res : {
     "id":1,
     "brand":"샤넬",
     "founder":"코코 샤넬",
     "country":"프랑스"
     }

3. Post /luxuries : 데이터 추가
 - req : localhost:3000/luxuries
    * body, x-www-form-urlencoded
    * {
        "brand" : "지방시",
        "founder" : "위베르 드 지방시",
        "country" : "프랑스"
    }
 - res :


***


# 프론트 엔드 추가 (7주차)
 - 페이지 제작에 REACT 모듈 사용

## View 이동
1. 전체 조회
  - index.jsx -> 전체조회(get /luxuries) -> showList.jsx

2. 추가
  - index.jsx -> 새로만들기(get /luxury/add) -> newLuxury.jsx -> 추가(post /luxuries) -> showList.jsx

3. 상세 보기
  - showList.jsx -> brand(get /luxuries/:luxuryId) -> showDetail.jsx


***


# DB 연동 (8주차)
  - JSON 데이터 파일을 읽어오던 프로젝트에 DB를 적용

## 작업 내용
  - /model/dbConnection.js 생성
    * mysql2 모듈 추가
    * mysql 정보 등록
    * Promise 기반 Connecion Pool 생성

  - /model/prepareTable.js 생성
    * 테이블을 생성
    * JSON 기반 데이터 파일을 읽음
    * DB에 저장

  - LuxuryModel.js / LuxuryRouter.js
    * Promise 기반의 Connection Pool을 생섬하고 사용함에 따라서 비동기 로직 처리
    * async, await 구조로 변경
    

***


# Sequelize 적용 (9주차)
  - 프로젝트에 ORM 방식의 Sequelize를 적용
  - ORM : 객체와 모델의 매핑
  - 지원 DB : PostgreSQL, MySQL, MariaDB, SQLite, MSSQL

## 작업 내용
  - DB와 관련된 서비스를 Model에서만 하도록 변경
    * Model에 dbConnection, prepareTable 작업 추가
    * Sequalize ORM 방식을 통해 SQL 작업 간소화

  - 기능 추가
    * 수정
    * 삭제


***


# MongoDB (10주차)
MongoDB Branch 참고


***


# Auth 인증기능 (12주차)

## 등록된 id / pw
~~~javascript
user = {
    id: 'aa',
    pw: '11'
}
~~~

## 인증이 필요한 곳
 - 전체조회에서 상세조회로 넘어가는 부분
 - 미 로그인 시, 로그인 페이지로 넘어감