// cypress/e2e/login.cy.js
import { loginData } from '../fixtures/login';

describe('Login Form Tests', () => {
  beforeEach(() => {
    cy.visit('/login');  // Ubah ke URL yang sesuai
  });

  it('should allow a user to login with valid credentials', () => {
    cy.get('input[name="email"]').type(loginData.validEmail);
    cy.get('input[name="password"]').type(loginData.validPassword);
    cy.get('button[type="submit"]').click();

    // Asumsikan bahwa login yang berhasil akan mengarah ke dashboard atau halaman tertentu
    cy.url().should('include', '/dashboard');
  });

  it('should show an error with invalid credentials', () => {
    cy.get('input[name="email"]').type(loginData.invalidEmail);
    cy.get('input[name="password"]').type(loginData.invalidPassword);
    cy.get('button[type="submit"]').click();

    // Verifikasi error
    cy.contains('Invalid email or password').should('be.visible');
  });
});
