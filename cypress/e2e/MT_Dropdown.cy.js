describe ('Verify Dropdown', () => {

    it('Dropdown with select', ()=> {
        cy.visit('https://www.govisitdonegal.com/accommodation')
        cy.get('#p_lt_ctl05_pageplaceholder_p_lt_ctl00_Widget_TouristItemListing_ddlFilterTown').select('Donegal Town',{force:true}).should('have.value','Donegal Town')
    
    })

    it('Dropdown without select', ()=> {
        cy.visit('https://www.etsy.com/')
        cy.get('#global-enhancements-search-query').click({force: true})
        cy.get('#global-enhancements-search-query').click({force: true}).type('gift for mom',{force: true}).type('{enter}')
        //cy.get('#global-enhancements-search-suggestions').click({force: true}).type('gift for mom',{force: true}).type('{enter}')
        cy.get('input[id="global-enhancements-search-query"]').should('have.value','gift for mom')
    })

    it('Dropdown without select2', ()=> {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('input[type=checkbox]').check().should('be.checked')
        cy.get('#select2-addpaxno-container').click()
        cy.get('.select2-search__field').click().type('100').type('{enter}')
        cy.get('#select2-addpaxno-container').should('have.text','×add 1 more passenger (100%)')
    })


    it('Auto suggest Dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('#W0wltc').click()
        cy.get('.gLFyf').type('cypress automation')
        cy.get('.sbct.PZPZlf').contains('cypress automation jobs').click() 
    
    })

    it('Dynamic Dropdown', ()=> {
        cy.visit('http://www.wikipedia.org')
        cy.get('#searchInput').type('Киев')
        cy.get('.suggestion-title').contains('Киевский национальный университет имени Тараса Шевченко').click() 
    })

    it('Dynamic Dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/#')
        cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').type('ja')
        cy.get('.dropdownDiv').contains('Jaipur').click()
    })

    it.only('Dynamic Dropdown', () => {
        cy.visit('https://www.amazon.ae/')
        cy.get('input[type=text]').type('gi')
        cy.get('.s-suggestion-container').each(($el, index, $list) => {

            if($el.text()=='gift bag')
                {
                    $el.click()
                }

        })
        cy.get('input[type=text]').should('have.value','gift bag')
    })
})
