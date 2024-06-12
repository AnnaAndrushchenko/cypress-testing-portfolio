describe('Scroll Checking', () => {
    it('Check Scroll',()=> {
        cy.visit('https://www.amazon.ae/')
        cy.scrollTo("bottom")
        cy.wait(1000)
        cy.scrollTo("top")
        //cy.scrollTo(500, 300)
    })
})