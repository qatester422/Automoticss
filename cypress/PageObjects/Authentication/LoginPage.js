const locators = require('../../PageObjects/Authentication/Login.json');
export default class LoginTests{
    Visit(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/login")
    }
    Login(email, password){
        cy.xpath(locators.loginLocators.email).type(email)
        cy.xpath(locators.loginLocators.password).type(password)
        cy.xpath(locators.loginLocators.submitButton).click()
        if (email === "stevenavila@example.com" && password === "Automotics123") {
            cy.url().should('eq', 'https://automotics-kcuppens-projects.vercel.app/');
        } else {
            cy.url().should('eq', 'https://automotics-kcuppens-projects.vercel.app/login');
        }
    }
}