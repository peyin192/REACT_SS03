let string1 : string = "banana";
for (let i = 0; i < string1.length; i++) {
    for (let j = i + 1; j < string1.length; j++) {
        if(string1[i] === string1[j]) {
            string1 = string1.slice(0, j) + string1.slice(j + 1);
            j--;
        }
    }
}
console.log(string1);