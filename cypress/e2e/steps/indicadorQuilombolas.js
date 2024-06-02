/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import QuilombolasPage from '../pages/quilombolasPage'

const quilombolasPage = new QuilombolasPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    quilombolasPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    quilombolasPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    quilombolasPage.selecionarRegiao(regiao);
});

Then("exibe o resultado da população quilombola da região Nordeste no {string} de grandes regiões", (ranking) => {
    quilombolasPage.verificarRanking('Nordeste');
});

Then("exibe o resultado da população quilombola do estado Paraíba no {string} por UF", (ranking) => {
    quilombolasPage.verificarRanking('Paraíba');
});

Then("exibe a página {string} da população quilombola do município de João Pessoa", (dados) => {
    quilombolasPage.verificarDadosCidade('João Pessoa (PB)');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});