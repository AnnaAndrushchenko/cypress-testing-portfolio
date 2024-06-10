describe('Verify quantity of links', ()=>{
    it('Check quantity of links on the page',()=>{

        cy.visit('https://xappnow.com/low-code-platform-user-manual/ui-element-spinner.html')
        cy.xpath('//a').should('have.length', 860)
    })
})