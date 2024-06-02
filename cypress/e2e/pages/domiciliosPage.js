class DomiciliosPage {
    visitar() {
        cy.visit('https://censo2022.ibge.gov.br/panorama/indicadores.html?localidade=BR&tema=5');
    }

    selecionarTema(tema) {
        cy.get('#select2-selectTemas-container').click();
        cy.get('.select2-results__option').contains(tema).click();
        cy.get('#select2-selectTemas-container').should('contain.text', tema);
    }

    selecionarRegiao(regiao) {
        cy.get('#select2-mainLocation-container').click();
        cy.contains('.select2-results__option', regiao).should('be.visible').click();
        cy.get('#select2-mainLocation-container').should('contain.text', regiao);
    }

    verificarRanking(localizacao) {
        cy.get('#chart1 > .card > .conteudo > #ranking').within(() => {
            cy.contains('td', localizacao);
        });
    }

    verificarDadosCidade(cidade) {
        cy.get('#siteCidades')
            .should('contain.text', `Mais sobre ${cidade} no Portal Cidades@`);
    }
}

export default DomiciliosPage;