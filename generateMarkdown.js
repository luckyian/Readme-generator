var fs = require("fs");
apache = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
boost = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
gPLv3  ="https://img.shields.io/badge/License-GPLv3-blue.svg";
mIT = "https://img.shields.io/badge/License-MIT-yellow.svg";
mozilla = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
unlicense = "https://img.shields.io/badge/license-Unlicense-blue.svg";

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title !["License"](license)}

  ## **Table of Contents**
  1. Descriction
  2. Installation
  3. Usage
  4. Contributing
  5. Tests
  6. Questions
  
  > ## **Description**
  ### ${data.description}
 
  > ## **Installation**
  ### ${data.install}
 
  > ## **Usage**
  ### ${data.usage}
  
  > ## **Contributing**
  ### ${data.contribution}
 
  > ## **Tests**
  ### ${data.test}

  ### *Questions?*
  #### Email contact: ${data.email}
  #### GitHub: ${[data.username]("https://github.com/" + data.username)}
   


  

`;
}

module.exports = generateMarkdown;
