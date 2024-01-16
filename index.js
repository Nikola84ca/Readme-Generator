const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user, they all are type input apart from the license that required a checkbox so that the user can choose among a set list of options
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
        type: 'checkbox',
        name: 'license',
        message: 'Choose a licence among the following:',
        choices: [
          'Apache 2.0',
          'CC0 1.0',
          'Eclipse Public License 1.0',
          'IBM Public License Version 1.0',
          'MIT',
          'Unlicense',
        ],
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

// This function simply writes the input data from the user into the README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize my program, first it shows the questions in the prompt and collects the answers, then passes the data to the generateMarkdown function. then the writeToFile function will  write the markdown and will show the success message if the file has been generate and correctly written.

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Generate markdown content using user input
      const markdownContent = generateMarkdown(answers);
      
      // Write the markdown content to README file. In this project I call it READMEtest since I don't want to override the README file of the actual project.
      writeToFile('READMEtest.md', markdownContent);
      
      console.log('READMEtest.md successfully generated!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}

// function call to initialize my program
init();
