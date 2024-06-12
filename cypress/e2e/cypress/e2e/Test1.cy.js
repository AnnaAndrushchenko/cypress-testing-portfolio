describe('Login Suite', ()=>{
    it('RS 1st TestCase', ()=> {
         cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
         cy.get('.search-keyword').type('ca')
         cy.get('.product:visible').should('have.length', 4)
         cy.get('.products').as('prd')
         cy.get('@prd').find('.product').should('have.length',4)
            //Parent child chaining
     cy.get('@prd').find('.product').eq(2).contains('add to CarT', {matchCase: false}).click()
     cy.log('Add to Cart button was clicked successfully')
     cy.get('@prd').find('.product').each(($el,index,$list) => {
      const textveg=$el.find('.product-name').text() // textveg contains  Cashews - 1 Kg
      if(textveg.includes('Cauliflower'))
      {
         cy.wrap($el).find('button').click() 
      }
      })
    cy.get('.brand').should('have.text','GREENKART') 
        
     cy.get('.brand').then(function(logoelement)
     {
      cy.log(logoelement.text())
     }) 
     })
 })