function toNumber(value: number | string): number | null {
    if (typeof value === "number") return value;
    const num = Number(value);
    return isNaN(num) ? null : num;
}

function add(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    return numA + numB;
}

function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    return numA - numB;
}

function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    return numA * numB;
}

function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null || numB === 0) return "Dữ liệu không hợp lệ";
    return numA / numB;
}

console.log(add("5", 3));