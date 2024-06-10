class Login
{
    txtUserName="#userName"
    txtPassword="#password"
    btnLogin="#login"
    lblmsg="#userName-value"

    setUserName (username)
    {
        cy.get(this.txtUserName).type(username)
    }
    setPassword (password)
    {
        cy.get(this.txtPassword).type(password)
    }
    clickLogin()
    {
        cy.get(this.btnLogin).click();
    }
    verifyLogin()
    {
        cy.get(this.lblmsg).should('have.text','Bagus')
    }


} 
export default Login;