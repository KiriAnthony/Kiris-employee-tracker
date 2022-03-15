// import inquirer (after npm init -y and npm install inquirer)
const inquirer = require('inquirer');

// import console.table for use to display tables
const cTable = require('console.table');

// creates an array full of options for users first selection
const startingOptions = ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'];

// add functions to call depending on user response from inquirer


// run inquirer to prompt user for first selection
const firstPromtUser = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'firstSelection',
            message: "What would you like to do?",
            choices: startingOptions
        }
    ]);
};

firstPromtUser().then(answer => console.log(answer));