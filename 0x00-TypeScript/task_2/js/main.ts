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
