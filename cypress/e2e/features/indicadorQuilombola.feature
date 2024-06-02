#language: pt

Funcionalidade: Visualizar o indicador Quilombola por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador de população quilombola

Contexto: 

    Dado que eu acesse o site Panorama do Censo 2022

Cenário: Filtrar indicador quilombola região Nordeste
    Quando seleciono o tema "Quilombola"
    E seleciono a região "Nordeste" no filtro de localidade
    Então exibe o resultado da população quilombola da região Nordeste no "ranking" de grandes regiões

Cenário: Filtrar indicador quilombola estado Paraíba
    Quando seleciono o tema "Quilombola"
    E seleciono a região "Paraíba" no filtro de localidade
    Então exibe o resultado da população quilombola do estado Paraíba no "ranking" por UF

Cenário: Filtrar indicador quilombola cidade João Pessoa
    Quando seleciono o tema "Quilombola"
    E seleciono a região "João Pessoa (PB)" no filtro de localidade
    Então exibe a página "dados" da população quilombola da cidade João Pessoa



