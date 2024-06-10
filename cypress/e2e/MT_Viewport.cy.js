describe('Test Suite Viewport', () => {
    it('Check viewport ipad-2', () => {

        cy.viewport('ipad-2')
        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/#')
})

    it('Check viewport',() => {
    cy.viewport(571,253)
    cy.visit('https://rahulshettyacademy.com/dropdownsPractise/#')

})
    it('Check viewport IPhone5 landscape',() => {

        cy.viewport('iphone-5','landscape')
        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/#')


    })
   
})
