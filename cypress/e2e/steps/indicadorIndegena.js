/// <reference types="cypress" />

/// <reference types="cypress" />

import { Dado, Quando, Então, E, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import IndigenaPage from "../pages/indigenaPage";

const indigenaPage = new IndigenaPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    indigenaPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    indigenaPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    indigenaPage.selecionarRegiao(regiao);
});

Then("exibe o resultado da população indígena da região Nordeste no {string} de grandes regiões", (ranking) => {
    indigenaPage.verificarRanking('Nordeste', ranking);
});

Then("exibe o resultado da população indígena do estado Paraíba no {string} por UF", (ranking) => {
    indigenaPage.verificarRanking('Paraíba', ranking);
});

Then("exibe a página {string} da população indígena da cidade João Pessoa", (dados) => {
    indigenaPage.verificarDadosCidade('João Pessoa (PB)', dados);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});