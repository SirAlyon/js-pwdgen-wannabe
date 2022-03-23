const firstname = prompt(`Type your name below:`);
const lastname = prompt(`Type your surname below:`);
const prefColor = prompt(`Type your favorite color below:`);

console.log(firstname);
console.log(lastname);
console.log(prefColor);


document.getElementById("password").innerHTML = "Ecco la tua password generata:" + "  " + firstname + lastname + prefColor + 22;
