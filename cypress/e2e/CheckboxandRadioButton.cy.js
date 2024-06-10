describe('UI Elements', () => {
    it('Checking RadioButton', ()=> {

        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').should('be.visible')
        cy.get('input[value="radio2"]').should('be.visible')
        cy.get('input[value="radio3"]').should('be.visible')

        cy.get('input[value="radio1"]').check().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')

    })

    it.only('Checking Checkboxes', ()=> {
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').should('be.visible')
        cy.get('#checkBoxOption2').should('be.visible')
        cy.get('#checkBoxOption3').should('be.visible')

        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').first().check
        cy.get('input[type="checkbox"]').last().check

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2'])

})
})