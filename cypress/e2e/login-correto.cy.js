describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
})
    
  it('Deve preencher os campos de login corretamente e autenticar o usuário na pagina', () => {
    cy.login('rogeriofelipe@email.com', 'Senha123')

  })
})