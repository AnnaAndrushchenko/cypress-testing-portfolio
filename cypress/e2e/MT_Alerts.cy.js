describe('Alerts Checking', () => {
    it('Alert Popup Checking',() => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert',(t) => {
            expect(t).to.contains('You clicked a button')
        })
    })

    it('Confirm Alert "OK" Checking', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:alert',(t) => {
            expect(t).to.contains('Do you confirm action?')
        })
        cy.get('#confirmResult').should('have.text','You selected Ok')
    })

    it('Confirm Alert "Cancel" Checking', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:confirm',(t) => {
            expect(t).to.contains('Do you confirm action?')
        })
        cy.on('window:confirm', () => false)
        cy.get('#confirmResult').should('have.text','You selected Cancel')
    })

    it('Prompt Alert Checking', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Hi Folks')
        })
        cy.get('#promtButton').click()
        cy.get('#promptResult').should('have.text','You entered Hi Folks')
    })

    it('Authenticated Alert "Ok" Checking', () => {

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('have.contain','Congratulations')
     })

     it.only('Alert with delay Checking', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#timerAlertButton').click({delay:5000})
        
        cy.on('window:alert',(t) => {
            expect(t).to.contains('This alert appeared after 5 seconds')
        })
        

     })

    
    })

