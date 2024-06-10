import 'cypress-iframe'
describe('Handling Frames Checking', () => {
    beforeEach(function()
    {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('button[class="tox-notification__dismiss tox-button tox-button--naked tox-button--icon"]').click()
    })
    it('Verify Handling Frames', () => {

        const iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iframe.clear().type('What is your name? {ctrl+a}')
        cy.get('button[aria-label="Italic"]').click()
    })
    it('Verify Handling Frames by using custom commands',() => {

        cy.iframe('#mce_0_ifr').clear().type('My name is Anna')
        cy.get('.tox-tbtn__select-chevron').click()
        cy.get('.tox-collection__item-caret').eq(0).click()
        cy.get('div[title="Heading 1"]').click()
        
    })
    it('Verify Handling Frames by using cypress iframe plugin', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Nice to meet you')
        cy.get('button[aria-label="Bold"]').click()
    })
    
    })
