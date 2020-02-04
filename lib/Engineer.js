const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHubName){
        super(name,id,email);
        this.github = gitHubName;
    }
    getGithub(){
        return this.github;
    }
    
    getRole(){
        return "Engineer";
    }
}

const engineer = new Engineer("stella", 2, "stella@gmail.com","smaji08");

console.log(engineer.getGithub());

module.exports = Engineer;