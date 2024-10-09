interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'John',
    lastName: 'Wayne',
    age: 20,
    location: 'Kenya'
}
const studentTwo: Student = {
    firstName: 'Imani',
    lastName: 'Alfred',
    age: 21,
    location: 'Nairobi, Kenya'
}
const students: Student[] = [studentOne, studentTwo];
const table = document.createElement('table');
table.style.border = '1px solid black';

// Add headers
const tableHeader = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');
firstNameHeader.innerText = 'Name';
locationHeader.innerText = 'Location';
tableHeader.append(firstNameHeader, locationHeader);
table.appendChild(tableHeader);

students.forEach((student) => {
    // Add table data
    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');
    firstName.innerText = student.firstName;
    location.innerText = student.location;
    row.append(firstName, location);
    table.append(row);
});

document.body.appendChild(table);
