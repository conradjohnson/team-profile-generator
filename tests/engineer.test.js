const Engineer = require("../lib/engineer");

describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and github property when called with the 'new' keyword and values supplies for 'name, id, email, github'", ()=>{
            const eng = new Engineer("ENG", "james", "1234", "james@gmail.com", "conradj");

            expect(eng.name).toBe("james");
            expect(eng.id).toBe("1234");
            expect(eng.email).toBe("james@gmail.com");
            expect(eng.github).toBe("conradj")

        });
    });
    
    describe("Engineer Methods - getName", ()=>{
        it("should return engineer name", ()=>{
            const engName = new Engineer("ENG", "jimmy", "4321", "gerry@gerrymail.com", "jefer").getName();
            expect(engName).toBe("jimmy");
        });
    });
    describe("Engineer Methods - getId", ()=>{
        it("should return engineer id", ()=>{
            const engId = new Engineer("ENG", "jimmy", "12132", "gerry@gerrymail.com", "jefer").getId();
            expect(engId).toBe("12132");
        });
    });
    describe("Engineer Methods - getEmail", ()=>{
        it("should return engineer's email", ()=>{
            const engEmail = new Engineer("ENG", "jimmy", "12132", "gerry!@gerrymail.com", "jefer").getEmail();
            expect(engEmail).toBe("gerry!@gerrymail.com");
        });
    });
    describe("Engineer Methods - getGithub", ()=>{
        it("should return engineer's github account", ()=>{
            const engGithub = new Engineer("ENG", "jimmy", "12132", "gerry!@gerrymail.com", "jefer").getGithub();
            expect(engGithub).toBe("jefer");
        });
    });
    describe("Engineer Methods - getRole", ()=>{
        it("should return 'Engineer'", ()=>{
            const engRole = new Engineer("ENG", "jimmy", "12132", "gerry!@gerrymail.com", "jefer").getRole();
            expect(engRole).toBe("Engineer");
        });
    });
});