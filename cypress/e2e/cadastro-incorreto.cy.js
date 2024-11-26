describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
})

  it('Deve acessar sem preencher o formulario para cadastrar um novo usuário', () => {   
    cy.cadastrarErro()
  })
})
