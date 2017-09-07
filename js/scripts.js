// scripts.js
// Zadanie 9.2

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName;

newName = prompt ('Enter new name to add');

if (allNames.indexOf(newName) === -1) {
	var index = allNames.push(newName);
	console.log ('New name added to the table. New table lenght is: ' + index);
} else {
	console.log ('This name is already added. Nothing to add');
}

console.log(allNames);

