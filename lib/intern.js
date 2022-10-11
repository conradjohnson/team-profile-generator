const Employee = require('./employee');

class Intern extends Employee {
    constructor(type, name, id, email, school){
        super(type, name, id, email);
        this.school = school;
     }
    
    getSchool(){
        return this.school;
    }

}

Intern.prototype.getRole = ()=>{
    return "Intern";
}

module.exports = Intern;