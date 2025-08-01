/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('.contato').should('have.length', 3)
    })
    
    it('Deve editar um contato', ()=> {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear().type('Edson Arantes')
        cy.get('[type="email"]').clear().type('123@gmail.com')
        cy.get('[type="tel"]').clear().type('12 4321 4321')
        cy.get('.alterar').click()
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve incluir um contato', ()=> {
        cy.get('[type="text"]').type('Joao Azevedo')
        cy.get('[type="email"]').type('123@4.com')
        cy.get('[type="tel"]').type('12 1234 1234')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 4)
    })


    it('Deve excluir um contato', ()=> {
        cy.get('.delete').last().click()
        cy.get('.contato').should('have.length', 3)
    })
})
