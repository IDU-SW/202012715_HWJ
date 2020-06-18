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


***


# MongoDB (10주차)

## MongoDB
NoSQL DB
- 관계형 DB가 아닌 DB
- 관계형 DB : SQl을 이용해서 데이터를 다룸
- NoSQL DB : SQL을 사용하지 않고 데이터를 다룸
  * 특정 분야에서 관계형 DB에 비해 빠른 성능을 제공
- MongoDB에서 'Table'을 'Collection' 이라고 함

## 도큐먼트 ID
 - 필드이름 : _id
 - 기본 타입 : ObjectId
 - 같은 식별자(_id)가 되지 않도록 도큐먼트 생성 시 자동 생성 시간 + 기기 정보 + 프로세스 등의 값을 조합해서 자동 생성
 - 수동 생성 가능
  * db.CollecionName.insert({_id:ObjectId('123123123'), title:'veryGood'})

## 작업 성공 내용
 - MongoDB와 프로젝트 연결 성공
 - Model에서 값을 가져오는 것 성공

 ## 작업 실패 내용
 - View에 값을 나타내는 작업 실패
  * react를 view에 사용하고 있었으나, children collection을 rendering 하려면 array를 사용하라고 함.
  * view 부분을 아래와 같이 변경해 봄
~~~javascript
let items = new Array(this.props.luxury.len);
    let i = 0;
    for(var key in this.props.luxury){
        items[i] = this.props.luxury[key];
        i = i + 1;
}
~~~
  * 결과는 값1개는 가져오지만 2번째 부터 같은 오류 발생
  * DB 확인 결과 JSON파일을 통해 입력시킨 초기값과 따로 id가 하나씩 더 생성됨
  * 
  {
    _id: ObjectId("5eeb71017fbc072f0066165c")
    __v: 0
  }