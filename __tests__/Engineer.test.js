const Engineer = require("../lib/Engineer");

describe("GitHuib", () => {
    it("should return GitHub username", () => {
        const str = "GitHubUsername";
        const result = new Engineer().github("Han Solo", 1, "email@address.com", str, "Engineer");
        expect(result).toEqual(GitHub);
    });
});

describe("getRole()", () => {
    it("should return employee role", () =>{
        const str = "Engineer";
        const result = new Engineer().getRole("Han Solo", 1, "email@address.com", "GitHubUsername", "Engineer");
        expect(result.getRole()).toEqual(str);
    });
});

describe("getGitHub()", () => {
    it("should return employee role", () =>{
        const str = "GitHubUsername";
        const result = new Engineer().getGithub("Han Solo", 1, "email@address.com", str, "Engineer");
        expect(result.getGithub()).toEqual(str);
    });
});
