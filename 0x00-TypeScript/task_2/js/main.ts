// Task 5
interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}
interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}
class Director implements DirectorInterface {
    workFromHome() { return `Working from home` }
    getCoffeeBreak() { return `Getting a coffee break` }
    workDirectorTasks() { return `Getting to director tasks` }
}
class Teacher implements TeacherInterface {
    workFromHome(): string {return(`Cannot work from home`)}
    getCoffeeBreak(): string {return(`Cannot have a break`)}
    workTeacherTasks(): string {return(`Getting to work`)}
}
function createEmployee(salary: number | string): TeacherInterface | DirectorInterface {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher()
    }
    return new Director()
}
function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
	return (employee instanceof Director);
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if (employee instanceof Director) {
		return employee.workDirectorTasks();
	} else if (employee instanceof Teacher) {
		return employee.workTeacherTasks();
	}
}

type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects): string {
	if (todayClass === "Math") {
		return `Teaching Math`;
	} else if (todayClass === "History") {
		return `Teaching History`;
	}
}

// console.log(teachClass('Math'));
// console.log(teachClass('History'));

export {
	Director,
	Teacher,
	createEmployee,
	isDirector,
	executeWork,
	teachClass,
}
