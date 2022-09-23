const fs = require('fs');

// A function to generate markdown for README
const htmlGenerator = async (data) => {
    function Employee (type, name, id, email){
        this.type = type;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    let employees = [];
    for (let i=0; i<data.length; i++){
        employees[i] = new Employee(data[i].type, data[i].name, data[i].id, data[i].email);
        switch (data[i].type) {
            case 'MGR':
                employees[i].phone = data[i].phone;
                break;
            case 'ENG':
                employees[i].gituser = data[i].gituser;
                break;
            case 'INT':
                employees[i].school = data[i].school;
                break;
            default:
                break;
        }
    }
    //html string helper functions
    function getHeader(type, name){
        let returnString = ""
        switch(type){
            case 'MGR':
                returnString = `<img class="" src="img/coffee.gif" style="max-height:30px;" alt="Drinking Coffee"/> <span class="font-weight-bold h5" >Manager</span>`;
                break;
            case 'ENG':
                returnString = `<img class="" src="../html/img/glasses.png" style="max-height:30px; " alt="Total NERD!"/> <span class="font-weight-bold h5" >Engineer</span>`;
                break;
            case 'INT':
                returnString = `<img class="" src="../html/img/student.png" style="max-height:30px; " alt="Intern Student"/> <span class="font-weight-bold h5" >Intern</span>`;
                break;
        }
        returnString += `<h4 class="card-title">${name}</h4>`;
        return returnString;
    }
    function getFooter(type, obj){
        let returnString = ""
        switch(type){
            case 'MGR':
                returnString = `<p class="card-text">Phone: <span class="font-weight-bold"><a href="tel:${obj.phone}">${obj.phone}</a></span></p>`;
                break;
            case 'ENG':
                returnString = `<p class="card-text">Github: <span class="font-weight-bold"> <a href="https://github.com/${obj.gituser}">${obj.gituser}</a></span></p>`;
                break;
            case 'INT':
                returnString = `<p class="card-text">School: <span class="font-weight-bold">${obj.school}</span></p>`;
                break;
        }
        return returnString;
    }
    let htmlString = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
</head>
<body>
    <main class="d-flex flex-wrap">
    <section class="jumbotron d-flex flex-column col-12 text-center" style="color:#FFF; background-image: linear-gradient(to right, rgb(62, 111, 192),rgb(38,19,94) );">
        <h1 class="title">Team Page</h1>
    </section>
    <section class="mx-auto row" style="">`;
    for (let i=0; i<employees.length; i++){
        htmlString += `<div class="card col-lg-2 col-md-6 col-sm-6 m-2 p-0" style="min-width:300px;">
        <div class="card-body border border-info">
            <div class="mb-2 bg-light">
                ${getHeader(employees[i].type, employees[i].name)}
            </div>
            <p class="card-text">Employee ID: <span class="font-weight-bold"> ${employees[i].id}</span></p>
            <p class="card-text">Email: <span class="font-weight-bold"> <a href="mailto:${employees[i].email}">${employees[i].email}</a></span></p>
            ${getFooter(employees[i].type, employees[i])}
        </div>
    </div>`;
    }
    htmlString+=`
    </section>
    </main>
    <footer class="text-center text-lg-start bg-light text-muted navbar fixed-bottom" style="background-color: rgba(0, 0, 0, 0.05);">
        <p style="align-items:center;width:100%;"> © 2022 Copyright - This team!</p>
    </footer>
 </body>
</html>
    `;

    return htmlString;

    
}

const writeFile = async (data, filename) => {
    let fileDir = 'html/';
    fileName = fileDir + filename;
     // first clear out the old file
    fs.writeFile(fileName, '', ()=>{})
    fs.appendFile(fileName, data, (err) =>
    // Ternary operator to log an error or success.
   err ? console.error(err) : console.log('\x0A\x0AYour HTML Team Page team.html is ready in /html directory!\x0A\x0A')
   );
    return true;
}


// Arrays of questions for user input to pass to inquirer object
// continue the loop question to be appended to all question object arrays for prompt.
const questionsCont = 

    {
        type: 'list',
        name: 'nextemp',
        message: 'Add another employee?',
        choices: [
            {value: 'ENG', name: "Engineer"},
            {value: 'INT', name: "Intern"},
            {value: 'done' , name: "Done"},
            
          ]
        ,
    }

// Manager Questions
const questionsMgr = [
    {
        type: 'input',
        message: 'Team Manager Name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Employee Email: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Manager Phone: ',
        name: 'phone',
    }
]

// Engineer Questions
const questionsEng = [
    {
        type: 'input',
        message: 'Engineer Name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Employee Email: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Github Username: ',
        name: 'gituser',
    }
];

//Intern Questions
const questionsInt = [
    {
        type: 'input',
        message: 'Intern Name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Employee Email: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Intern School: ',
        name: 'school',
    }
];
questionsMgr.push(questionsCont);
questionsEng.push(questionsCont);
questionsInt.push(questionsCont);





module.exports = {
    htmlGenerator,
    writeFile,
    questionsMgr,
    questionsEng,
    questionsInt
  };