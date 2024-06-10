describe('Web Tables', () => {
    it('Web Table',() => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        //Check the value present anywhere in the table

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //check value in specific row & Column

        cy.get('table[name=BookTable] > tbody >tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //check the header at possition 3

        cy.get('table[name=BookTable] > tbody >tr:nth-child(1) > td:nth-child(3)').contains('Subjects').should('be.visible')

        //verify the book name 'Master in Java' whose author name is Amod

        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($el,index,$list) => {
            const text = $el.text()
            if(text.includes('Amod'))
                {
                    cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookname=bname.text()
                    expect(bookname).to.equal("Master In Java")
                })
                
            }})
    })
})