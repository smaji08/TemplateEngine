const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Questions = require("./lib/questions");
const genHtml = require ("./lib/emptemp");

var newengineer =[];
var newintern =[];
var newmanager =[];
var engineerDetails={};
var internDetails ={};

function initiateTeam(){
    return new Promise(resolve => {
        resolve(inquirer.prompt(Questions.quesManager));
    });
}

function getEngineer(){
    return new Promise(resolve => {
        resolve(inquirer.prompt(Questions.quesEngineer));
    });
}

function getIntern(){
    return new Promise(resolve => {
        resolve(inquirer.prompt(Questions.quesIntern));
    });
}

async function init(){
    try{
        console.log("Lets build a team!!");
        const managerDetails = await initiateTeam();
        newmanager.push(new Manager(managerDetails.Name,managerDetails.Id, 
                                    managerDetails.Email,managerDetails.OfficeNum));
        
        var addrecords = true;
        while(addrecords){
            if (managerDetails.continueBuild === false){addrecords = false;}
            
            if (managerDetails.member === "Engineer" || engineerDetails.member === "Engineer" || internDetails.member === "Engineer"){
                await setEngineer();
                if(engineerDetails.continueBuild === false){
                    addrecords = false;
                }
            }

            if (managerDetails.member === "Intern" || engineerDetails.member === "Intern" || internDetails.member === "Intern"){
                await setIntern();
                if(internDetails.continueBuild === false){
                    addrecords = false;
                }
            }
        } 
        var combinedarray = newmanager.concat(newengineer,newintern);
        const html =  genHtml.generateHTML(combinedarray);
        await writeFile("./output/team.html",html);
    }
    catch(error){
        console.log(error);
    }
}

async function setEngineer(){
    engineerDetails = await getEngineer();
    newengineer.push(new Engineer(engineerDetails.Name, engineerDetails.Id,
                        engineerDetails.Email,engineerDetails.gitHub));

}

async function setIntern(){
    internDetails = await getIntern();
    newintern.push(new Intern(internDetails.Name, internDetails.Id,
                    internDetails.Email,internDetails.School));
}
init();