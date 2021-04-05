/* Bài 6 */
/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
// var arr = [1, -10, 5, 18, -9, 5];

// function findMaxDiff(arr) {
//     let diffArray = arr.map((item, index) => (item - arr[++index])).slice(0, arr.length-1);
//     console.log(diffArray);
//     return Math.max(...diffArray);
// }

// var max = findMaxDiff(arr);

// console.log(max);

/*--------------- Bài 7 ------------------*/
//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

// function equal_pt(str){ 
//     let countOfp = str.match(/p/g) ? str.match(/p/g).length : 0;
//     let countOft = str.match(/t/g) ? str.match(/t/g).length : 0;
//     return countOfp === countOft ? true : false;
// }

//    let a = "aaaaaaa";

//   console.log( equal_pt(a));

// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
// function first(array, n) {
//     // viết code ở đây.
//     let takeIndex = n ? (n < 0 ? 0 : n): 1;
//     var result = array.slice(0, takeIndex);
//     console.log(result, takeIndex);
//     return result;
// }

// // Test 1: expect: [7]
// first([7, 9, 0, -2])

// // Test 2. Expect: [7, 9, 0]
// first([7, 9, 0, -2], 3)

// // Test 3. Expect: [7, 9, 0, -2]
// first([7, 9, 0, -2], 6)

// // Test 4. Expect: []
// first([7, 9, 0, -2], -3)

/* Excercise 9*/
//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

// function omitCharAt(str, n) {
//     // viết code ở đây.	
//     let substr =str.slice(0, n) + str.slice(n+1);
//     console.log(substr);

//     return substr;
// }

// // Test 1. Expect: "Hello Qung Dat"
// omitCharAt("Hello Quang Dat", 8);

// // Test 2. Expect: "ello Quang Dat"
// omitCharAt("Hello Quang Dat", 0);

/* Excercise 10 */
// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
// function nearestTo100(a, b) {
//     // viết code ở đây.
//     let aDiff = a - 100;
//     let bDiff = b - 100;
//     let result =  Math.abs(aDiff) < Math.abs(bDiff) ? a : b;
//     console.log(result);

//     return result;
// }

// // Test 1: Expect: 89
// nearestTo100(89, 189);

// // Test 2: Expect: 130
// nearestTo100(10, 130);

/* Excercise 11 */
/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

// function checkInt(number1, number2) {
//   // viết code ở đây.	
//   if (number1 == 0 || number2 == 0) {
//     return false;
//   }
//   let result = number1 < 0 && number2 > 0 ||
//     number1 > 0 && number2 < 0 ?
//     true :
//     false;

//   console.log(result);
//   return result;
// }

// // Test 1 - Expect: true
// checkInt(-1, 2);

// // Test 2 - Expect: false
// checkInt(2, 6);

// // Test 3 - Expect: false
// checkInt(-2, -6);

// // Test 4 - Expect: true
// checkInt(2, -6);

/* --------------------- */

// Excersice 12 
/*
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
// function difference(n) {
//   // viết code ở đây.
//   let diff = Math.abs(n - 13);
//   let result = n > 13 ? diff * 2 : diff;

//   console.log(result);
//   return result;
// }

// // Test 1 - Expect: 12
// difference(19);

// // Test 2 - Expect: 10
// difference(3);

// // Test 3 - Expect: 12
// difference(1);

// // Test 4 - Expect: 14
// difference(20)

/* ------------ */
/* Excecise 13 
Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

// function pyString(String) {
//   // viết code ở đây.
//   const py = 'Py';
//   let result = String.startsWith('Py') ? String : py.concat(String);
//   console.log(result);
//   return result;
// }

// // Test 1 - Expect: "PyCoders X"
// pyString("Coders X")

// // Test 2 - Expect: "PyHello"
// pyString("PyHello")

/* ---------------- */
/* Excercise 14
Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
// function toNextChar(str) {
//   // viết code ở đây.	
//   let characterCodes  = [];
//   for (let i = 0; i < str.length; i++) {
//     var charNextCode = str.charCodeAt(i) + 1;
//     characterCodes.push(String.fromCharCode(charNextCode));
//   }

//   let result = characterCodes.join(''); 
//   console.log(result);

//   return result;
// }

// // Test 1 - Expect: "Ifmmp"
// toNextChar('Hello');

// // Test 2 - Expect: 'bcd'
// toNextChar('abc');

/* ------------------------------ */
// Excercise 15
// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
// function newString(str, n) {
//   // viết code ở đây.
//   let result = str.slice(0, n).concat(str.slice(str.length - n));

//   console.log(result);

//   return result;
// }

// // Test 1 - Expect: 'dele'
// newString('describe', 2);

// // Test 2 - Expect: gsd5gs
// newString('gsdrw4rfergf45gs0', 3);

/* ----------- */
/* Excercise 16 
Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
// function chunkArrayInGroups(arr, size){
//   // write code here.
//   let result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size))
//   }

//   console.log(result);

//   return result;
// }

// // Test 1 - Expect: [["a", "b"], ["c", "d"]]
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* -------------------------- */
/* Excercise 17 
Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/

// function calculatorMax(max, arr, k) {
//   if (k > 0) {
//     let maxItem = Math.max(...arr);
//     max += maxItem;
//     arr = arr.filter(x => x < maxItem);
//     k--;
//     calculatorMax(max, arr, k)
//   }
//   else { 
//     console.log(max);
//     return max;
//   }
// }

// function maxOfSumChain(arr, k) {
//   // write code here.  
//   let result = 0;

//   for (let i = 0; i < k; i++) {
//     let maxItem = Math.max(...arr);
//     arr = arr.filter(x => x < maxItem);
//     result += maxItem;
//   }

//   console.log(result);
//   return result;

// }

// // Test 1 - Expect: 5
// maxOfSumChain([1, 3, 2], 2);

// // Test 2 - Expect: 11
// maxOfSumChain([1, 3, 2, 6, 2], 3);

/* -----------------*/
/*  Excercise 18
Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

// function findMostFrequent(arr) {
//   // Viết code tại đây!
//   let start = +new Date();
//   let resultArray = [];
//   let item;
//   let repetitionItem;
//   do {
//     item = arr[0];
//     repetitionItem = arr.filter(x => x == item).length;
//     resultArray.push({
//       item: item,
//       repetitionItem: repetitionItem
//     });
//     arr = arr.filter(x => x != item);
//   } while (arr.length > 0);

//   // let rsArray = arr.reduce((a, b) => {
//   //   a[b] = a[b] + 1 || 1;
//   // }, {});

//   let repeArray = resultArray.map(item => {
//     return item.repetitionItem
//   });
//   let max = Math.max(...repeArray);

//   let result = [];
//   resultArray.map(item => {
//     if (item.repetitionItem == max) {
//       result.push(item.item);
//     }
//   });
//   let end = +new Date();
//   console.log(`my function ${end - start} ms`)
//   console.log(result);
//   return result;

// }


// var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];


// function arrayRandom(max, index) {
//   let resultArray = [];
//   for (let i = 0; i < index; i++) {
//     resultArray.push(Math.floor(Math.random() * max));
//   }

//   return resultArray;
// }

// let testArray = arrayRandom(10, 10000000);

// function foo(arr) {
//   let start = +new Date();

//   let str = arr.reduce((a, b) => {
//     a[b] = a[b] + 1 || 1
//     return a;
//   }, {});

//   var a = Object.values(str);
//   var max = Math.max(...a);

//   let rs = Object.entries(str).filter((value) => {
//     return value[1] == max;
//   })
//   let result = rs.map(item => {
//     return parseInt(item);
//   })
//   let end = +new Date();

//   console.log(`Excution time: ${end - start} ms.`);
//   console.log(result);
//   return result;
// }

// findMostFrequent(testArray)

// foo(testArray)


/* -------------------- */

/* Excercise 19
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

// function rearrangeChar(str1, str2) {
//   // Viết code tại đây!
//   let arr1= [];
//   let arr2 = [];

//   if (str1.length != str2.length) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     arr1.push(str1.charCodeAt(i));
//     arr2.push(str2.charCodeAt(i));
//   }

//   arr1.sort();
//   arr2.sort();

//   for(let i = 0; i< arr1.length; i++) {
//     if (arr1[i] != arr2[i]) 
//     {
//       return false;
//     }
//   }

//   return true;
// }

// let a = rearrangeChar('abb', 'abc');
// let b = rearrangeChar('abc', 'bac');
// console.log(a, b);

/* ------------------ */
/* Excercise 20
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
  // Viết code tại đây
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let result = max - min;

  console.log(result);
  return result;
}

let arr = [1, 2, 3, 8, 9];
findmaxDiff(arr);