function toNumber(value) {
    if (typeof value === "number")
        return value;
    var num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Dữ liệu không hợp lệ";
    return numA + numB;
}
function subtract(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Dữ liệu không hợp lệ";
    return numA - numB;
}
function multiply(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Dữ liệu không hợp lệ";
    return numA * numB;
}
function divide(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null || numB === 0)
        return "Dữ liệu không hợp lệ";
    return numA / numB;
}
console.log(add("5", 3));
console.log(subtract("10", "2"));
console.log(multiply(4, "abc"));
console.log(divide("20", "0"));
