let firstName : string = "john";
let lastName : string = "Doe";
if (!/[A-Z]/.test(firstName[0]) && /[A-Z]/.test(lastName[0])) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}

// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);
let fullName : string = firstName + " " + lastName;
console.log("Full Name:", fullName);