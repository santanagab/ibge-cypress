#language: pt

Funcionalidade: Visualizar o indicador Educação por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador de Educação

Contexto: 

    Dado que eu acesse o site Panorama do Censo 2022

Cenário: Filtrar indicador Educação região Nordeste
    Quando seleciono o tema "Educação"
    E seleciono a região "Nordeste" no filtro de localidade
    Então exibe o resultado do indicador de educação da região Nordeste no "ranking" de grandes regiões

Cenário: Filtrar indicador Educação estado Paraíba
    Quando seleciono o tema "Educação"
    E seleciono a região "Paraíba" no filtro de localidade
    Então exibe o resultado do indicador de educação do estado Paraíba no "ranking" por UF

Cenário: Filtrar indicador Educação município João Pessoa
    Quando seleciono o tema "Educação"
    E seleciono a região "João Pessoa (PB)" no filtro de localidade
    Então exibe a página "dados" da educação do município de João Pessoa