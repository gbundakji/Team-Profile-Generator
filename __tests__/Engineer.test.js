const Engineer = require("../lib/Engineer");

describe("GitHuib", () => {
    it("should return GitHub username", () => {
        const str = "rebelscum";
        const result = new Engineer("Han Solo", 1, "email@address.com", str, "Engineer");
        expect(result).toEqual(GitHub);
    });
});

describe("getRole()", () => {
    it("should return employee role", () =>{
        const str = "Engineer";
        const result = new Engineer("Han Solo", 1, "email@address.com", "rebelscum", "Engineer");
        expect(result.getRole()).toEqual(str);
    });
});

describe("getGitHub()", () => {
    it("should return employee role", () =>{
        const str = "rebelscum";
        const result = new Engineer("Han Solo", 1, "email@address.com", str, "Engineer");
        expect(result.getGithub()).toEqual(str);
    });
});
