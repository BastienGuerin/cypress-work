describe('test', () => {
    it('passes', () => {
        cy.visit('lightbox.html')
        cy.get('[data-cy=img]').click();
        cy.wait(1000)
        cy.get('[data-cy=close]').click()
    })
})