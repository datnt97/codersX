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




