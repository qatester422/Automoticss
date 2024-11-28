import LoginTests from "../../PageObjects/Authentication/loginpage";

describe('Login Test', () => {
    it('Sucessful Login', () => {
        const obj=new LoginTests()
        obj.Visit()
        obj.Login("stevenavila@example.com","Automotics123")
    });
    it('Login Failed! Invalid Email', () => {
        const obj=new LoginTests()
        obj.Visit()
        obj.Login("stevenavila","Automotics123")
    });
    it('Login Failed! Invalid Password', () => {
        const obj=new LoginTests()
        obj.Visit()
        obj.Login("stevenavila@example.com","Automotics")
    });
})