const Intern = require("../lib/intern");

describe("Intern", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and school property when called with the 'new' keyword and values supplies for 'name, id, email, school'", ()=>{
            const intern = new Intern("INT", "james", "1234", "james@gmail.com", "UofV");

            expect(intern.name).toBe("james");
            expect(intern.id).toBe("1234");
            expect(intern.email).toBe("james@gmail.com");
            expect(intern.school).toBe("UofV");

        });
    });
    
    describe("Intern Methods - getName", ()=>{
        it("should return Intern name", ()=>{
            const intName = new Intern("INT", "jimmyIntern", "4321", "gerry@gerrymail.com", "UofV").getName();
            expect(intName).toBe("jimmyIntern");
        });
    });
    describe("Intern Methods - getId", ()=>{
        it("should return intern id", ()=>{
            const intId = new Intern("INT", "jimmy", "12132", "gerry@gerrymail.com", "UofV").getId();
            expect(intId).toBe("12132");
        });
    });
    describe("Intern Methods - getEmail", ()=>{
        it("should return an intern's email", ()=>{
            const intEmail = new Intern("INT", "jimmy", "12132", "gerry!@gerrymail.com", "UofV").getEmail();
            expect(intEmail).toBe("gerry!@gerrymail.com");
        });
    });
    describe("Intern Methods - getRole", ()=>{
        it("should return 'Intern'", ()=>{
            const intRole = new Intern("INT", "jimmy", "12132", "gerry!@gerrymail.com", "UofV").getRole();
            expect(intRole).toBe("Intern");
        });
    });
});