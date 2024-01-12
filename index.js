const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide a description the installation guidelines:',
      },  
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a description of your project usage:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose a licence:',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Provide a list of contributors if you have any:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Include a description of the tests that can be done on your project:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Include your git hub profile link:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide a short message for those who have questions:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Include your email address:',
      },



];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Generate markdown content using user input
      const markdownContent = generateMarkdown(answers);
      
      // Write the markdown content to README.md
      writeToFile('READMEtest.md', markdownContent);
      
      console.log('READMEtest.md successfully generated!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}

// function call to initialize program
init();
