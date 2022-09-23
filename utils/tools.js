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
    let htmlString = "<html><body>";
    for (let i=0; i<employees.length; i++){
        htmlString += `<h2>${employees[i].name}</h2>`;
        htmlString += `<h3>${employees[i].type}</h3>`;
    }
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