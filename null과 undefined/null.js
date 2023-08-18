// CASE 1 
var a = null; // 변수명 a에 null값을 할당
var b; // 변수명 b에 값 할당X
console.log(a); // 변수 a에 null값을 할당하였다.   
console.log(b); // 변수 b에 값을 할당하지 않았기 때문에 undefined가 된다

// CASE 2 
  function returnNull() { 
    return null; 
  }
  console.log(returnNull()); // 함수명 returnNull이 null을 반환하므로 null이 된다.
  
// CASE 3
  function returnUndefined() {
  }
  console.log(returnUndefined()); // 함수명 returnUndefined가 반환 값을 정하지 않았으므로 undefined가 된다.
  
// CASE 4
var numbers = [0, 4, , 4];
  console.log(numbers[2]); // 배열 numbers[2]에는 값이 할당되어있지 않으므로 undefined가 된다.
  console.log(numbers[10]); // 배열 numners[10]은 존재하지 않는 인덱스이므로 undefined가 된다.

 
// CASE 5
var person = {name : "KIM", age : null};
  console.log(person.age); // 변수명 person.age에 null을 할당하였으므로 null
  delete person.age; //person.age에 할당된 값 삭제
  console.log(person.age); //person.age에 값이 없으므로 undefined가 된다.

// 비교연산자를 활용하여 각각의 케이스에 따라 null인지 undefined인지 확인
console.log(b === null); // false 변수명 b는 undefined로 null과 같은 값이지만 타입이 다르므로 false
console.log(b === undefined); // true 
console.log(a === null); // true
console.log(a === undefined); // false 변수명 a는 null로 undefined와 같은 값이지만 타입이 다르므로 false
console.log(a == b); // null == undefined => true
console.log(a === b); // null === undefined => false
console.log(returnNull() != returnUndefined()); // null != undefined => false
console.log(returnNull() !== returnUndefined()); // null !== undefined => true
