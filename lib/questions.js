//The three separate question arrays and the validations
const githubUsernameRegex = require("github-username-regex");

//checking with RegEx which allows only alphabets and space for names and school
function validateString(name){
    let re = name.match(/^[a-zA-Z ]+$/);
    return re !== null;
}

//First character of each word of the name or school to be uppercased
function toUpper(val) {
    return val.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}

//regEx for email validation
function validateEmail(name) {
    let re = name.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return re !== null;
}

//regEx for numbers
function validateNumber(name){
    let re = name.match(/^[0-9]*$/);
    return re !== null;
}

const quesManager = [
    {
        type: "list",
        name: "member",
        message: "Select the position you want to add to your team",
        choices: ["Manager"],
    },
    {
        type: "input",
        name: "Name",
        message: "Please enter Manager's name...",
        validate: validateString,
        filter: toUpper
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter Manager's Email ID...",
        validate: validateEmail
    },

    {
        type: "input",
        name: "OfficeNum",
        message: "Please enter Manager's Office Number...",
        validate: validateNumber

    },

    {
        type: "confirm",
        name: "continueBuild",
        message: "Do you want to add more members to your team",
        default: true
    },
    {
        type: "list",
        name: "member",
        message: "Select the position you want to add to your team",
        choices: ["Engineer", "Intern"],
        when: answers => {return answers.continueBuild;}
    }
];

const quesEngineer = [
    {
        type: "input",
        name: "Name",
        message: "Please enter Engineer's name...",
        validate: validateString,
        filter: toUpper

    },
    {
        type: "input",
        name: "Email",
        message: "Please enter Engineer's Email ID...",
        validate: validateEmail
    },

    {
        type: "input",
        name: "gitHub",
        message: "Please enter Engineer's GitHub id...",
        //github username validation
        validate: name => {return githubUsernameRegex.test(name);}
    },
    {
        type: "confirm",
        name: "continueBuild",
        message: "Do you want to add more members to your team",
        default: true
    },
    {
        type: "list",
        name: "member",
        message: "Select the position you want to add to your team",
        choices: ["Engineer", "Intern"],
        when: answers => {return answers.continueBuild;}
    }
];

const quesIntern = [
    {
        type: "input",
        name: "Name",
        message: "Please enter intern's name...",
        validate: validateString,
        filter: toUpper
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter intern's Email ID...",
        validate: validateEmail
    },

    {
        type: "input",
        name: "School",
        message: "Please enter Intern's School Name...",
        validate: validateString,
        filter: toUpper
    },
    
    {
        type: "confirm",
        name: "continueBuild",
        message: "Do you want to add more members to your team",
        default: true
    },
    {
        type: "list",
        name: "member",
        message: "Select the position you want to add to your team",
        choices: ["Engineer", "Intern"],
        when: answers => {return answers.continueBuild;}
    }
];

module.exports = {
    quesManager: quesManager,
    quesIntern: quesIntern,
    quesEngineer: quesEngineer,
};