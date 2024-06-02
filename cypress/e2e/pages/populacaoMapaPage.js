/// <reference types="cypress" />

/*class PopulacaoMapaPage {
    visitarPagina() {
        cy.visit('https://censo2022.ibge.gov.br/panorama/mapas.html?localidade=&recorte=N3');
    }

    aguardarCarregamento() {
        cy.wait(5000); // Aguarda 5 segundos, ajuste conforme necessário
    }

    selecionarTema(tema) {
        this.aguardarCarregamento();
        cy.get('#item-menu-tema--populacao > h3')
            .click();
        cy.get('#item-menu-subtema--populacao')
            .click({ force: true })
            .should('have.class', 'selecionado');
    }

    selecionarFiltroRegiaoNordeste() {
        cy.get('#select2-intrarregiaoMapa-container')
            .click();
        cy.get('.select2-results__option')
            .should('contain', 'Grandes Regiões')
            .contains('Grandes Regiões')
            .click();
        cy.get('#divInputMunicipios > .select2')
            .click();
        cy.get('.select2-results__option')
            .should('contain', 'Região Nordeste')
            .contains('Região Nordeste')
            .click();
        cy.get('.leaflet-popup-content > :nth-child(2)')
            .should('contain.text', 'População residente: ');
    }

    selecionarFiltroEstadoParaiba() {
        cy.get('#select2-intrarregiaoMapa-container').click();
        cy.get('.select2-results__option').contains('Unidades da Federação').click();
        cy.get('#select2-intrarregiaoMapa-container').should('contain.text', 'Unidades da Federação');
        cy.get('#divInputMunicipios > .select2').click();
        cy.get('.select2-results__option').contains('Paraíba').click();
        cy.get('#select2-intrarregiaoMapa-container').should('contain.text', 'Unidades da Federação');
    }

    selecionarFiltroMunicipioJoaoPessoa() {
        cy.get('#select2-intrarregiaoMapa-container').click();
        cy.get('.select2-results__option').contains('Municípios').click();
        cy.get('#select2-intrarregiaoMapa-container').should('contain.text', 'Municípios');
        cy.wait(3000);
        cy.get('#divInputMunicipios > .select2').click();
        cy.get('.select2-results__option').contains('João Pessoa (PB)').click();
        cy.get('#select2-intrarregiaoMapa-container').should('contain.text', 'Municípios');
    }
}

export default new PopulacaoMapaPage(); */