/// <reference types="cypress" />

/*import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import populacaoMapaPage from "../pages/populacaoMapaPage";

Given("que eu acesse o site de mapas do Panorama do Censo 2022", () => {
    populacaoMapaPage.visitarPagina();
});

When("seleciono o tema {string}", (tema) => {
    populacaoMapaPage.selecionarTema(tema);
});

And("seleciono a opção de filtro {string}", (filtro) => {
    populacaoMapaPage.selecionarFiltro(filtro);
});

And("seleciono o filtro {string} no filtro de recorte geográfico", (filtro) => {
    populacaoMapaPage.selecionarFiltroRecorte(filtro);
});

And("seleciono o segundo filtro {string} no filtro de recorte geográfico", (segundoFiltro) => {
    populacaoMapaPage.selecionarSegundoFiltroRecorte(segundoFiltro);
});

Then("exibe o mapa contendo a {string} da população residente da região Nordeste", () => {
    cy.get('.leaflet-popup-content > :nth-child(2)').should('contain.text', 'População residente: ');
});

Then("exibe o mapa contendo a {string} da população residente na Paraíba", () => {
    cy.get('.leaflet-popup-content').should('contain.text', 'Paraíba').and('contain.text', 'População residente: 3.974.687 pessoas');
});

Then("exibe o mapa contendo a {string} da população residente do município de João Pessoa", () => {
    cy.get('.leaflet-popup-content').should('contain.text', 'João Pessoa (PB)').and('contain.text', 'População residente:  833.932 pessoas');
});

*/