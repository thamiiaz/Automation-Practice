/* eslint-disable cypress/no-unnecessary-waiting */
const target = 'http://automationpractice.com/'

describe('Fluxo de pedido sem conta previamente cadastrada', () => {
  it('Dado que esteja no site sem estar logado em nenhuma conta', () => {
    cy.visit(target)
  })
  it('Quando navegar para a pagina de dresses', () => {
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
  })
  it('E selecionar um dos vestidos, adicionar ao carrinho e iniciar o processo de checkout', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(
      '#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-in-line.first-item-of-tablet-line.last-item-of-mobile-line > div > div.right-block',
    )
      .then(cy.wrap)
      .find('a[title="View"]')
      .should('not.be.visible')
      .click({ force: true })
      .wait(2000)
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('#add_to_cart > .exclusive').click({ force: true }).wait(5000)
    cy.get('.button-medium > span').click({ force: true })
    cy.get('.cart_navigation > .button > span').click({ force: true })
  })

  it('Então será possivel criar uma nova conta ou entrar com uma conta já existente', () => {
    // campos de criação de nova conta
    cy.get('#create-account_form > .page-subheading').should('be.visible')
    cy.get('#email_create').should('be.visible')
    // campos de entrada em conta já existente
    cy.get('#login_form > .page-subheading').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.get('#passwd').should('be.visible')
    cy.get('.lost_password').should('be.visible')
  })
})
