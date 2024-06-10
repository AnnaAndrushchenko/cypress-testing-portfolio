describe('Dropdown Click Test', () => {
    it('Should open dropdown on click', () => {
        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
        cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').click()
        cy.get('.paxinfo').click() 
        cy.get("[name='ctl00$mainContent$view_date1']").click()
    })
})