/** Ceate a simple JavaScipt function named displayInfo that takes to paametes (name and ole) and
logs a message
 Use call to invoke the displayInfo function ith specific aguments
 Use apply to invoke the displayInfo function ith aguments passed as an aay
 Ceate anothe function named geet that logs a geeting ith this context
 Use bind to ceate a ne function boundeet ith a specific context and log the geeting.    */



 function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

displayInfo.call(null, "Richa", "Developer");

displayInfo.apply(null, ["Amit", "Designer"]);

function greet() {
    console.log(`Hello, ${this.name}!`);
}

let person = { name: "Richa" };

let boundGreet = greet.bind(person);

boundGreet();  

/***   output
Name: Richa, Role: Developer
Name: Amit, Role: Designer     
Hello, Richa!
 */
