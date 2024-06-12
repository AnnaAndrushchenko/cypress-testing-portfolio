describe('Search Products', () => {
    it('Verify Search', () => {
        cy.visit('https://www.nourish.ie/c/vegan-food/')
        cy.get('#mzSearchTerm').type('tofu')
        cy.get('.ac-prod-image:visible').should('have.length', 5)
    
            })
        })