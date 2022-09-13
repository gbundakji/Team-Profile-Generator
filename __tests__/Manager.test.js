const Manager = require("../lib/Manager");

describe("officeNumber", () => {
    it("should return the employee's office number", () => {
        const str = 100;
        const result = new Manager("Han Solo", 1, "email@address.com", str, "Manager");
        expect(result).toEqual(str);
    });
});

describe("getRole()", () => {
    it("should return employee role", () => {
        const str = "Manager";
        const result = new Manager("Han Solo", 1, "email@address.com", 100, "Manager");
        expect(result.getRole()).toEqual(str);
    });
});

describe("getOffice()", () => {
    it("should get employee's office number", () => {
        const str = 100;
        const result = new Manager("Han Solo", 1, "email@address.com", str, "Manager");
        expect(result.getOffice()).toEqual(str);
    });
});