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
        name: 'contentsTable',
        message: 'Provide the table of contents:',
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
        name: 'licence',
        message: 'Choose a licence:',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Provide a list of contributors if you have any:',
      },
      {
        type: 'input',
        name: 'githubprofile',
        message: 'Include your git hub profile link:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide a short message for those who have questions:',
      },
      {
        type: 'input',
        name: 'email address',
        message: 'Include your email address:',
      },



];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
