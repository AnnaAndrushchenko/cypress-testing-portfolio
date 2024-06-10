describe('Verify DOMElements', ()=> {
    it('Check Images Elements',()=> {

        cy.visit('https://www.amazon.ae/s?bbn=12303800031&rh=n%3A11601326031%2Cn%3A%2111601327031%2Cn%3A12303749031%2Cn%3A12303800031%2Cp_85%3A15602504031&_encoding=UTF8&content-id=amzn1.sym.86fde58f-9eb9-4690-b6d2-5ed3baac4368&pd_rd_r=3569b0d3-de57-4900-bee9-b2b090c2c319&pd_rd_w=jAxsy&pd_rd_wg=h2fC9&pf_rd_p=86fde58f-9eb9-4690-b6d2-5ed3baac4368&pf_rd_r=3EG8JQ3X657NMF5KSGT9&ref=pd_hp_d_atf_unk')
        //cy.get('.s-image').first().click()
        cy.get('.s-image').last().click()

       // cy.get('.s-image').eq('3').click()
    })
})