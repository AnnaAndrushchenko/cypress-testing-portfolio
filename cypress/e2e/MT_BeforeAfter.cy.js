describe('Verify authorization', ()=> {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Possitive check for authorization', () => {
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

        let expectedName = '<img src=x onerror=prompt(1);> sharma'
        cy.get('.oxd-userdropdown-name').then( (x)=>{
            let actualName=x.text()
        })
    })

    it('Negative check for autorization', ()=> {

        cy.get("input[placeholder='Username']").type('Admin1')
        cy.get("input[placeholder='Password']").type('admin321')
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

        let expectedName = '<img src=x onerror=prompt(1);> sharma'
        cy.get('.oxd-userdropdown-name').then( (x)=>{
            let actualName=x.text()
        })

    })

    afterEach(() => {
        cy.get('.oxd-userdropdown-name').click()
        cy.get('a[href="/web/index.php/auth/logout"]').click()

    })
})
    