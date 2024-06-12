describe('Web Tables Checking', () => {
    beforeEach(function()
    {
        cy.visit('https://the-internet.herokuapp.com/tables')
    })
    it('Check the value present anywhere in the table',() => {
        
        cy.get('#table1').contains('td','$100.00').should('be.visible')
    })

    it('Check the value in specific row & Column', () => {
        
        cy.xpath('//*[@id="table1"]/tbody/tr[2]/td[3]').contains('fbach@yahoo.com').should('be.visible')

    })
    it('Check the value in specific row & Column2', () => {
        
        cy.wait(2000)
        cy.get('#table1 tbody tr:nth-child(2) td:nth-child(3)').contains('fbach@yahoo.com').should('be.visible')
    })

    it('Check the header at possition 3', () => {
        cy.wait(2000)
        cy.get('#table1 thead th:nth-child(4)').contains('Due').should('be.visible')

    })
    it('Verify the Web Site http://www.jdoe.com whose owner first name is Doe', ()=> {
        cy.wait(2000)
        cy.get('#table1 tbody tr td:nth-child(1)').each(($el,index,$list) => {
            const text = $el.text()
            if(text.includes('Doe'))
                {
                    cy.get('#table1 tbody tr td:nth-child(3)').eq(index).then(function(wsite)
                
                {
                    const website=wsite.text()
                    expect(website).to.equal('jdoe@hotmail.com') 
                }) 
                }
        })

    })
})