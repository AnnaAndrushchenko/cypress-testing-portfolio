describe('ViewPort test', () => {
    it('ViewPort test1', ()=> {

        cy.viewport(990,760)
        cy.visit('http://www.amazon.com')
       
    })

    it('Vieport test2', ()=> {
        cy.viewport('iphone-3')
        cy.visit('http://www.amazon.com')

})

it('Vieport test3', ()=> {
    cy.viewport('iphone-3','landscape')
    cy.visit('http://www.amazon.com')

})

})