const Employee = require("../lib/employee");

describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id and email property when called with the 'new' keyword and values supplies for 'name, id and email'", ()=>{
            const emp = new Employee("EMP","james", "1234", "james@gmail.com");

            expect(emp.name).toBe("james");
            expect(emp.id).toBe("1234");
            expect(emp.email).toBe("james@gmail.com")

        });
    });
    
    describe("Employee Methods - getName", ()=>{
        it("should return employee name", ()=>{
            const empName = new Employee("EMP","jimmy", "4321", "gerry@gerrymail.com").getName();
            expect(empName).toBe("jimmy");
        });
    });
    describe("Employee Methods - getId", ()=>{
        it("should return employee id", ()=>{
            const empId = new Employee("EMP","jimmy", "12132", "gerry@gerrymail.com").getId();
            expect(empId).toBe("12132");
        });
    });
    describe("Employee Methods - getEmail", ()=>{
        it("should return employee email", ()=>{
            const empEmail = new Employee("EMP","jimmy", "12132", "gerry!@gerrymail.com").getEmail();
            expect(empEmail).toBe("gerry!@gerrymail.com");
        });
    });
    describe("Employee Methods - getRole", ()=>{
        it("should return 'Employee'", ()=>{
            const empRole = new Employee("EMP","jimmy", "12132", "gerry!@gerrymail.com").getRole();
            expect(empRole).toBe("Employee");
        });
    });
});