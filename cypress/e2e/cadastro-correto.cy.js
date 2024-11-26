describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
})

  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Rogerio felipe');
    cy.get('[data-test="input-email"]').type('rogeriofelipe@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})