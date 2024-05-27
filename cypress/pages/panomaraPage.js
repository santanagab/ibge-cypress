/// <reference types="cypress" />

class PanoramaPage {
    visitar() {
        cy.visit('https://censo2022.ibge.gov.br/panorama/');
    }

    destacarCategoria(categoria, subcategoria) {
        cy.contains('#blocos-corOuRacaChartContainer > :nth-child(1) > :nth-child(1)').trigger('mouseover');
    }

    obterPorcentagemDestacada(subcategoria) {
        return cy.contains(subcategoria).siblings('.percentage');
    }

    obterPopulacao(subcategoria) {
        return cy.contains(subcategoria).siblings('.population');
    }


}

export default PanoramaPage;