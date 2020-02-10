const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Questions = require("./lib/questions");
const genHtml = require ("./lib/emptemp");


var newemployee= [];
var engineerDetails={};
var internDetails ={};
var id = 0;


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

//On the assumption of a team having a 1 manager but as many as possible number of Engineers and Interns
//getting the manager details once and getting other employee details as many as needed
//and pushing all in one 'newemployee' array
async function init(){
    try{
        
        console.log("Lets build a team!!");
        const managerDetails = await initiateTeam();
        newemployee.push(new Manager(managerDetails.Name,++id, 
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
        
        //segrating first on basis of employee category and then combining all rolewise
        //which helps in printing each based on role.
        let sortedarrayM=[];
        let sortedarrayE=[];
        let sortedarrayI=[];
        newemployee.forEach(employee => {
            if (employee instanceof Manager){
                sortedarrayM.push(employee);
            }
            else if(employee instanceof Engineer){
                sortedarrayE.push(employee);
            }
            else{
                sortedarrayI.push(employee);
            }
        });
        let combinedarray = [...sortedarrayM,...sortedarrayE,...sortedarrayI];
        const html =  genHtml.generateHTML(combinedarray);
        await writeFile("./output/team.html",html);
        console.log("team.html generated");
    }
    catch(error){
        console.log(error);
    }
}

async function setEngineer(){
    engineerDetails = await getEngineer();
    newemployee.push(new Engineer(engineerDetails.Name, ++id,
                        engineerDetails.Email,engineerDetails.gitHub));

}

async function setIntern(){
    internDetails = await getIntern();
    newemployee.push(new Intern(internDetails.Name, ++id,
                    internDetails.Email,internDetails.School));
}
init();