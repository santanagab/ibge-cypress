/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import DomiciliosPage from '../pages/domiciliosPage'

const domiciliosPage = new DomiciliosPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    domiciliosPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    domiciliosPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    domiciliosPage.selecionarRegiao(regiao);
});

Then("exibe o resultado do indicador de domicílios da região Nordeste no {string} de grandes regiões", (ranking) => {
    domiciliosPage.verificarRanking('Nordeste');
});

Then("exibe o resultado do indicador de domicílios do estado Paraíba no {string} por UF", (ranking) => {
    domiciliosPage.verificarRanking('Paraíba');
});

Then("exibe a página {string} de domicílios do município de João Pessoa", (dados) => {
    domiciliosPage.verificarDadosCidade('João Pessoa (PB)');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});