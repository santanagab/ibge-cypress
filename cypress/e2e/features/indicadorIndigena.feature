#language: pt

Funcionalidade: Visualizar o indicador Indígena por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador de população

Contexto: 

    Dado que eu acesse o site Panorama do Censo 2022

Cenário: Filtrar indicador Indígena região Nordeste
    Quando seleciono o tema "Indígena"
    E seleciono a região "Nordeste" no filtro de localidade
    Então exibe o resultado da população indígena da região Nordeste no "ranking" de grandes regiões

Cenário: Filtrar indicador Indígena estado Paraíba
    Quando seleciono o tema "Indígena"
    E seleciono a região "Paraíba" no filtro de localidade
    Então exibe o resultado da população indígena do estado Paraíba no "ranking" por UF

Cenário: Filtrar indicador Indígena cidade João Pessoa
    Quando seleciono o tema "Indígena"
    E seleciono a região "João Pessoa (PB)" no filtro de localidade
    Então exibe a página "dados" da população indígena da cidade João Pessoa