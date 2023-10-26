describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:8000')
      cy.get('#email').type('superadmin@gmail.com')
      cy.get('#password').type('superadmin')
      cy.get('.btn').click()
      cy.visit('http://localhost:8000/pages')
      cy.get('#homePage')
      
    })
  })