/// <reference types="cypress" />

describe('Panorama da População', () => {
    beforeEach(() => {
        cy.visit('https://censo2022.ibge.gov.br/panorama/');
    });

    it('Acessar o site do panorama', () => {
        cy.url().should('include', 'censo2022.ibge.gov.br/panorama');
    });
    ///it('Validar porcentagem de pessoas brancas', () => {
    ///cy.contains('#blocos-corOuRacaChartContainer :contains("Branca")').trigger('mouseover');
    /// cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    ///});

    /// it('Validar porcentagem de pessoas pretas', () => {
    /// cy.contains('#blocos-corOuRacaChartContainer :contains("Preta")').trigger('mouseover');
    ///cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    //// });

    ///  it('Validar porcentagem de pessoas pardas', () => {
    ///   cy.contains('#blocos-corOuRacaChartContainer :contains("Parda")').trigger('mouseover');
    //// cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    ///});

    ////       it('Validar porcentagem de pessoas amarelas', () => {
    ////cy.contains('#blocos-corOuRacaChartContainer :contains("Amarela")').trigger('mouseover');
    /// cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    ////   });

    //// it('Validar porcentagem de pessoas indígenas', () => {
    ///     cy.contains('#blocos-corOuRacaChartContainer :contains("Indígena")').trigger('mouseover');
    ///     cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    ///});

    ///  it('Validar porcentagem de homens', () => {
    ///     cy.contains('#blocos-corOuRacaChartContainer :contains("Homens")').trigger('mouseover');
    ///  cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    ///});

    ///it('Validar porcentagem de mulheres', () => {
    /// cy.contains('#blocos-corOuRacaChartContainer :contains("Mulheres")').trigger('mouseover');
    /// cy.get('#blocos-corOuRacaChartContainer .percentage').should('be.visible');
    ///});

    it('Validar população da Paraíba', () => {
        cy.get('#territorioCard > .card')
            .scrollIntoView();
        cy.get('#25') // Selecionar o elemento pelo ID
            .trigger('mouseover')
            .wait(1000) // Aguardar um segundo para a dica de ferramenta aparecer
            .should('have.attr', 'data-tippy-content', 'Paraíba: 3.974.687 pessoas');
    });
});