describe('Verify File Uploading',() => {

    it('Check upload file',() => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sampleFile.jpeg')
        cy.get('.button').click()
        
    })
})