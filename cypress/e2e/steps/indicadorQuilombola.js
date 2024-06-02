/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import QuilombolaPage from '../pages/quilombolaPage'

const quilombolaPage = new QuilombolaPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    quilombolaPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    quilombolaPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    quilombolaPage.selecionarRegiao(regiao);
});

Then("exibe o resultado da população quilombola da região Nordeste no {string} de grandes regiões", (ranking) => {
    quilombolaPage.verificarRanking('Nordeste');
});

Then("exibe o resultado da população quilombola do estado Paraíba no {string} por UF", (ranking) => {
    quilombolaPage.verificarRanking('Paraíba');
});

Then("exibe a página {string} da população quilombola da cidade João Pessoa", (dados) => {
    quilombolaPage.verificarDadosCidade('João Pessoa (PB)');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});