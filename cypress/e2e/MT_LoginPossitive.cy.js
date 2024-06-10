describe('Verify authorization', ()=> {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Possitive check for authorization1', () => {
        cy.get("input[placeholder='Username']").type('standard_user')
        cy.get("input[placeholder='Password']").type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Possitive check for authorization2', ()=> {

        cy.get("input[placeholder='Username']").type('locked_out_user')
        cy.get("input[placeholder='Password']").type('secret_sauce')
        cy.get('#login-button').click()
    })

    afterEach(() => {
        cy.get('#react-burger-menu-btn').click()
        cy.get("a[id='logout_sidebar_link']").click()

    })
})
    