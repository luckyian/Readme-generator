// function to generate markdown for README
function generateMarkdown(data) {

  // Using data generated from inquirer in the index.js file, populates data based on user input
  return `# ${data.title} 
  !["${data.license}"](${data.licenseBadge})

  ## **Table of Contents**
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)
  
  > ## **Description**
  ### ${data.description}
 
  > ## **Installation**
  ### ${data.install}
 
  > ## **Usage**
  ### ${data.usage}

  > ## **License**
  ### You have choosen the ${data.license} license.  For further information on licenses please visit [Choose a License](https://choosealicense.com/)
  
  > ## **Contributing**
  ### ${data.contribution}
 
  > ## **Tests**
  ### ${data.test}

  > ### *Questions?*
   
  #### GitHub: [${data.username}](${"https://github.com/" + data.username}) 
  #### For further information and any questions feel free to contact at the following e-mail: ${data.email}
   


  

`;
}
// Allows file to be exported and used in index.js to create README file
module.exports = generateMarkdown;
