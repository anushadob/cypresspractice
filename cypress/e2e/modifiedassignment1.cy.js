describe('verify Add job Title functionality', () => {
    it('Adding Job title with valid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type("admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.get('a[href="/web/index.php/dashboard/index"]').should("be.visible")
      cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
      
      for (let j=0; j<10; j++){
        cy.contains("Add Employee").click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[placeholder="First Name"]').type("abcd"+r)
        let s = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[placeholder="Last Name"]').type("xyz"+s)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
        cy.get('div[class="orangehrm-edit-employee"]').should("be.visible")

      }


      for (let i=0; i<10; i++){
        cy.contains("Employee List").click()
      cy.get('i[class="oxd-icon bi-trash"]').eq(0).click()
      cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
      }
      
    }
)
}
    
)