# Desafio: Quartos do Airbnb

Desafio de criar uma página similar a do [Airbnb](https://www.airbnb.com.br/) através do consumo da API de quartos, usando Javascript Vanilla e Flexbox para organizá-los em cards na tela, a partir [deste banco de dados aqui](https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72).

## Resultados esperados
Tela com cards contendo:
* Imagem
* Tipo de propriedade
* Preço

## Para ir além...

Pensando em uma melhor experiência, você ainda pode adicionar outras funcionalidades. Aqui vão alguns exemplos:

* Limite de itens por página - Paginar o resultado da API para que limite o número de items por página para não sobrecarregar o navegador, aumentando assim a performance do site para os usuários;
* Filtro de localização - criar um filtro que exiba apenas os locais baseados na localização que o usuário configurar na busca - vocês precisarão criar uma nova base de dados com localização, desafiem-se!
* API do Google Maps - Utilizando a API do Google Maps, é possível incluir pins onde o imóvel fica localizado no mapa, deixando assim bem mais fácil a visualização geográfica;
* Valor total da estadia - a partir do input de check-in e check-out de usuários, o sistema pode calcular o número de estadias e mostrar uma prévia do valor total de hospedagem.

Explore sua criatividade :) - não esperamos uma tela cópia do Airbnb, ok? Mas quanto mais próximo você chegar, mais desafiador fica de construir em cima e fazer algo unicamente seu!

Lembre-se de trocar ideias, processos e resultados com outras pessoas participantes do programa.
A atividade é individual, mas aproveite as maravilhas de ter um grupo para enriquecer seu conhecimento e entregas <3

Link Github: [https://github.com/georgemaia/airbnb](https://github.com/georgemaia/airbnb)

Link Página: 

---

## Referências

[https://github.com/anawd/quartosdoairbnb](https://github.com/anawd/quartosdoairbnb)

[https://github.com/BrunoSaibert/layout_airbnb](https://github.com/BrunoSaibert/layout_airbnb)

[Tabela de Jogos da Copa com Vue js e fetch API](https://www.youtube.com/watch?v=7LYnM1iG1sY&t=10s)

[Tutorial API Google Maps com JS](https://github.com/Camila-00/Tutorial-GoogleMaps)

[https://github.com/sineto/gama-airbnb](https://github.com/sineto/gama-airbnb)

[https://github.com/wellgdias/gama-assignment-airbnb](https://github.com/wellgdias/gama-assignment-airbnb)

[https://github.com/brunohmduarte/airbnb-gama-academy](https://github.com/brunohmduarte/airbnb-gama-academy)

[https://github.com/AlanCoosta/gama-academy-airbnb](https://github.com/AlanCoosta/gama-academy-airbnb)

[Tutorial Fetch](https://youtu.be/69SGdDf6Aws)

[Requisição com Fetch](https://codepen.io/kardoso/pen/YzyYpJE)

[https://sheety.co/](https://sheety.co/)

[Get started with the Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial?hl=pt-br)

[JSON Bin](https://jsonbin.io/)

[Paginação simples com javascript](https://braziljs.org/artigos/criando-um-sistema-de-paginacao-simples-com-javascript/)

---

Para colocar latitude e longitude na api: utilizei o sheety [¹], então o que fiz foi copiar a api original para uma planilha do google sheet [²] e então adicionei as colunas de latitude e longitude. Como foram poucas, fiz isso na mão, fui ao google maps e peguei geolocalizações aleatórias e não muito distantes.

Para os mapas: no mapa principal, utilizei o autocomplete [³] que dá opções de localidade de acordo com o input que você coloca no campo Localização da minha busca. Ao buscar, ele procura as localizações [4] por perto e olha cada latitude/longitude dos dados para checar [5] se ela está a uma distância de 1,5km de acordo com a localidade que eu busquei no mapa, com isso eu adiciono marcações ao mapa [6] e informações do quarto para cada marcação [7]. No mapa do modal, eu apenas crio um mapa normal para cada modal e adiciono uma marcação.


Referências:
[1]: https://sheety.co/
[2]: https://help.databox.com/article/393-how-to-import-json-data-to-a-google-sheet
[3]: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
[4]: https://developers.google.com/maps/documentation/javascript/reference/geocoder
[5]: https://developers.google.com/maps/documentation/javascript/reference/geometry
[6]: https://developers.google.com/maps/documentation/javascript/markers?hl=pt-br
[7]: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple