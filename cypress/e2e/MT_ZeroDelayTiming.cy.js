describe('Check Zero Delay Timing', () => {
    it ('Check zero delay timing',() => {
        
        cy.visit('https://www.google.com/')
        //cy.get('.gLFyf').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry')
        cy.get('.gLFyf').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry',{delay:0})
        
    })


})