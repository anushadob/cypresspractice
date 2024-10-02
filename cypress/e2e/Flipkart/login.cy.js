import data from "../../fixtures/flipkartdata/login.json"

describe('Verify Login Functionality',() => {
    it('Verifying Login Functionality with valid credentials',() => {
        cy.viewport(1920,1080)
        cy.visit('https://www.flipkart.com')
        cy.contains('Login').click()
        cy.get('div[class="Q+Pbkc col col-2-5 MEHv7B yo2bZi"]').should('be.visible')
        cy.get('input[class="r4vIwl BV+Dqf"]').type(data.username)
        cy.get('button[class="QqFHMw twnTnD _7Pd1Fp"]').click()
    })
})