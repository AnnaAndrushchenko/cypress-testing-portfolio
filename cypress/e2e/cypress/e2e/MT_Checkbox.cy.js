describe('Checkbox Test Suit', () => {
    it('Choose three checkboxes', () => {

       cy.visit('http://shop.bugred.ru/shop/4')
       cy.get('input[name="colors[]"]').should('be.visible')
       cy.get('input.colors[value="1"]').check().should('be.checked')
       cy.get('input.colors[value="2"]').check().should('be.checked')
       cy.get('input.colors[value="3"]').check().should('be.checked')

    })

    it('Choose one checkboxes', () => {

        cy.visit('http://shop.bugred.ru/shop/4')
        cy.get('input[name="colors[]"]').should('be.visible')
        cy.get('input.colors[value="7"]').check().should('be.checked')
        
 
     })

     it.only('Choose and unchoose all checkboxes', () => {

        cy.visit('http://shop.bugred.ru/shop/4')
        cy.get('input[name="colors[]"]').check().should('be.checked')
        cy.get('input[name="colors[]"]').uncheck().should('not.be.checked')
        
 
     })
})