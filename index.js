var inquirer = require("inquirer");
var fs = require("fs");
let generateMD = require("./generateMarkdown.js")

// array of questions for user
const questions = ["What is your gitHub user name?", "What is your email address?", "What is the title of your project?", "Please describe your project:", "Please describe installation procedures:",
    "Please enter usage instructions:", "Any contribution guidelines?", "Please list any test instructions", "Please choose a license"

];


// function to initialize program
function init() {




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
                type: "list",
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
        ]).then(function (data) {
            
            console.log(data);
            let userdata = { ...data };
            userdata.licenseBadge = "";
            console.log(userdata);
            
            console.log(userdata.license);

            
           
            function licenseIcon(license) { 
                if (license === "MIT") {
                   return userdata.licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
                }
                else if (license === "GNU GPLv3") {
                   return userdata.licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
                }
                else if (license === "Mozilla PL 2.0") {
                    userdata.licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
                }
                else if (license === "Apache 2.0") {
                    userdata.licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
                }
                else if (license === "Boost Software 1.0") {
                    userdata.licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
                }
                else if (license === "Unlicense/Other") {
                    userdata.licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
                }
            
            }
           
            licenseIcon(userdata.license);
            

            


            fs.writeFile("README.md", generateMD(userdata), function (err) {

                if (err) {

                    return console.log(err);
                }

                console.log("Success!");





            });


        });


};

// function call to initialize program
init();
