# Calculadora

Calculadora simples feita com HTML, CSS e JavaScript puro, capaz de realizar as quatro operações básicas: soma, subtração, multiplicação e divisão.

Este projeto começou como um exercício de curso feito em 2023 e passou por melhorias posteriores, incluindo tratamento de erros, responsividade e ajustes visuais.

## Funcionalidades

- Soma, subtração, multiplicação e divisão de dois números
- Validação de campos vazios ou com valores inválidos (exibe alerta ao usuário)
- Tratamento de divisão por zero (exibe alerta em vez de retornar `Infinity`)
- Layout responsivo, adaptado para telas menores (media query)

## Tecnologias utilizadas

- HTML5
- CSS3 (variáveis CSS, Flexbox, media queries)
- JavaScript (manipulação de DOM)

## Como rodar o projeto

1. Clone o repositório:
   ```
   git clone https://github.com/CaioFranciscoCS/calculadora.git
   ```
2. Abra a pasta do projeto no VS Code.
3. Use a extensão **Live Server** e clique com o botão direito no arquivo `index.html` → **"Open with Live Server"**.

> Obs: os arquivos usam caminhos absolutos (ex: `/assets/css/style.css`), por isso é necessário rodar com um servidor local (como o Live Server) — abrir o `index.html` diretamente no navegador (duplo clique) não carrega os estilos corretamente.

## Melhorias futuras

- Suporte a números decimais (atualmente usa `parseInt`, que arredonda para inteiros)
- Botão de "limpar" campos
