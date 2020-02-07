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

            <style>

                .jumbotron {
                    background-size: cover;
                    background-color: navy;
                    color: white;
                    padding: 1em;
                    text-align: center;
                }

                .container-main {
                    max-width: 70%;
                    margin: 0 auto;
                }

                .grid-row {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-start;
                }

                .grid-item {
                    height: 450px;
                    flex-basis: 33.33%;
                    position: relative;
                    padding: 10px;
                    box-sizing: border-box;

                }

                .grid-item-content {
                    height: 100%;
                    width: 100%;
                    padding: 15px;
                    border-radius: 8px;
                    box-sizing: border-box;
                    flex-direction: column;
                    color: rgb(47, 5, 5);
                    display: flex;
                    background-color:rgb(207, 225, 231);
                    justify-content:space-between;
                    box-shadow: 4px 4px 5px 0 rgb(128, 142, 156);
                }


                h1, h2, h3 {
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                    letter-spacing: 1.2px;
                    text-align: center;
                    font-weight: bolder;
                }

                p {
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                    text-align: center;
                }

                .namedesig{
                    background-color: rgb(197, 172, 172);
                    height: 40%;
                    padding-top: 20px;
                }

                .container-inner{
                    background-color: whitesmoke;
                    padding-top: 40px;
                    height: 60%;
                }
                
                .container-inner2{
                    background-color: lightgrey;
                    border: 1px solid lightgrey; 
                    border-radius: 5px; 
                    box-shadow: 3px 3px 6px 0 rgba(0,0,0,0.2);
                }

                @media(max-width: 1200px) {
                    .grid-item {
                        flex-basis: 33.33%;
                    }
                }

                @media(max-width: 992px) {
                    .grid-item {
                        flex-basis: 33.33%;
                    }
                }

                @media(max-width: 768px) {
                    .grid-item {
                        flex-basis: 50%;
                    }
                }

                @media(max-width: 576px) {
                    .grid-item {
                        flex-basis: 100%;
                    }
                }
            </style>

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
            : role === "Engineer"? `Github Id: <a href="https://github.com/${emp.getGithub()}" target="_blank">${emp.getGithub()}</a>`
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