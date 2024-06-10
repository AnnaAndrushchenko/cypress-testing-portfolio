describe('Verify Radiobutton', () => {

    it('Check one radiobutton',() => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get('#impressiveRadio').check({force: true}).should('be.checked')
        cy.get('.mt-3>.text-success').contains('Impressive')
    })

    it('Toggle radio button',() => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get('#impressiveRadio').check({force: true}).should('be.checked')
        cy.get('.mt-3>.text-success').contains('Impressive')
        cy.get('#yesRadio').check({force: true}).should('be.checked')
        cy.get('.mt-3>.text-success').contains('Yes')
    })
})