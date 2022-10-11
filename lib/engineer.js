const Employee = require('./employee');

class Engineer extends Employee {
    constructor(type,name, id, email, github){
        super(type,name, id, email);
        this.github = github;
     }
    
    getGithub(){
        return this.github;
    }

}

Engineer.prototype.getRole = ()=>{
    return "Engineer";
}

module.exports = Engineer;