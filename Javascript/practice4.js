let test = "Viết hàm để viết hoa chữ cái đầu của từng từ trong câu";

function a(str) {
    let words = str.split(" ");

    words.map(word => word.charAt().toUpperCase() + word.slice(1));


    words.join(" ");
    
    // .join(" ");
    return words;
}

console.log(a(test));
