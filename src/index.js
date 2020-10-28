import fs from 'fs';

let inputN = document.getElementById('inputNavn');
let inputE = document.getElementById('inputEmail');
let studentList = document.getElementById('studentList');
let students = [];
let knapp1 = document.getElementById('Knapp');
console.log(studentList);

function updateStudentList() {
  studentList.innerHTML = '';
  for (let student of students) {
    let li = document.createElement('li');
    li.innerText = student.name + ', ' + student.email;

    let button = document.createElement('button');
    button.innerText = 'x';
    button.onclick = () => {
      console.log(student);
      let x = students.indexOf(student);
      students.splice(x, 1);
      updateStudentList();
      console.log(x);
      var string = JSON.stringify(students);
      console.log(string);
      fs.writeFile('src/data.json', string, (error) => {
        if (error) return console.log(err);
      });
    };

    li.appendChild(button);
    studentList.appendChild(li);
  }
}

fs.readFile('src/data.json', (error, data) => {
  students = JSON.parse(data);
  console.log(students);
  if (error) return console.log(err);
  updateStudentList();
});

knapp1.onclick = (event) => {
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

  document.getElementById('inputNavn').value = '';
  document.getElementById('inputEmail').value = '';

  updateStudentList();
};
