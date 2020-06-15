
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

Get /luxuries : 모든 데이터 출력
 - req : localhost:3000/luxuries
 - res : {"data":[
     {"id":0,"brand":"구찌","founder":"구찌오 구찌","country":"이탈리아"},
     {"id":1,"brand":"샤넬","founder":"코코 샤넬","country":"프랑스"},
     {"id":2,"brand":"버버리","founder":"토마스 버버리","country":"영국"}
     ],"count":3}

Get /luxuries/:luxuryId : 해당 id 출력
 - req : localhost:3000/luxuries/1
 - res : {
     "id":1,
     "brand":"샤넬",
     "founder":"코코 샤넬",
     "country":"프랑스"
     }

Post /luxuries : 데이터 추가
 - req : localhost:3000/luxuries
    * body, x-www-form-urlencoded
    * {
        "brand" : "지방시",
        "founder" : "위베르 드 지방시",
        "country" : "프랑스"
    }
 - res :
