describe('Dropdown Test Suite', ()=>{
    it('Dropdown with select', ()=> {
        cy.visit('https://www.govisitdonegal.com/accommodation')
        cy.get('#p_lt_ctl05_pageplaceholder_p_lt_ctl00_Widget_TouristItemListing_ddlFilterTown').select('Donegal Town',{force:true}).should('have.value','Donegal Town')
    
    })

    it('Dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('France').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','France')

    })

    it('Auto suggest Dropdown', ()=>{
        cy.visit('http://www.wikipedia.org')
        cy.get('#searchInput').type('Киев')
        cy.get('.suggestion-title').contains('Киевский национальный университет имени Тараса Шевченко').click() 
    
    })

    it('Dynamic Dropdown', ()=> {
        cy.visit('http://www.wikipedia.org')
        cy.get('#searchInput').type('Киев')
        cy.get('.suggestion-title').contains('Киевский национальный университет имени Тараса Шевченко').click() 
    })

    it('Dynamic Dropdown', () => {
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('united states')
        cy.get('.ui-menu-item-wrapper').contains('USA').click()
    })

    it.only('Dynamic Dropdown', () => {
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('us')
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

            if($el.text()=='Cyprus')
                {
                    $el.click()
                }

        })
        cy.get('#autocomplete').should('have.value','Cyprus')
    })
})

