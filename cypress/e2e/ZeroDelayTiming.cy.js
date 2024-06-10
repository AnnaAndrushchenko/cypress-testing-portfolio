describe('Zero Delay Timing', () =>{
    it('Zero Delay', ()=> {
        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        cy.get('#user-message').type("Test Automation using Cypress")
         //cy.get('#user-message').type("Test Automation using Cypress", {delay:0})
        
    })
})