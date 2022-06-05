/* eslint-disable cypress/no-unnecessary-waiting */
const target =
  'http://automationpractice.com/index.php?controller=authentication&back=my-account'

describe('Fluxo de entrada no sistema com conta previamente cadastrada e visualização de alguns dados da conta', () => {
  it('Dado que esteja no site, na tela de autenticação e logue na conta ja existente', () => {
    cy.visit(target)
    cy.get('#email').click().type('testet@teste.com')
    cy.get('#passwd').click().type('123456789')
    cy.get('#SubmitLogin > span').click()
  })
  it('Visualização de Wishlist', () => {
    cy.get('.icon-heart').click({ force: true })
    // tem um bug no site que leva a pagina de login novamente como se estivesse deslogado, entao fiz um paleativo para logar novamente
    cy.get('#email').click().type('testet@teste.com')
    cy.get('#passwd').click().type('123456789')
    cy.get('#SubmitLogin > span').click()
    // visualização dos campos da wishlist: titulo da pagina, criação de nova wishlist e campos das wishlists criadas
    cy.get('.page-heading').should('be.visible')
    cy.get('.page-subheading').should('be.visible')
    cy.get('tr > .first_item').should('be.visible')
    cy.get('thead > tr > :nth-child(2)').should('be.visible')
    cy.get('thead > tr > :nth-child(3)').should('be.visible')
    cy.get('thead > tr > :nth-child(4)').should('be.visible')
    cy.get('thead > tr > :nth-child(5)').should('be.visible')
    cy.get('tr > .last_item').should('be.visible')
  })
  it('Voltar para tela de informações da conta', () => {
    cy.get('.footer_links > :nth-child(1) > .btn > span').click()
    // tem um bug no site que leva a pagina de login novamente como se estivesse deslogado, entao fiz um paleativo para logar novamente
    cy.get('#email').click().type('testet@teste.com')
    cy.get('#passwd').click().type('123456789')
    cy.get('#SubmitLogin > span').click()
  })
  it('Visualizar minhas informações pessoais depois sair para pagina principal do site', () => {
    cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
    // tem um bug no site que leva a pagina de login novamente como se estivesse deslogado, entao fiz um paleativo para logar novamente
    cy.get('#email').click().type('testet@teste.com')
    cy.get('#passwd').click().type('123456789')
    cy.get('#SubmitLogin > span').click()
    cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
    cy.wait(5000)
    cy.get(':nth-child(2) > .btn > span')
  })
})
