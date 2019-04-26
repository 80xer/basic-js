## 비개발자를 위한 겁나 기초적인 자바스크립트

- 준비 사항 : html, css 기본지식
- 배우게 될것 : javascript 기초지식

---

### 1주차 - 배경

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

### 2주차 - 변수와 데이터 타입
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

#### javascript는 loosely typed 언어, dynamic 언

- 변수의 타입을 미리 선언할 필요가 없다.
- 타입은 프로그램이 처리되는 과정에서 자동으로 파악된다.
- 같은 변수에 여러 타입의 값을 넣을 수 있다.

```
var foo = 42;    // foo 는 이제 Number 임
var foo = "bar"; // foo 는 이제 String 임
var foo = true;  // foo 는 이제 Boolean 임
```

##### 기본형 Primitive

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

##### 객체 Object

- 속성을 담을 수 있는 가방(collection), {키 : 값}
- 속성 값은 객체를 포함해 어떠한 자료형도 될 수 있다.(함수 포함)
- 속성은 키로 식별된다. 키는 String 또는 Symbol 값이다.
- 속성의 값이 데이터일 경우 프로퍼티라 부르고
- 속성의 값이 함수일 경우 메소드라고 부른다.

```
var person = {};
console.log(person);
//[object Object]

// : , 설명
// 다양한 자료형 설명
person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
}

// 점 표기법
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.interests[1]);
console.log(person.bio());
console.log(person.greeting());

// name 속성의 값을 객체로 수정해보기

// 괄호 표기법
console.log(person['age']);

// 값 설정
// 기존 멤버 값 변경
person.age = 45;
person['name']['last'] = 'Cratchit';
console.log(person.age);
console.log(person['name']['last']);

// 새로운 멤버 추가
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }

// 괄호 표기법의 이점, 멤버 이름까지 동적으로 사용할 수 있다.
var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;

```

##### Array

- 데이터의 집합을 저장하기 위한 용도
- 연관있는 데이터의 집합

```
const mon = 'Mon';
const tue = 'Tue';
const wed = 'Wed';
const thu = 'Thu';
console.log(mon, tue, wed, thu);

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu'];
console.log(daysOfWeek);

console.log(daysOfWeek[2]);
```

---

### 3주차 - 기초 문법과 실습

#### function

##### first-class object

- first-class object는 변수에 저장할 수 있어야 합니다.
- first-class object는 함수의 파라미터로 전달할 수 있어야 합니다.
- first-class object는 함수의 반환값으로 사용할 수 있어야 합니다.
- first-class object는 자료 구조에 저장할 수 있어야 합니다.

---

- dom
- event
- 조건문
- 반복문

### 4주차 - 간단한 앱을 만들며 기본기 연마

- 시계
- 투두리스트
- 숫자 게임
- 벽돌깨기 게임
- 등등
