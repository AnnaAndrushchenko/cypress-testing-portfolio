describe('Verify text field', () =>{
    it('Check correct data in text field',()=> {

        cy.visit('https://twitter.com/i/flow/login')
        cy.get("input[autocomplete='username']").type('test@gmail.com')
        cy.get("input[autocomplete='username']").should('have.value','test@gmail.com')
    })
})