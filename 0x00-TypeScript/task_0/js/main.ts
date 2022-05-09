interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}
const student1: Student = {
    firstName: 'jeff',
    lastName: 'moe',
    age: 100,
    location: 'hm'
}
const student2: Student = {
    firstName: 'Leffen',
    lastName: 'meh',
    age: 102,
    location: 'hrm',
}
const studentsList: Student[] = [student1, student2]
const labels: string[] = ['firstName', 'location']
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

for (let i: number = 0; i < labels.length; i++) {
    const th: HTMLTableCellElement = document.createElement('th');
    th.appendChild(document.createTextNode(`${labels[i]}`));
    thead.appendChild(th);
}

for (let i: number = 0; i < studentsList.length; i++) {
    const tr: HTMLTableRowElement = document.createElement('tr');
    tbody.appendChild(tr);
    const values: string[] = [studentsList[i].firstName, studentsList[i].location]

    for (let j: number = 0; j < values.length; j++) {
        const td: HTMLTableCellElement = document.createElement('td');
        td.appendChild(document.createTextNode(`${values[j]}`));
        tr.appendChild(td);
    }
}
