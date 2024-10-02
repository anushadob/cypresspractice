describe('verify drag and drop functionality of a card', () => {
    
  /*beforeEach(function () {
    cy.session("Login Session", () => {
      cy.visit('https://trello.com/')
      cy.contains("Log in").click()
      cy.origin('https://id.atlassian.com/', () => {
        cy.get('input[type="email"]').type("anushapasupuleti1310@gmail.com")
        cy.get('#login-submit').click()
        cy.get('#password').type('M@hesh1227')
        cy.get('#login-submit').click()

      })
    })
  })*/
    it('Verify Drag and Drop Functionality', () => {
 
     // cy.visit('https://trello.com/')
     cy.visit('https://trello.com/')
      cy.contains("Log in").click()
      cy.origin('https://id.atlassian.com/', () => {
        cy.get('input[type="email"]').type("anushapasupuleti1310@gmail.com")
        cy.get('#login-submit').click()
        cy.get('#password').type('M@hesh1227')
        cy.get('#login-submit').click()

      })


      //cy.get('a[class="Buttonsstyles__Button-sc-1jwidxo-0 Buttonsstyles__PrimaryButtonDark-sc-1jwidxo-2 kTwZBr gKpjtP"]').should("be.visible").click()
      cy.get('span[data-vc="icon-AddIcon"]').click()
      cy.get('button[class="gJDsPins_eYkBM"]').first().click()
      cy.get('input[type="text"]').type("New Board")
      cy.get('button[data-testid="create-board-submit-button"]').click()
      //cy.contains("Add a list").click()
      cy.get('textarea[placeholder="Enter list name…"]').type('List A').type('{enter}')
      cy.get('textarea[placeholder="Enter list name…"]').type('List B').type('{enter}')
      cy.get('button[data-testid="list-add-card-button"]').first().click()
      cy.get('textarea[data-testid="list-card-composer-textarea"]').type("Test Card")
      cy.contains("Add a card").click()
      //let x = cy.get('textarea[data-testid="list-name-textarea"]').eq(1)
      //cy.get('a[data-testid="card-name"]').eq(0).drag(('textarea[data-testid="list-name-textarea"]'))
      cy.get('#board>li:nth-child(1)>div>ol>li').drag(['#board>li:nth-child(2)'])


    })
  })