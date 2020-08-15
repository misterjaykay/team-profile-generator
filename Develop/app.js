const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { get } = require("http");

///// USE THIS TO VALIDATE EMAIL
// const validateEmail = value => {
//     if (value.includes("@") == true) {
//         // console.log(value.email);
//         return true;
//     }
//     return "Please write a proper e-mail adress.";
//     // return false;
// }

// const myManager = new Manager(data.name,data.id,data.email,data.office);

function askManager() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
            // validate: validateEmail
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "office"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "No, I do not want to add any team members."],
            name: "addrole"
        }
    ])
    .then(function(data){
    const newEmployee = new Employee(data.name, data.id, data.email,data.office);
    // const newManager = new Manager(data.office);
    console.log(newEmployee);
    Intern.prototype.getRole();
    
    });
}

askManager();


const managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
        // validate: validateEmail
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "office"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No, I do not want to add any team members."],
        name: "addrole"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
        // validate: validateEmail
    },
    {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No, I do not want to add any team members."],
        name: "addrole"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        // validate: validateEmail
    },
    {
        type: "input",
        message: "What is your intern's graduated school?",
        name: "github"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No, I do not want to add any team members."],
        name: "addrole"
    }
];

// function askQuestions() { 
//     inquirer
//     .prompt(managerQuestions)
//     .then(function(data) {
//         console.log(data);

//         // GIVE OUT DATAS LIKE THIS TO EACH ROLES
//         const myManager = new Manager(data.name, data.id, data.email, data.office);
//         console.log(myManager);
//         // myManager.getOfficeNumber(managerVal.office);
        
//         // if (managerVal.add = "Engineer") {
//         //     inquirer
//         //     .prompt(engineerQuestions)
//         //     .then(function(engineerVal) {
//         //         console.log(engineerVal);
//         //     })
//         // }
//         // else if (managerVal.add = "Intern") {
//         //     inquirer
//         //     .prompt(internQuestions)
//         //     .then(function(internVal) {
//         //         console.log(internVal);
//         //     })
//         // }
//         // else {
//         //     return console.log("Your input is done.")
//         // }
//     })
    
    
// }

// askQuestions();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
