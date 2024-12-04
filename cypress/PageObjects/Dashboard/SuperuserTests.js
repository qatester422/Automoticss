import { cleanupStyles } from "cypress/mount-utils"

export default class DashboardPage {
    VisitDashboard(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/")
    }
    login(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/login")
        cy.get('#\\:r0\\:').type("stevenavila@example.com")
        cy.get("#\\:r1\\:").type("Automotics123")
        cy.get("button[type='submit']").click()
        cy.wait(5000)
        // cy.url().should('eq','https://automotics-kcuppens-projects.vercel.app/')
        cy.get('body').should('be.visible')
    }

    DashboardEndpoints(){
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.css-1capxqj').click()
        cy.url().should('include', '/?modalType=upload')
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.css-79elbk > .MuiBox-root > :nth-child(3)').click() 
        cy.url().should('include', '/repair')
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.MuiButtonBase-root.css-vnwzjq').click()
        cy.url().should('include', '/faultcode')
    }

    CreateClient() {
        cy.visit("https://automotics-kcuppens-projects.vercel.app/")
        cy.get('[href="/client"]').click() //client
        cy.xpath("//button[normalize-space()='Create New']").click()
        cy.xpath("//input[@class='MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq']").type("RandomUser")
        cy.xpath("//button[normalize-space()='Create client']").click()
        cy.url().should('eq', 'https://automotics-kcuppens-projects.vercel.app/client')
    }

    AssignClient() {
        cy.get("div[class='MuiDrawer-root MuiDrawer-docked css-1qs8ig6'] a:nth-child(1)").click()
        cy.get("div[class='MuiBox-root css-12127va'] button:nth-child(1)").click()
        cy.url().should('include', '/repair')
    }

    FaultcodeSolutions() {
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.css-vnwzjq').click()
        cy.url().should('include', '/faultcode')
    }

    SeeAllClients() {
        cy.get('[aria-label="Dashboard"]').click()
        cy.get(':nth-child(6) > .css-twfik > .MuiButtonBase-root').click()
        cy.url().should('include','/client')
    }

    SeeAllFaultcodeSolutions() {
        cy.get("div[class='MuiDrawer-root MuiDrawer-docked css-1qs8ig6'] a:nth-child(1)").click()
        cy.get(':nth-child(7) > .css-twfik > .MuiButtonBase-root').click()
        cy.url().should('eq', 'https://automotics-kcuppens-projects.vercel.app/faultcode')
    }

    SeeAllReports() {
        cy.get('[aria-label="Dashboard"]').click()
        cy.get(':nth-child(8) > .css-twfik > .MuiButtonBase-root').click() //locator issue
        cy.url().should('include', '/client')
    }
    

    // verifyEndpoints() {
        //     cy.request("GET", "/api/dashboard-endpoints").then((response) => {
        //         expect(response.status).to.eq(200);
        //         expect(response.body).to.have.property("success", true);
        //     });
        // }
}
