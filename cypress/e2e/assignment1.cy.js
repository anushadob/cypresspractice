describe('verify Add job Title functionality', () => {
    it('Adding Job title with valid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type("admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.get('a[href="/web/index.php/dashboard/index"]').should("be.visible")
      cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
      var n=141;
      var i=0;
      if(i<=n){
      for (i=0; i<10; i++){
      cy.get('i[class="oxd-icon bi-trash"]').eq(0).click()
      cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
      }
    }
    else{
      console.log("insuficient records")
    }
    }
)
}
    
)