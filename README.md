# CSS Color Game

Aplicação de prática técnica com foco em manipulação de cores via JavaScript.

## Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript  
- Bootstrap 5.3 (via CDN)

## Objetivo

Este projeto foi desenvolvido como parte do curso FullStack Turbo da TipsCode, com o objetivo de exercitar a lógica de programação, manipulação de DOM e uso de estruturas de repetição em um cenário prático.

## Descrição

A aplicação simula um “jogo de cores” onde, ao clicar em um botão, a cor de fundo da página é alterada de forma aleatória.

São duas abordagens implementadas:

- **index.html** – Utiliza uma lista pré-definida de hexcodes, sorteando um deles com `Math.random()` e `Math.floor()`.
- **hexa.html** – Gera um hexcode do zero utilizando um loop `for`, que monta dinamicamente a string com base em um array de caracteres válidos.

## Observações

- O código contém comentários explicativos para facilitar o entendimento.
- Algumas escolhas de código repetido ou variações de estilo são intencionais, com o propósito de treinar diferentes formas de resolver o mesmo problema.
- O layout foi montado com o uso de Bootstrap, visando um visual simples, limpo e responsivo.

---

### 🔗 Futuras melhorias sugeridas:
- Adicionar efeitos de transição entre cores.
- Criar uma seção de histórico com as cores utilizadas.
- Permitir copiar o hexcode gerado com um clique.
