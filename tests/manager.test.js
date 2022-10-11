const Manager = require("../lib/manager");

describe("Manager", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing a name, id, email and office num property when called with the 'new' keyword and values supplies for 'name, id, email, office number'", ()=>{
            const mgr = new Manager("MGR", "james", "1234", "james@gmail.com", "1");

            expect(mgr.name).toBe("james");
            expect(mgr.id).toBe("1234");
            expect(mgr.email).toBe("james@gmail.com");
            expect(mgr.office).toBe("1");

        });
    });
    
    describe("Manager Methods - getName", ()=>{
        it("should return Manager name", ()=>{
            const mgrName = new Manager("MGR", "jimManager", "54545", "boss@coemail.com", "1").getName();
            expect(mgrName).toBe("jimManager");
        });
    });
    describe("Manager Methods - getId", ()=>{
        it("should return manager id", ()=>{
            const mgrId = new Manager("MGR", "jimManager", "54545", "boss@coemail.com", "1").getId();
            expect(mgrId).toBe("54545");
        });
    });
    describe("Manager Methods - getEmail", ()=>{
        it("should return an managers's email", ()=>{
            const mgrEmail = new Manager("MGR", "jimManager", "54545", "boss@coemail.com", "1").getEmail();
            expect(mgrEmail).toBe("boss@coemail.com");
        });
    });
    describe("Manager Methods - getOffice", ()=>{
        it("should return an managers's office number", ()=>{
            const mgrOffice = new Manager("MGR", "jimManager", "54545", "boss@coemail.com", "1").getOffice();
            expect(mgrOffice).toBe("1");
        });
    });
    describe("Manager Methods - getRole", ()=>{
        it("should return 'Manager'", ()=>{
            const mgrRole = new Manager("MGR", "jimManager", "54545", "boss@coemail.com", "1").getRole();
            expect(mgrRole).toBe("Manager");
        });
    });
});