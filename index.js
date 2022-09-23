const inquirer = require('inquirer');
const { htmlGenerator } = require('./utils/tools');
const { writeFile } = require('./utils/tools');
const { questionsMgr } = require('./utils/tools');
const { questionsEng } = require('./utils/tools');
const { questionsInt } = require('./utils/tools');
const { resolve } = require('path');


const getAnswers = async(employeeType, inputs = [])=> {
    let questions = [];
    let done = false;
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
    // store current answers from generated prompt
    const {...answers} = await inquirer.prompt(questions);
    // add employee type
    answers.type = employeeType;
    // append the answers to the previous cycle's inputs
    inputs.push(answers);
    // if we're not done, then call the function again
    if (answers.nextemp !== 'done'){
        return getAnswers(answers.nextemp, inputs);
    } 
    // else, we're done, return the whole lot.
    else{
        return  inputs;
    }

}

const init = async () => {
    //const errorCallback = (message) => console.log(message);
    const answers = await getAnswers("MGR");
    console.log(JSON.stringify(answers));
    const htmlString = await htmlGenerator(answers);
    const fileWritten = await writeFile(htmlString, "team.html");
    return fileWritten;
}

init();
