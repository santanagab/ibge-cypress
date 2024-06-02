#language: pt

Funcionalidade: Visualizar o indicador População por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador de População

Contexto: 

    Dado que eu acesse o site Panorama do Censo 2022

Cenário: Filtrar indicador População região Nordeste
    Quando seleciono o tema "População"
    E seleciono a região "Nordeste" no filtro de localidade
    Então exibe o resultado da população da região Nordeste no "ranking" de grandes regiões

Cenário: Filtrar indicador População estado Paraíba
    Quando seleciono o tema "População"
    E seleciono a região "Paraíba" no filtro de localidade
    Então exibe o resultado da população do estado Paraíba no "ranking" por UF

Cenário: Filtrar indicador População município João Pessoa
    Quando seleciono o tema "População"
    E seleciono a região "João Pessoa (PB)" no filtro de localidade
    Então exibe a página "dados" da população do município de João Pessoa