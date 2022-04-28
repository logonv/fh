describe('Home page testing', () => {
    it('Visits FilmHub music', () => {
    //   expect(true).to.equal(true)
    cy.visit("http://localhost:3000/")
    })

    it('shows the title', () => {
        cy.visit("http://localhost:3000/")
        cy.contains('FilmHub Music')

    })

    it('shows a learn more, clicks it and is directed to details page', () => {
        cy.visit("http://localhost:3000/")
        cy.contains('Learn More').click()
        cy.url().should('include', '/album')

    })

it('finds input', () => {
        cy.visit("http://localhost:3000/")
        cy.get('input').type('Hamilton')
        cy.contains('Hamilton')
        

    })  

  })

  describe('Details page testing', () => {
   

    it('shows a learn more, clicks it and is directed to details page. Clicking back returns to home page', () => {
        cy.visit("http://localhost:3000/")
        cy.contains('Learn More').click()
        cy.url().should('include', '/album')
        cy.contains('Back').click()
        cy.url().should('eq',"http://localhost:3000/" )

    })


  })
