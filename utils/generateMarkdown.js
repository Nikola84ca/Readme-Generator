// function to generate markdown for README
function generateMarkdown(data) {
  return `
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
This project is licensed under the ${data.license} license.

## Contributing
${data.credits}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
