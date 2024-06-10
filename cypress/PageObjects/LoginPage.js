class Login
{
   txtUsername="input[placeholder='Username']"
   txtPassword="input[placeholder='Password']"
   btnSubmit="button[type='submit']"
   lblmsg='.oxd-topbar-header-breadcrumb > .oxd-text'
   forgotpassword='.orangehrm-login-forgot > .oxd-text'
   
     setUserName(username)
     {
        cy.get(this.txtUsername).type(username)
     }
     setPassword(password)
     {
        cy.get(this.txtPassword).type(password)   
     }
     clickSubmit()
     {
        cy.get(this.btnSubmit).click();
     }
     
     verifyLogin()
     {
        cy.get(this.lblmsg).should('have.text','Dashboard')
     }
     forgotpassword()
     {
        cy.get(this.forgotpassword).click()
     }
}
export default Login;
