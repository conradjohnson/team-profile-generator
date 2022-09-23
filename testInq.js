const inquirer = require('inquirer');

const collectInputs = async (num, inputs = [] ) => {
    console.log(num);
  const prompts = [
    {
      type: 'input',
      name: 'inputValue',
      message: 'Enter some input: '
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another input? ',
      default: true
    }
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(5, newInputs) : newInputs;
};

const main = async () => {
  const inputs = await collectInputs(5, );
  console.log(inputs);
};

main();