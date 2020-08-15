// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
    super(name, id, email);
    this.officeNumber = office;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber(office) {
        if (office == "test") {
            return console.log("You did correct!");
        }
        else {
            return false;
        }
    }
       
}




module.exports = Manager;