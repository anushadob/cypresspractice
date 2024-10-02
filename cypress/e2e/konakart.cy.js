describe('verify drag and drop functionality of a card', () => {
    it('Verify Drag and Drop Functionality', () => {
        cy.visit('https://www.konakart.com/konakart/Welcome.action')
        cy.contains('Brands').realHover()
        cy.get('a[href="ShowSearchByManufacturerResultsByLink.action?manuId=17"]').click()
        
    })
})