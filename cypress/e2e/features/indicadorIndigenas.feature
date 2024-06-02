#language: pt

Funcionalidade: Visualizar o indicador Indígenas por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador da População Indígena

Contexto: 

    Dado que eu acesse o site Panorama do Censo 2022

Cenário: Filtrar indicador Indígenas região Nordeste
    Quando seleciono o tema "Indígenas"
    E seleciono a região "Nordeste" no filtro de localidade
    Então exibe o resultado da população indígena da região Nordeste no "ranking" de grandes regiões

Cenário: Filtrar indicador Indígenas estado Paraíba
    Quando seleciono o tema "Indígenas"
    E seleciono a região "Paraíba" no filtro de localidade
    Então exibe o resultado da população indígena do estado Paraíba no "ranking" por UF

Cenário: Filtrar indicador Indígenas município João Pessoa
    Quando seleciono o tema "Indígenas"
    E seleciono a região "João Pessoa (PB)" no filtro de localidade
    Então exibe a página "dados" da população indígena do município de João Pessoa