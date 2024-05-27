/// <reference types="cypress" />

describe('Acessar a página de gráficos dos Indicadores da Paraíba', () => {
    beforeEach(() => {
        cy.visit('https://censo2022.ibge.gov.br/panorama/indicadores.html?localidade=BR&tema=5');
        cy.wait(3000)
    });

    it('Validar seleção do indicador "População" e localização "Paraíba"', () => {
        selecionarIndicadorELocalizacao('População', 'Paraíba - 25');
        validarDadosNaTabela('Paraíba', '3.974.687');
    });

    it('Validar seleção do indicador "Quilombolas" na Paraíba', () => {
        selecionarIndicadorELocalizacao('Quilombolas', 'Paraíba - 25');
        validarDadosNaTabela('Paraíba', '16.765');
    });

    it('Validar seleção do indicador "Indígenas" na Paraíba', () => {
        selecionarIndicadorELocalizacao('Indígenas', 'Paraíba - 25');
        validarDadosNaTabela('Paraíba', '30.140');
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignorar os erros que correspondem a 'appendChild' undefined
        if (err.message.includes('appendChild')) {
            return false;
        }
    });

    function selecionarIndicadorELocalizacao(indicador, localizacao) {
        cy.get('#select2-selectTemas-container').click();
        cy.get('.select2-results__option').contains(indicador).click();
        cy.get('#select2-mainLocation-container').click();
        cy.contains('.select2-results__option', localizacao).click();
    }

    function validarDadosNaTabela(texto1, texto2) {
        cy.get('#chart1 > .card > .conteudo > #ranking').within(() => {
            cy.contains('td', texto1);
            cy.contains('td', texto2);
        });
    }
})