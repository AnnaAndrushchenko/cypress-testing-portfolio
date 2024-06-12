describe('Verify link for opening new tab', () => {
    it('Checking that the Home link will open in a new tab',() => {

        cy.visit('https://demoqa.com/links')
        cy.get('#simpleLink').invoke('removeAttr','target').click
        cy.url().should('include','https://demoqa.com/')
        cy.go('back')
    })
})



