describe('Verify URL', () =>{
    it('Check correct URL',()=>{

        cy.visit('https://www.etsy.com/?ref=lgo')
        cy.url().should('include','etsy')
        cy.url('eq','https://www.etsy.com/?ref=lgo')
        cy.url('contain','etsy')

        cy.url().should('include','etsy')
        .should('eq','https://www.etsy.com/?ref=lgo')
        .should('contain','etsy')

        cy.url().should('include','etsy')
        .and('eq','https://www.etsy.com/?ref=lgo')
        .and('contain','etsy')
        .and('not.contain','etsyshop') 


    })

})
