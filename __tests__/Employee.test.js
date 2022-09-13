const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should instantiate Employee instance", () => {
        const result = new Employee();
        expect(result).toEqual(Employee);
    });
});

describe("Name", () => {
    it("should get employee name", () => {
        const str = "Princess Leia";
        const result = new Employee("email@address.com", 1, str, "Employee");
        expect(result).toEqual(str);
    });
});

describe("Id", () => {
    it("should get employee id", () => {
        const str = 100;
        const result = new Employee("email@address.com", str, "Han Solo", "Employee");
        expect(result).toEqual(str);
    });
});

describe("Email", () => {
    it("should get employee email", () => {
        const str = "email@address.com";
        const result = new Employee(str, 1, "Han Solo", "Employee");
        expect(result).toEqual(str);
    });
}); 

describe("getName()", () => {
    it("should get employee name", () => {
        const str = "Princess Leia";
        const result = new Employee(str);
        expect(result.getName()).toEqual(str);
    });
});

describe("getId()", () => {
    it("should get employee id", () => {
        const str = 100;
        const result = new Employee("Han Solo", str);
        expect(result.getId()).toEqual(str);
    });
});

describe("getEmail()", () => {
    it("should get employee email", () => {
        const str = "email@address.com";
        const result = new Employee("Han Solo", 1, str);
        expect(result.getEmail()).toEqual(str);
    });
});

describe("getRole()", () => {
    it("should get employee role", () => {
        const str = "Employee";
        const result = new Employee("Princess Leia", 1, "email@address.com", "Employee");
        expect(result.getRole()).toEqual(str);
    });
});





