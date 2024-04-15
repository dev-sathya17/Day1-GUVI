let employee = { id: "197215", name: "Bharath", email: "bharat@employee.com" };

console.log(employee.id); //197215

console.log(employee["name"]); //Bharath
console.log(employee.address); //undefined

employee.address = "India";
// OR
employee["address"] = "India";
