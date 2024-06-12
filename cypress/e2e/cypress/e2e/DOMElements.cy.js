describe('DOM Elements', ()=> {
    it('Elements',()=> {

        cy.visit('https://naveenautomationlabs.com/opencart/')
        //cy.get('.col-lg-4 col-md-6 mb-4').first().click()
        //cy.get('.image').last().click()

        cy.get('.image').eq('2').click()
    })
})