#language: pt

Funcionalidade: Visualizar o indicador Domicílios por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador de Domicílios

Contexto: 

    Dado que eu acesse o site Panorama do Censo 2022

Cenário: Filtrar indicador Domicílios região Nordeste
    Quando seleciono o tema "Domicílios"
    E seleciono a região "Nordeste" no filtro de localidade
    Então exibe o resultado do indicador de domicílios da região Nordeste no "ranking" de grandes regiões

Cenário: Filtrar indicador Domicílios estado Paraíba
    Quando seleciono o tema "Domicílios"
    E seleciono a região "Paraíba" no filtro de localidade
    Então exibe o resultado do indicador de domicílios do estado Paraíba no "ranking" por UF

Cenário: Filtrar indicador Domicílios município João Pessoa
    Quando seleciono o tema "Domicílios"
    E seleciono a região "João Pessoa (PB)" no filtro de localidade
    Então exibe a página "dados" de domicílios do município de João Pessoa