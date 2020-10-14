import fs from 'fs';

let inputN = document.getElementById('inputNavn');
let inputE = document.getElementById('inputEmail');
let studentList = document.getElementById('studentList');
let students = [];
let knapp = document.getElementById('Knapp');

fs.readFile('src/data.json', (error, data) => {
  students = JSON.parse(data);
  console.log(students);
  if (error) return console.log(err);
  for (let student of students) {
    let li = document.createElement('li');
    li.innerHTML = '<button id="">Slett</button>' + ' ' + student.name + ', ' + student.email;
    studentList.appendChild(li);
  }
});
knapp.onclick = (event) => {
  students.push({
    name: inputN.value,
    email: inputE.value,
  });
  console.log(students);
  var string = JSON.stringify(students);
  console.log(string);
  fs.writeFile('src/data.json', string, (error) => {
    if (error) return console.log(err);
  });

  let li = document.createElement('li');
  li.innerHTML = '<button id="">Slett</button>' + ' ' + inputN.value + ', ' + inputE.value;
  studentList.appendChild(li);
  document.getElementById('inputNavn').value = '';
  document.getElementById('inputEmail').value = '';
};
