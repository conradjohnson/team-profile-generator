const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern')



// Arrays of questions for user input to pass to inquirer object

// Manager Questions for inquirer instance
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
        message: 'Manager Office Num: ',
        name: 'office',
    }
]

// Engineer Questions for inquirer instance
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

//Intern Questions for inquirer instance
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

// Continue loop question.  Get employee type value if continuing, otherwise signal that we're done.
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

// append last continue question to each question set.
questionsMgr.push(questionsCont);
questionsEng.push(questionsCont);
questionsInt.push(questionsCont);

// Employee function object construction.
function Employee (type, name, id, email){
    this.type = type;
    this.name = name;
    this.id = id;
    this.email = email;
}

// prompt user for employee data. 
// initial call should be 'MGR'
// recursive call appends previous array of objects to each call
// when done, recursive return the array of objects from prompts
const getAnswers = async(employeeType, employees = [])=> {
    let questions = [];
    let answers = [];
    switch(employeeType){
        case 'MGR': 
            questions = questionsMgr;
            break;
        case 'ENG':
            questions = questionsEng;
            break;
        case 'INT':
            questions = questionsInt;
            break;
        default:
            done = true;
            break;
    }
    // prompt the user for employee data and optional 'add another employee'
    // and wait for the result
    answers = await inquirer.prompt(questions);

    // add employee type
    answers.type = employeeType;

    // append the answers to the previous cycle's inputs
    employees.push(answers);
    
    // if we're not done, then recursive call to the function again
    if (answers.nextemp !== 'done'){
        return getAnswers(answers.nextemp, employees);
    } 
    // else, we're done, return the whole lot.
    else{
        return  employees;
    }

}


// A function to generate HTML for Team Page
const htmlGenerator = async (data) => {

    // parse our inquirer prompt input and store in employees object array
    let employees = [];
    for (let i=0; i<data.length; i++){
        employees[i] = new Employee(data[i].type, data[i].name, data[i].id, data[i].email);
        switch (data[i].type) {
            case 'MGR':
                employees[i] = new Manager(data[i].type, data[i].name, data[i].id, data[i].email, data[i].office)
                break;
            case 'ENG':
                employees[i] = new Engineer(data[i].type, data[i].name, data[i].id, data[i].email, data[i].gituser)    
                break;
            case 'INT':
                employees[i] = new Intern(data[i].type, data[i].name, data[i].id, data[i].email, data[i].school)
                break;
            default:
                break;
        }
    }

    // html string helper functions getHeader and getFooter
    //   to dynamically build the header and contact footer
    //   based on employee type
    function getCardHeader(type, name){
        let returnString = ""
        switch(type){
            case 'MGR':
                returnString = `<img class="" src="img/coffee.gif" style="max-height:30px;" alt="Drinking Coffee"/> <span class="font-weight-bold h5" >Manager</span>`;
                break;
            case 'ENG':
                returnString = `<img class="" src="img/glasses.png" style="max-height:30px; " alt="Total NERD!"/> <span class="font-weight-bold h5" >Engineer</span>`;
                break;
            case 'INT':
                returnString = `<img class="" src="img/student.png" style="max-height:30px; " alt="Intern Student"/> <span class="font-weight-bold h5" >Intern</span>`;
                break;
        }
        returnString += `<h4 class="card-title">${name}</h4>`;
        return returnString;
    }

    
    function getCardFooter(type, obj){
        let returnString = ""
        switch(type){
            case 'MGR':
                returnString = `<p class="card-text">Office: <span class="font-weight-bold">${obj.office}</span></p>`;
                break;
            case 'ENG':
                returnString = `<p class="card-text">Github: <span class="font-weight-bold"> <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></span></p>`;
                break;
            case 'INT':
                returnString = `<p class="card-text">School: <span class="font-weight-bold">${obj.school}</span></p>`;
                break;
        }
        return returnString;
    }

    //lets build that html string
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
    
    // loop through the employees array object and output a card for each.
    for (let i=0; i<employees.length; i++){
        htmlString += `<div class="card col-lg-2 col-md-6 col-sm-6 m-2 p-0" style="min-width:300px;">
        <div class="card-body border border-info">
            <div class="mb-2 bg-light">
                ${getCardHeader(employees[i].type, employees[i].name)}
            </div>
            <p class="card-text">Employee ID: <span class="font-weight-bold"> ${employees[i].id}</span></p>
            <p class="card-text">Email: <span class="font-weight-bold"> <a href="mailto:${employees[i].email}" target="_blank">${employees[i].email}</a></span></p>
            ${getCardFooter(employees[i].type, employees[i])}
        </div>
    </div>`;
    }

    //add the footer
    htmlString+= `
    </section>
    </main>
    <footer class="text-center text-lg-start bg-light text-muted navbar fixed-bottom" style="background-color: rgba(0, 0, 0, 0.05);">
        <p style="align-items:center;width:100%;"> ?? 2022 Copyright - GO team!</p>
    </footer>
    </body>
    </html>
    `;

    // return the html string
    return htmlString;

    
}

// write to file to store the html string and generate an html doc.
const writeFile = async (data, filename) => {

    // set the directory 
    let fileDir = 'dist/';

    // append that to the filename
    fileName = fileDir + filename;

     // first clear out the old file
    fs.writeFile(fileName, '', ()=>{})
    
    // write our data to the cleared out file.
    fs.appendFile(fileName, data, (err) =>

    // Ternary operator to log an error or success.
    err ? console.error(err) : console.log('\x0A\x0AYour HTML Team Page team.html is ready in /dist directory!\x0A\x0A')
   );

    return true;
}


//export our functions
module.exports = {
    htmlGenerator,
    writeFile,
    getAnswers
  };