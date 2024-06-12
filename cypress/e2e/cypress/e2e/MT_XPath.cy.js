describe('Dropdown Click Test', () => {
    it('Should open dropdown on click', () => {
        //cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
        //cy.xpath('//input[@name="ctl00$mainContent$view_date1"]').click()
        cy.visit('https://www.expressway.ie/')
        cy.xpath('//input[@placeholder="Where would you like to go?"]').click()


    })
})