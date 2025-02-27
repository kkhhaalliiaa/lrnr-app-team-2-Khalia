/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://lrnr-app-team-2.onrender.com/')
  })

  it('should have a visible navigation bar', () => {
    cy.get('nav').should('be.visible')
  })

  it('should have a visible logo', () => {
    cy.get('.cus-logo').should('be.visible')
  })

  it('should have a visible tagline', () => {
    cy.get('.cus-home-tagline').should('be.visible')
  })

  it('should have a visible button', () => {
    cy.get('.cus-home-btn').should('be.visible')
  })
    
})