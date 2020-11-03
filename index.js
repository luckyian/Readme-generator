var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = ["What is your gitHub user name?", "What is your email address?", "What is the title of your project?", "Please describe your project:", "Please describe installation procedures:",
    "Please enter usage instructions:", "Any contribution guidelines?", "Please list any test instructions", "Please choose a license"

];



inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "username"
        },
        {
            type: "input",
            message: questions[1],
            name: "email"
        },

        {
            type: "input",
            message: questions[2],
            name: "title"
        },


        {
            type: "input",
            message: questions[3],
            name: "description"
        },

        {
            type: "input",
            message: questions[4],
            name: "install"
        },

        {
            type: "input",
            message: questions[5],
            name: "usage"
        },

        {
            type: "input",
            message: questions[6],
            name: "contribution"
        },

        {
            type: "input",
            message: questions[7],
            name: "test"
        },
        
        {
            type: "checkbox",
            message: questions[8],
            name: "license",
            choices: [
              "MIT", 
              "GNU GPLv3", 
              "Mozilla PL 2.0", 
              "Apache 2.0",
              "Boost Software 1.0",
              "Unlicense/Other"

            ]
          }
    ]).then(function(data) {
        var readMedata = data.name.toLowerCase().split(' ').join('') + ".json";

        fs.writeFile(readMedata, JSON.stringify(data, null, '\t'), function(err) {
      
          if (err) {
            return console.log(err);
          }
      
          console.log("Success!");
      


        // function to write README file
       
    function writeToFile(response, data) {
    }

    });



// function to initialize program
function init() {

}

// function call to initialize program
init();
