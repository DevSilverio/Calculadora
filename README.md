# Calculadora com Histórico de Cálculos
Este projeto é uma calculadora com histórico de cálculos. A interface HTML inclui um display e botões para operações. A lógica da calculadora é implementada em JavaScript, que também gerencia o histórico de cálculos armazenado no localStorage. A estilização é feita através de CSS externo.

## index.html

1. **DOCTYPE, html, head e body**: Estes são elementos padrão de qualquer documento HTML.
2. **Link para CSS**: Há links para arquivos CSS externos para estilização.
3. **Script para layout.js**: Este é o script principal que contém a lógica da calculadora.
4. **Elementos da Calculadora**: Estes são os elementos HTML que compõem a interface da calculadora, incluindo o display e os botões.
5. **Modal de Histórico**: Este é um modal que é exibido quando o usuário clica no botão de histórico. Ele mostra o histórico de cálculos realizados.

## Controller/script/layout.js

1. **Inicialização de Variáveis**: Inicializa as variáveis que serão usadas para armazenar o input atual e o histórico de cálculos.
2. **Eventos de Botão**: Define o que acontece quando cada botão é pressionado. Isso inclui adicionar números e operadores ao input atual, calcular o resultado quando o botão de igual é pressionado, e limpar o input quando o botão 'C' é pressionado.
3. **Exibição do Histórico**: Mostra o modal de histórico quando o botão de histórico é pressionado.

## Controller/script/history.js

1. **Adicionar Cálculo ao Histórico**: Esta função adiciona um cálculo ao histórico, que é armazenado no localStorage do navegador.
2. **Exibir Histórico**: Esta função exibe o histórico de cálculos no modal de histórico.

## View/styles/stylescss.css

1. **Estilização Geral**: Define a estilização geral para os elementos HTML e BODY.
2. **Estilização da Calculadora**: Define a estilização para a calculadora, incluindo o tamanho, cor de fundo, borda e padding.
3. **Estilização do Display**: Define a estilização para o display da calculadora, incluindo o tamanho, cor de fundo e alinhamento dos itens.
4. **Estilização dos Botões**: Define a estilização para os botões da calculadora, incluindo o tamanho da fonte, padding, borda, cor de fundo e transição de cor de fundo.
5. **Estilização do Modal de Histórico**: Define a estilização para o modal de histórico, incluindo a exibição, posição, z-index, largura, altura, overflow e cor de fundo.

## View/styles/fontGoogle.css

1. **Fontes Lato**: Define vários pesos e estilos para a fonte Lato, que é importada do Google Fonts.
2. **Símbolos Materiais**: Define a fonte para os símbolos materiais.

