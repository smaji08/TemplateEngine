class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }

};

const employee = new Employee("stella",1,"stella@gmail.com");

console.log(employee.getName());
console.log(employee.getId());
console.log(employee.getEmail());

module.exports = Employee;