describe('Final Homewrok - Automation Testing (Ganna Andrushchenko)', () => {
    
    it('Confirmation of Transaction Success after Deposit and Withdrawal',() => {
        //Open https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login website
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        //Confirm the Title of the page is XYZ Bank
        cy.title().should('eq','XYZ Bank')
       // Click on Customer Login
        cy.get('button[ng-click="customer()"]').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
        //Choose Harry Potter from the Your Name drop down
        cy.get('select[name="userSelect"]').select('Harry Potter')
        //Click on Login
        cy.get('button[type="submit"]').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
        //Confirm the Harry Potter displayed after Welcome
        cy.get('span[class="fontBig ng-binding"]').should('have.text', 'Harry Potter')
        //Confirm the Currency is Dollar
        cy.get('strong[class="ng-binding"]').contains('Dollar').should('have.text', 'Dollar')
        //Click on Deposit
        cy.get('button[ng-class="btnClass2"]').click()
        //Enter the amount in Amount to be Deposited textbox
        cy.get('input[type="number"]').type('77')
        //Click on Deposit
        cy.get('button[type="submit"]').click()
        //Confirm "Deposit Successful" is displayed
        cy.get('span[ng-show="message"]').should('have.text','Deposit Successful')
        //Click on Transactions
        cy.get('button[ng-class="btnClass1"]').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.globalsqa.com/angularJs-protractor/BankingProject/#/listTx')
        //Confirm the amount is displayed under Amount column
        cy.get('table[class="table table-bordered table-striped"] tbody tr:nth-child(1) td:nth-child(2)').contains('77')
        //Confirm the Transaction Type is credit
        cy.get('table[class="table table-bordered table-striped"] tbody tr:nth-child(1) td:nth-child(3)').contains('Credit')
        //Click on Back button
        cy.get('button[ng-click="back()"]').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
        //Click on Withdrawl
        cy.get('button[ng-click="withdrawl()"]').click()
        //Enter the same amount you deposited
        cy.get('input[ng-model="amount"]').type('77')
        //Click on Withdraw
        cy.get('button[type="submit"]').click()
        //Confirm "Transaction Successful" is displayed
        cy.get('span[ng-show="message"]').should('have.text','Transaction successful')
        //Click on Transactions
        cy.get('button[ng-class="btnClass1"]').invoke('removeAttr','target').click()
        cy.wait(3000)
        //Confirm there is one more row with Transaction Type is debit
        cy.url().should('include','https://www.globalsqa.com/angularJs-protractor/BankingProject/#/listTx')
        cy.get('table[class="table table-bordered table-striped"] tbody tr:nth-child(2) td:nth-child(3)').contains('Debit')
})

})