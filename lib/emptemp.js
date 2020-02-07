const Employee = require("./Employee");

function generateHTML(empArray){
    var bhtml = `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Building</title>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap" rel="stylesheet">
            <link href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="../lib/css/style.css"/>
           
        </head>

        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">My Team</h1>
                </div>
            </div>
            <div class="container container-main">
                <div class="grid-row">`

    function getIcons(emp){
        role = emp.getRole();
        return role === "Manager" ? `<i class="fas fa-mug-hot"></i>`
            : role === "Engineer"? `<i class="fas fa-glasses"></i>`
            : role === "Intern"  ? `<i class="fas fa-user-graduate"></i>`
            : "";
    }        
    function changepart(emp){
        role = emp.getRole();
        return role === "Manager" ? `Office Number: ${emp.getOfficeNumber()}`
            : role === "Engineer"? `GitHub: <a href="https://github.com/${emp.getGithub()}" target="_blank">${emp.getGithub()}</a>`
            : role === "Intern"  ? `School: ${emp.getSchool()}`
            : "";
    }

    function emptemplate(emp){
        return `
                <div class="grid-item">
                    <div class="grid-item-content">
                        <div class="namedesig">
                            <h2>${emp.getName()}</h2><br>
                            <h3>${getIcons(emp)}${emp.getRole()}</h3>
                        </div>
                        <div class="container container-inner" >
                            <div class="container container-inner2">
                                <p>ID: ${emp.getId()}</p><hr>
                                <p>Email: <a href="mailto:${emp.getEmail()}?subject=Congratulations!
                                &body= You are a selected few!!" target="_blank">${emp.getEmail()}</a></p><hr>
                                <p>${changepart(emp)}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }

    var ehtml = `</div></div></div></div></body></html>`;

    return `${bhtml}${empArray.map(emptemplate).join("")}${ehtml}`;
}


module.exports = {
    generateHTML: generateHTML,
};