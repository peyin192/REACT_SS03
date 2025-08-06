let stringVar : string = "2";
let numberVar : number = 2;
// @ts-ignore
console.log(stringVar == numberVar); 
// @ts-ignore
console.log(stringVar === numberVar);
// Kết quả là "Chuỗi và số khác nhau nhưng có thể so sánh" vì khi so sánh bằng toán tử ==, JavaScript sẽ chuyển đổi kiểu dữ liệu của chuỗi sang số trước khi so sánh.
