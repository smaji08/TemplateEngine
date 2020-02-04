const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name,id,email);
        this.officeNumber = officeNum;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

const manager = new Manager("stella", 2, "stella@gmail.com",5);

console.log(manager.getOfficeNumber());

module.exports = Manager;