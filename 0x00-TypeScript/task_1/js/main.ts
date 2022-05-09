// Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
// Task 2
interface Directors extends Teacher {
    numberOfReports: number
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log('teacher1')
console.log(teacher1)
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log('director1')
console.log(director1);
// Task 3
function printTeacher(firstName: string, lastName: string): string {
    return (firstName[0] + lastName)
}
const obj1: printTeacherFunction = printTeacher
console.log(obj1(teacher1.firstName, teacher1.lastName))
// Task 4
class StudentClass {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(): string {
        return ('Currently working')
    }
    displayName(): string {
        return (`${this.firstName}`)
    }
}
export {
    printTeacher,
    StudentClass,
}
