const { htmlGenerator } = require('./utils/tools');
const { writeFile } = require('./utils/tools');
const { getAnswers } = require('./utils/tools');


const init = async () => {
    
    //prompt user for employee data answers
    const answers = await getAnswers("MGR");
    
    //generate html string
    const htmlString = await htmlGenerator(answers);
    
    //write HTML file
    const fileWritten = await writeFile(htmlString, "team.html");
    
    // finish program and return true or false confirmation.
    return fileWritten;
}

init();
