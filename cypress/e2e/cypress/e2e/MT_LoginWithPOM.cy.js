import Login from "../PageObjects/MT_LoginPage.js";
describe('Authorization check',() => {
    it('Possitive Checking',() => {
        cy.visit('https://demoqa.com/login')

        const ln = new Login()
        ln.setUserName('Bagus')
        ln.setPassword('@Mbar-83')
        ln.clickLogin();
        ln.verifyLogin();
    })
})