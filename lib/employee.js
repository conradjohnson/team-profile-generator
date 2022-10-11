
class Employee {
    constructor(type, name, id, email){
        this.type = type;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee;
