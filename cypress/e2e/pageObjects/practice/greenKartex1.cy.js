
describe('verify amount in functionality', () => {
    it('verify total of cart items', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.contains('ADD TO CART').eq(2).click()
        cy.contains('ADD TO CART').eq(12).click()
        cy.get('img[alt="Cart"]').click()
        cy.get('p[class="product-price"]').eq(4).should("be.visible")
        cy.get('p[class="product-price"]').eq(14).should("be.visible")

    })
})