/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import PopulacaoPage from '../pages/populacaoPage'

const populacaoPage = new PopulacaoPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    populacaoPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    populacaoPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    populacaoPage.selecionarRegiao(regiao);
});

Then("exibe o resultado da população da região Nordeste no {string} de grandes regiões", (ranking) => {
    populacaoPage.verificarRanking('Nordeste');
});

Then("exibe o resultado da população do estado Paraíba no {string} por UF", (ranking) => {
    populacaoPage.verificarRanking('Paraíba');
});

Then("exibe a página {string} da população do município de João Pessoa", (dados) => {
    populacaoPage.verificarDadosCidade('João Pessoa (PB)');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});