describe('UploadFile', () => {
    it('TC1-File Upload', ()=> {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')

        
        cy.get('#file').selectFile('test.pdf')
        
    })

    it('TC2-File Upload', ()=> {
        cy.visit('https://demoqa.com/upload-download')

        
        cy.get('#uploadFile').selectFile('test.pdf')
        
    })
})