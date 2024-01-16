# Readme File Generator

Project and development of a node.js application that will allow users to quickly create a README file through the prompt.


## About Me 
Born and raised in Italy, I moved to the UK in 2015. I have always been interested in new technologies and IT, as I studied IT in my A levels back in Italy. After 5 years working in content management for a website, I decided to make the step of learning Front-End Development thanks to the edX course, and on my gitHub profile I showcase not only my progress in Front-End Development as a student but also a journey that hopefully will lead to new exciting projects in this field.

## Usage

To use this app, simply follow the instructions in the Installation paragraph below, then lounch the prompt, go in the project directory where the index.js file is, and write the command:

```bash
node index.js
```
Once the program has been lounched just follow the instructions and input the data you want to include in your README file. Here is a gif animation of the step-by-step procedure to generate your README file:

![Gif animation of how to use the Password Generator website](/assets/Images/Work-Day-Scheduler.gif)

## Installation
First, make sure that Git and Git Bash are installed on your system. To download this project on your machine click [HERE](https://github.com/Nikola84ca/Readme-Generator) to go to the repository on GitHub. Click on the green CODE button, and copy the link of the repository. In your machine, open gitBash and create a new folder where you will clone the project using the command below:

```bash
Git mkdir your-project-folder
```
navigate inside the new folder, and clone the project files with the following comands

```bash
cd your-project-folder
Git clone url-copied-on-repository
git pull
```

Open your editor with the command

```bash
code .
```

alternatively download the zip file in GitHub after pressing the Code button, unzip it and copy it in your project folder. Navigate to the folder using the cd command on gitbash and lounch your editor as shown above with the "code . " command.

## App Description 

The README file generator app will run in the prompt of commands allowing users to quickly generate and complete their README file simply launching the index.js file and following the shown instruction, writing the project title, description, usage, process etc information that will be then ordered and written into the generated README file. This app will fasten up the process and will create a well formatted README file in the project folder.

## My Process

* The first thing that was required was to create an array of questions for the user. These questions, that will start once the user launches the index.js file in the prompt using node, will collect all the data necessary to create and write the generated README file. All the input in the array are type input apart from the license that required a checkbox so that the user can choose among a set list of options.

```JavaScript
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

//...other questions
];
```

* Then I created a function to writes the input data from the user into the README file

```JavaScript

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

```

* At this point I implemented the function generateMarkdown.js to generate the markdown for the README file. In the first part of the function I declared the variable licenseBadge that will contain the selected license's badge url. This first part of the function will then check the license selected by the user in the checklist in the prompt and set the badge depending on the relative link, I could have also used the map function but since I have a limited list of option I opted for a simple if/else.

```JavaScript
if (data.license.includes('Apache 2.0')) {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (data.license.includes('CC0 1.0')) {
    licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (data.license.includes('Eclipse Public License 1.0')) {
    licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (data.license.includes('IBM Public License Version 1.0')) {
    licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (data.license.includes('MIT')) {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data.license.includes('Unlicense')) {
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else {
    // Default to an empty string if the user doen't select any license
    licenseBadge = '';
  }
```

* Now that I have the correct link to the badge of the licence selected I have all the data necessary to complete the markdown. So I simply implemented each section of the README file with it's relative data from the prompt. Here is the code:

```JavaScript

# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}

## Contributing
${data.credits}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
```

* The last thing I did was actually the most important, I created the function init in the index.js file, this function is fundamental to initialize my program, first it shows the questions in the prompt and collects the answers, then passes the data to the generateMarkdown function. Then the writeToFile function will write the markdown and will show the success message if the file has been generate and correctly written.

```JavaScript
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Generate markdown content using user input
      const markdownContent = generateMarkdown(answers);
      
      // Write the markdown content to READMEtest file. In this project I call it READMEtest since I don't want to override the README file of the actual project.
      
      writeToFile('READMEtest.md', markdownContent);
      
      console.log('READMEtest.md successfully generated!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}


init();
```

## Credits

I would like to thank all the teachers and TA of the EdX bootcamp for all the content provided and study materials. I found the information needed to implement the checkbox in the [www.npmjs.com](https://www.npmjs.com/package/inquirer) website.

## Project Status and Upcoming Improvements

The app is functional and easy to launch and use, the user can easily create the README file and add all the descriptions and data needed. The next step will be to include pics and gif through a link and also create a web application with a nice html/css structure that will allow users to select the directory where they want to create their README file and follow the same procedure of the prompt commands to generate it.

## Collaborations and Contributions

I welcome all the brilliant coders out there to join me in this project. Join effort can result in a fundamental learning experience for a beginner coder like me, so feel free to reach out with tips and advice. If you want to contribute to this project, pull requests are welcome, but if you want to make major changes, please open an issue first so that we can discuss what you would like to change. You can contact me on my GitHub profile [HERE](https://github.com/Nikola84ca) and visit this project repository by clicking [HERE](https://github.com/Nikola84ca/Readme-Generator).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)