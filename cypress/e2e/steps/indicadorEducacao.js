/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import EducacaoPage from '../pages/educacaoPage'

const educacaoPage = new EducacaoPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    educacaoPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    educacaoPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    educacaoPage.selecionarRegiao(regiao);
});

Then("exibe o resultado do indicador de educação da região Nordeste no {string} de grandes regiões", (ranking) => {
    educacaoPage.verificarRanking('Nordeste');
});

Then("exibe o resultado do indicador de educação do estado Paraíba no {string} por UF", (ranking) => {
    educacaoPage.verificarRanking('Paraíba');
});

Then("exibe a página {string} da educação do município de João Pessoa", (dados) => {
    educacaoPage.verificarDadosCidade('João Pessoa (PB)');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});