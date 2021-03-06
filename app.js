// const Employee = require("./lib/Employee"); /// 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// const { get } = require("http"); /// 

/// USE THIS TO VALIDATE EMAIL
const validateEmail = value => {
    if (value.includes("@") === true && value.includes(".") === true ) { /// check difference between .includes and .match
        return true;
    }
    
    else {
        return "Please write a proper e-mail adress.";
    }
}

/// USE THIS TO VALIDATE ID NUMBER FOR MANAGER
const validateIdFirst = value => {
    let input = value.toString();
    const numb = /[0-9]/g;
    const letter = /[A-z ]/g;
    if (numb.test(input) === true && letter.test(input) === false) {
        if (input <= 100) {
            return true;
        }
        else {
            return "ID cannot be greater than 100.";
        }
    }

    else {
        return "Wrong entry. only number can be entered.";
    }
}

/// USE THIS TO VALIDATE ID NUMBER FOR ENGINEER AND INTERN
const validateIdLater = value => {
    let input = value.toString();
    const numb = /[0-9]/g;
    const letter = /[A-z ]/g;
    if (numb.test(input) === true && letter.test(input) === false) {
        if (idArr.includes(value) === false) {
            if (input <= 100) {
                return true;
            }
            else {
                return "ID cannot be greater than 100.";
            }
        }
        else {
            return "This ID is assigned already, please re-asign ID.";
        }
    }

    else {
        return "Wrong entry. only number can be entered.";
    }
}

/// TEAM AND ID ARRAY
const teamArr = [];
const idArr = [];

/// INITIALIZE FUNCTION
const init = () => {
    console.log("Welcome to Team Profile Generator")
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
                name: "id",
                default: "Please assign from 1-100",
                validate: validateIdFirst
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "email",
                validate: validateEmail
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "office"
            }
        ])
        .then(value => {
            const newManager = new Manager(value.name, value.id, value.email, value.office);
            teamArr.push(newManager);
            idArr.push(value.id);
            askAddRole();
        })
}

/// ASKING USERS TO IF USER WANTS TO ADD ROLE OR PRINT OUT THE TEAM
const askAddRole = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "No, I do not want to add any team members."],
                name: "addrole"
            }
        ])
        // .then(function (value) {
        .then(value => {
            const role = value.addrole;
            switch(role) {
                case "Engineer":
                    askEngineer();
                    break;
                case "Intern":
                    askIntern();
                    break;
                default:
                    renderLast();
                    break;
            }
        })
}

/// ASKING ENGINEER INFO IF ENGINEER IS PICKED
const askEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your engineer's id?",
                name: "id",
                default: "Please assign from 1-100",
                validate: validateIdLater
            },
            {
                type: "input",
                message: "What is your engineer's email?",
                name: "email",
                validate: validateEmail
            },
            {
                type: "input",
                message: "What is your engineer's Github username?",
                name: "github"
            }
        ])
        .then(value => {
            const newEngineer = new Engineer(value.name, value.id, value.email, value.github);
            teamArr.push(newEngineer);
            idArr.push(value.id);
            askAddRole();
        })
}

/// ASKING INTERN INFO IF INTERN IS PICKED
const askIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your intern's id?",
                name: "id",
                default: "Please assign from 1-100",
                validate: validateIdLater
            },
            {
                type: "input",
                message: "What is your intern's email?",
                name: "email",
                validate: validateEmail
            },
            {
                type: "input",
                message: "What is your intern's graduated school?",
                name: "school"
            }
        ])
        .then(value => {
            const newIntern = new Intern(value.name, value.id, value.email, value.school);
            teamArr.push(newIntern);
            idArr.push(value.id);
            askAddRole();
        })
}

/// RENDERING USERS INPUT INTO HTML PAGE
const renderLast = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } 
    
    fs.writeFile(outputPath, render(teamArr), function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Successfully created the Team Profile Page.");
}

/// STARTING APP
init();

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
