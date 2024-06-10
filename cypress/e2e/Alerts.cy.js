describe('Alerts', () => {
    it('JS Alerts',() => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click();

        cy.on('window:alert',(t) =>{
            expect(t).to.contains('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('JS Confirm Alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t) =>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('JS Confirm Alert - Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t) =>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm',() => false)

        cy.get('#result').should('have.text','You clicked: Cancel')
})

     it('JS Promt Alert', ()  => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=> {
            cy.stub(win,'prompt').returns('welcome');
        
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('p#result').should('have.text','You entered: welcome')
     })

     it('Autthenticated Alert',() => {

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('have.contain','Congratulations')
     })

     
    })     
