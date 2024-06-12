describe('Dropdown Click Test', () => {
    it('Should open dropdown on click', () => {
        //cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
        //cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').click()
        cy.visit('https://www.skyscanner.ie/carhire')
        cy.get('#carhire-search-controls-location-pick-up').click({force: true})
    })
})