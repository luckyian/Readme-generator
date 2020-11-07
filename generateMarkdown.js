// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  !["License"](${data.licenseBadge})

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
