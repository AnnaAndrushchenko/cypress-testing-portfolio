import 'cypress-iframe'
describe('Handling Frames', ()=>{
    beforeEach(function()
    {
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })
    it('Approach1', ()=> {
    
    const iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
    iframe.clear().type('Welcome {ctrl+a}')
    cy.get("button[aria-label='Bold']").click()
})
it('Approach2 by using custom commands', ()=> {
    
    cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')
    cy.get("[aria-label='Bold']").click()
})
it('Approach2 by using cypress iframe plugin', ()=> {
   cy.frameLoaded('#mce_0_ifr') //Load the frame
   cy.iframe('#mce_0_ifr').clear().type('Welcome')
})
})