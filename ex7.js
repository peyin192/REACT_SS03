var string1 = "banana";
for (var i = 0; i < string1.length; i++) {
    for (var j = i + 1; j < string1.length; j++) {
        if (string1[i] === string1[j]) {
            string1 = string1.slice(0, j) + string1.slice(j + 1);
            j--; // Giảm j để kiểm tra lại vị trí mới của ký tự
        }
    }
}
console.log(string1);
