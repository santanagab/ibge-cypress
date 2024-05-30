/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que eu acesse o site Panorama do Censo 2022", () => {
    cy.visit('https://censo2022.ibge.gov.br/panorama/indicadores.html?localidade=BR&tema=5');
});

When("seleciono o tema {string}", (tema) => {
    cy.get('#select2-selectTemas-container').click();
    cy.get('.select2-results__option').contains(tema).click();
    cy.get('#select2-selectTemas-container').should('contain.text', tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    cy.get('#select2-mainLocation-container').click();
    cy.contains('.select2-results__option', regiao).should('be.visible').click();
    cy.get('#select2-mainLocation-container').should('contain.text', regiao);
});

Then("exibe o resultado da população quilombola da região Nordeste no {string} de grandes regiões", (ranking) => {
    cy.get('#chart1 > .card > .conteudo > #ranking').within(() => {
        cy.contains('td', 'Nordeste');
        ///    cy.contains('td', '906.337 (quilombolas)'); // Atualize o valor conforme necessário
    });
});

Then("exibe o resultado da população quilombola do estado Paraíba no {string} por UF", (ranking) => {
    cy.get('#chart1 > .card > .conteudo > #ranking').within(() => {
        cy.contains('td', 'Paraíba');
        ///  cy.contains('td', '16.765'); // Atualize o valor conforme necessário
    });
});

Then("exibe o resultado da {string} quilombola da cidade João Pessoa", (população) => {
    cy.get('#siteCidades')
        .should('contain.text', 'Mais sobre João Pessoa (PB) no Portal Cidades@');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});