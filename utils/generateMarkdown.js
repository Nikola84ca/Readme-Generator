// function to generate markdown for README
function generateMarkdown(data) {
  // First we declase the licenseBadge variable that will contain the selected license's badge url
  let licenseBadge;

  // Check the selected license and set the badge depending on the following links
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
