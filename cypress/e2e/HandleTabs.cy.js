describe('Handle Tabs', () => {
    it('Handling Tabs', ()=> {
        cy.visit('https://the-internet.herokuapp.com/windows')//parent tab
        cy.get('.example>a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')//child tab

        cy.go('back')
    })
})