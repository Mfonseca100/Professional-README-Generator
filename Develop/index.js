//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util"); 

const generatorMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install to run this app (ie...dependencies)?",
    name: "Installation"
}, {
    type: "input",
    message: "How is the app used? Give instructions.",
    name: "Usage"
}, {
    type: "list",
    message: "What license is being used?",
    name: "License",
    choices: ['MIT', 'Apache2.0', 'GPLv3', 'N/A']
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "What's your Github username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
},
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
} 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
    })
}

// Function call to initialize app
init();
