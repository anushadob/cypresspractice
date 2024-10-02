import logindetails from "../../../cypressclasses/cypress/e2e/pageObjects/practice/internetherokuapplogin.po"
import logindata from "../../../cypressclasses/cypress/fixtures/theinternetherokuapp/login.json"
describe('verify login functionality', () => {
    beforeEach( () => {
        cy.visit('/login')
    })
    it('verify login with valid credentials', () => {
        
        cy.get(logindetails.usernameInput).type(logindata.username)
        cy.get(logindetails.passwordInput).type(logindata.password)
        cy.contains(logindetails.loginBtn()).click()
        cy.get(logindetails.loginSuccessMessage()).should("be.visible")
        cy.get(logindetails.logoutBtn()).should("be.visible")

    })
    
    it('verify login with invalid username', () => {
        cy.get(logindetails.usernameInput).type("lasigh")
        cy.get(logindetails.passwordInput).type(logindata.password)
        cy.contains(logindetails.loginBtn()).click()
        cy.get(logindetails.usernameErrorMessage()).should("be.visible")

    })

    it('verify login with invalid password', () => {
        cy.get(logindetails.usernameInput).type(logindata.username)
        cy.get(logindetails.passwordInput).type("grsdygiu")
        cy.contains(logindetails.loginBtn()).click()
        cy.get(logindetails.passwordErrorMessage()).should("be.visible")

    })

    it('verify login with invalid username and inavalid password', () => {
        cy.get(logindetails.usernameInput).type("lasigh")
        cy.get(logindetails.passwordInput).type("gdyt")
        cy.contains(logindetails.loginBtn()).click()
        cy.get(logindetails.usernameErrorMessage()).should("be.visible")

    })
})

