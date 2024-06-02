/// <reference types="cypress" />


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import IndigenasPage from "../pages/indigenasPage";

const indigenasPage = new IndigenasPage();

Given("que eu acesse o site Panorama do Censo 2022", () => {
    indigenasPage.visitar();
});

When("seleciono o tema {string}", (tema) => {
    indigenasPage.selecionarTema(tema);
});

And("seleciono a região {string} no filtro de localidade", (regiao) => {
    indigenasPage.selecionarRegiao(regiao);
});

Then("exibe o resultado da população indígena da região Nordeste no {string} de grandes regiões", (ranking) => {
    indigenasPage.verificarRanking('Nordeste', ranking);
});

Then("exibe o resultado da população indígena do estado Paraíba no {string} por UF", (ranking) => {
    indigenasPage.verificarRanking('Paraíba', ranking);
});

Then("exibe a página {string} da população indígena do município de João Pessoa", (dados) => {
    indigenasPage.verificarDadosCidade('João Pessoa (PB)', dados);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
        return false;
    }
});