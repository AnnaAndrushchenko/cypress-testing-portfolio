describe('Reload Page Test Suite', ()=>{

  it('Test Reload Page', ()=>
    {
      cy.visit ("https://www.amazon.ae/")
      cy.contains('New Releases').should('be.visible')
      cy.reload()
      cy.contains('New Releases').should('be.visible')
    })

  it('Cash reload by default timeout - 60000ms', ()=>
    {
      cy.visit ("https://www.amazon.ae/")
      cy.contains('New Releases').should('be.visible')
      cy.reload(true)
      cy.contains('New Releases').should('be.visible')
    })

  it('Custom timeout', ()=>
    {
      cy.visit ("https://www.amazon.ae/")
      cy.contains('New Releases').should('be.visible')
      cy.reload({timeout:5000})
      cy.contains('New Releases').should('be.visible')
    })
})