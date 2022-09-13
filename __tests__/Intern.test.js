const Intern = require("../lib/Intern");

describe("school", () => {
    it("should return school", () => {
        const str = "UC";
        const result = new Intern("Han Solo", 1, "email@address.com", str, "Intern");
        expect(result.getSchool()).toEqual("UC");
    });
});

describe("getRole()", () => {
    it("should return employee role", () =>{
        const str = "Intern";
        const result = new Intern("Han Solo", 1, "email@address.com", "UCI", "Intern");
        expect(result.getRole()).toEqual(str);
    }); 
});

describe("getSchool()", () => {
    it("should return employee school", () =>{
        const str = "UC";
        const result = new Intern("Han Solo", 1, "email@address.com", str, "Intern");
        expect(result.getSchool()).toEqual(str);
    });
});