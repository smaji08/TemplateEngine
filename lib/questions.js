const quesManager = [
    {
        type: "input",
        name: "Name",
        message: "Please enter Manager's name...",

    },
    {
        type: "input",
        name: "Id",
        message: "Please enter Manager's Id...",

    },
    {
        type: "input",
        name: "Email",
        message: "Please enter Manager's Email ID...",

    },

    {
        type: "input",
        name: "OfficeNum",
        message: "Please enter Manager's Office Number...",

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
        when: function(answers){
            return answers.continueBuild;
        }
    }
];

const quesEngineer = [
    {
        type: "input",
        name: "Name",
        message: "Please enter Engineer's name...",

    },
    {
        type: "input",
        name: "Id",
        message: "Please enter Engineer's Id...",

    },
    {
        type: "input",
        name: "Email",
        message: "Please enter Engineer's Email ID...",

    },

    {
        type: "input",
        name: "gitHub",
        message: "Please enter Engineer's GitHub id...",

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
        when: function(answers){
            return answers.continueBuild;
        }
    }
];

const quesIntern = [
    {
        type: "input",
        name: "Name",
        message: "Please enter intern's name...",
    
    },
    {
      type: "input",
      name: "Id",
      message: "Please enter intern's Id...",
  
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter intern's Email ID...",
    
    },

    {
        type: "input",
        name: "School",
        message: "Please enter Intern's School Name...",
    
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
        when: function(answers){
            return answers.continueBuild;
        }
    }
];


module.exports = {
    quesManager: quesManager,
    quesIntern: quesIntern,
    quesEngineer: quesEngineer
};