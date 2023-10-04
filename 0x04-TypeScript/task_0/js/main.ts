interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 {
  firstName: 'Ahmed';
  lastName: 'Khaled';
  age: 27;
  location: 'Egypt'
}

const student2 {
  firstName: 'Omar';
  lastName: 'Seif';
  age: 26;
  location: 'Egypt';
}

const studentList = [student1, student];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
