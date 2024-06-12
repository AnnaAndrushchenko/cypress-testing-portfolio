describe('Authorization check', ()=> {
    let userData;

    before(() => {
        cy.visit('https://demoqa.com/login')
        cy.fixture('MT_LoginPage.json').then((data) => {
            userData = data
        })
    })

    it('Login into application using fixture data', () => {

        cy.get('#userName').type(userData.UserName)
        cy.get('#password').type(userData.Password)
        cy.get('#login').click
    
       

    })
})