## 비개발자를 위한 겁나 기초적인 자바스크립트

- 준비 사항 : html, css 기본지식
- 배우게 될것 : javascript 기초지식

---

### 1주차 - 배경과 이론

#### 0. 배경
##### 프로그래밍이란 무엇인가
- 컴퓨터 프로그램 언어로 컴퓨터와 소통하는 행위

##### 프로그래머처럼 생각하기
- 단계별
- 논리적

##### javascript란 무엇인가
- 브라우저로 웹페이지를 사용할때 일어나는 기술적인 내용들
- 프론트엔드, 백엔드 차이
- html, css, javascript
- javascript는 프론트엔드 언어
- javascript로 만들 수 있는 것들

##### javascript의 종류
- ECMAScript
- javascript 프레임웍, 라이브러리?
- vanilla javascript

##### html에서 javascript사용하기

- javascript로 경고창 띄우기
- javascript로 콘솔로그 출력하기
- chrome dev tool 사용하기
- javascript를 html에서 사용하는 여러가지 방법
- javascript 파일 삽입 위치의 의미
- css 사용하기

#### 1. 변수
- 실행순서
- 변수의 생성, 할당, 사용
- var, let, const
- 주석
```
var a = 20;
var b = a - 5;
a = 10;
console.log(b, a);
```

#### 2. 데이터 타입
##### 기본형
- Boolean : Boolean 은 논리적인 요소를 나타내고, true 와 false 의 두 가지 값을 가질 수 있다
- Null : Null 타입은 딱 한 가지 값, null 을 가질 수 있다. 어느것도 가리키고 있지 않음을 의미.
- Undefined : 값을 할당하지 않은 변수는 undefined 값을 가진다. 
- Number : 숫자
- String : 문자열
- Symbol : es6에서 추가된 유일하고 변경 불가능한 기본값

```
// Boolean
const flag = true;

// Null
const result = null;

// Undefined
const name;
const age = undefined;

// Number
const score = 100;
const averg = 98.5;

// String
const fisrt = 'a';
const what = "lawcompnay";

// Symbol
const id = Symbol(1);
```

##### Array
```
const mon = 'Mon';
const tue = 'Tue';
const wed = 'Wed';
const thu = 'Thu';

console.log(mon, tue, wed, thu);

// 배열안에 여러타입 넣기
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu'];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
```

##### Object
```
const myInfo1 = ['Dong teacher', '40', 'Male', 'Seoul'];
console.log(myInfo);

// 객안에 여러타입 넣기
const myInfo2 = {
    name: 'Dong teacher',
    age: '40',
    gender: 'Male',
    location: 'Seoul'
}

console.log(myInfo2.gender);

myInfo2.location: 'busan';

console.log(myInfo2.location);
console.log(myInfo2['location']);

// 배열과 객체를 이용해 복합적인 속성을 가진 객체를 만들어 보자.
```
---

### 2주차 - 기초 문법과 실습
- function
- dom
- event
- 조건문
- 반복문

### 3주차 - 간단한 앱을 만들며 기본기 연마
- 시계
- 투두리스트
- 숫자 게임
- 벽돌깨기 게임
- 등등