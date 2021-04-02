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

function equal_pt(str){ 
    let countOfp = str.match(/p/g) ? str.match(/p/g).length : 0;
    let countOft = str.match(/t/g) ? str.match(/t/g).length : 0;
    return countOfp === countOft ? true : false;
}

   let a = "aaaaaaa";

  console.log( equal_pt(a));



