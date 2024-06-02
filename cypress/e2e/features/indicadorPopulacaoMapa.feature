#language: pt

Funcionalidade: Visualizar mapa dp indicador População por região
    Descrição: Aqui testamos a filtragem por região (Nordeste, Paraíba e João Pessoa) do indicador da População

Contexto: 

    Dado que eu acesse o site de mapas do Panorama do Censo 2022

Cenário: Filtrar indicador População região Nordeste
    Quando seleciono o tema "População"
    E seleciono a opção de filtro "população residente"
    E seleciono o filtro "Grandes Regiões" no filtro de recorte geográfico
    E seleciono o segundo filtro "Região Nordeste" no filtro de recorte geográfico
    Então exibe o mapa contendo a "totalidade" da população residente da região Nordeste

Cenário: Filtrar indicador População estado Paraíba
    Quando seleciono o tema "População"
    E seleciono a opção de filtro "população residente"
    E seleciono o filtro "Unidades da Federação" no filtro de recorte geográfico
    E seleciono o segundo filtro "Paraíba" no filtro de recorte geográfico
    Então exibe o mapa contendo a "totalidade" da população residente na Paraíba

Cenário: Filtrar indicador População município João Pessoa
    Quando seleciono o tema "População"
    E seleciono a opção de filtro "população residente"
    E seleciono o filtro "Municípios" no filtro de recorte geográfico
    E seleciono o segnudo filtro "João Pessoa (PB)" no filtro de recorte geográfico
    Então exibe o mapa contendo a "totalidade" da população residente do município de João Pessoa