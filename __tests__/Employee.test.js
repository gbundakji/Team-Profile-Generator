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
        const result = new Employee().name(str);
        expect(result).toEqual(names);
    });
});

describe("Id", () => {
    it("should get employee id", () => {
        const str = 100;
        const result = new Employee().iD("Han Solo", 1, str);
        expect(result).toEqual(iD);
    });
});

describe("Email", () => {
    it("should get employee email", () => {
        const str = "email@address.com";
        const result = new Employee().email("Han Solo", 1, str);
        expect(result).toEqual(email);
    });
});

describe("getName()", () => {
    it("should get employee name", () => {
        const str = "Princess Leia";
        const result = new Employee().getName(str);
        expect(result.getName()).toEqual(str);
    });
});

describe("getId()", () => {
    it("should get employee id", () => {
        const str = 100;
        const result = new Employee().getId("Han Solo", str);
        expect(result.getId()).toEqual(str);
    });
});

describe("getEmail()", () => {
    it("should get employee email", () => {
        const str = "email@address.com";
        const result = new Employee().getEmail("Han Solo", 1, str);
        expect(result.getEmail()).toEqual(str);
    });
});

describe("getRole()", () => {
    it("should get employee role", () => {
        const str = "Employee";
        const result = new Employee().getRole("Princess Leia", 1, "email@address.com", "Employee");
        expect(result.getRole()).toEqual(str);
    });
});





