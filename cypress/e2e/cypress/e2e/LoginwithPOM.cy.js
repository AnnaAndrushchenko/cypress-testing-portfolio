import Login from "../PageObjects/LoginPage.js";
describe('General Approach POM', () => {
    it('LoginTest General Approach', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    })

    it.only('LoginTest with POM', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new Login()
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.forgetpassword()
        ln.clickSubmit();
        ln.verifyLogin();
    })
})
