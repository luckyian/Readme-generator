var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = ["What is your gitHub user name?", "What is your email address?", "What is the title of your project?", "Please describe your project:", "Please describe installation procedures:",
    "Please enter usage instructions:", "Any contribution guidelines?", "Please list any test instructions"

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
        }]).then(function (response) {
            


        // function to write README file
        function writeToFile(response.title, data) {
        }
    });



// function to initialize program
function init() {

}

// function call to initialize program
init();
