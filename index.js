// import inquirer (after npm init -y and npm install inquirer)
const inquirer = require('inquirer');

// import console.table for use to display tables
const cTable = require('console.table');

// import db from connection.js to allow for querys
const db = require('./db/connection');

// creates an array full of options for users first selection
const startingOptions = ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'];

// add functions to call depending on user response from inquirer
const viewDepartment = () => {
    // function to display table with formatted names and ids from department
    console.log("viewing department");
};

const viewRoles = () => {
    // function to display table with job title, role id, department role belongs to, and salary
    console.log("viewing role");
};

const viewEmployees = () => {
    // function to display table with employee ids, first/last names, job title, department, salary, and managers
    console.log("viewing employee");
};

const addDepartment = () => {
    // function to prompt for name of department then department is added to database
    console.log("adding department");
};

const addRole = () => {
    // function to prompt for name, salary, and department then role added to database
    console.log("adding role");
};

const addEmployee = () => {
    // function to prompt for employee first/last name, role, and manager then employee added to database
    console.log("adding employee");
};

const updateEmployeeRole = () => {
    // function to select an employee to update and prompt for new role, info updated in database
    console.log("updating employee role");
};

// run inquirer to prompt user for first selection
const firstPromtUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'firstSelection',
            message: "What would you like to do?",
            choices: startingOptions
        }
    ]);
};

// calling function at beginning of application
firstPromtUser().then((answer) => {
    // deconstructing the answer to show the firstSelection from user
    const {firstSelection} = answer;
    console.log(firstSelection);
    // using a switch case to call the correct function for next steps
    switch(firstSelection) {
        case startingOptions[0]: viewDepartment();
        break;

        case startingOptions[1]: viewRoles();
        break;

        case startingOptions[2]: viewEmployees();
        break;

        case startingOptions[3]: addDepartment();
        break;

        case startingOptions[4]: addRole();
        break;

        case startingOptions[5]: addEmployee();
        break;

        case startingOptions[6]: updateEmployeeRole();
        break;

        // if selection does not include one of the 6 preselected outcomes, run default
        default: console.log("Please select an option to continue");
        firstPromtUser();
        break;
    }
});