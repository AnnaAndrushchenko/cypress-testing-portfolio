describe('Title Test Suite', () =>
{
    it('Verify Title Possitive', () =>
    {
      cy.visit("https://www.888sport.com/ru/football/")

      cy.title().should('eq','Онлайн-ставки на футбол - Ставьте на футбольные матчи на 888sport!')
    }) 

    it('Verify Title Negative', () =>
        {
          cy.visit("https://www.888sport.com/ru/football/")
    
          cy.title().should('eq','Онлайн-ставки на теннис - Ставьте на футбольные матчи на 888sport!')
        }) 
})