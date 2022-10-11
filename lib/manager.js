const Employee = require('./employee');

class Manager extends Employee {
    constructor(type, name, id, email, office){
        super(type, name, id, email);
        this.office = office;
     }
    
    getOffice(){
        return this.office;
    }

}

Manager.prototype.getRole = ()=>{
    return "Manager";
}

module.exports = Manager;