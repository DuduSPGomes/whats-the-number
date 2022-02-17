# Qual é o número?

## Description

**Qual é o número** é um jogo onde você dá palpites de um número. Se seu palpite seja maior que o número definido pelo jogo, uma mensagem dizendo **"É menor"** irá ser mostrada na tela, caso contrário você receberá uma mensagem com **"É maior"**. Quando você acerta o palpite é retornado **"Você acertou!!!"**. Além disso há uma pequena chance de um resultado inesperado com a mensagem de "Erro" e o número 502 será exibido no display de led.

## Implementação

- O estado foi criado a partir deda ideai de React hooks. Com ele é possível criar vários estados com seus respectivos setters.

- Os componentes principais da aplicação foram separados em classes com sua lógica e suas estruturas html.

- A estrutura do componente de Led foi criado baseando-se em duas divs, uma sobre a outra. Seu visual foi pensado utilizando a propriedade border e, os traçados do número foram feitos com divs posicionadas de forma absoluta e rotacionadas com a propriedade transform rotation.

- A lógica para exibição dos númerais com componente de led foi feita com as seguintes etapas:

  - O número preenchido no input é usado como parâmetro css para definir quais bordas darão formato ao número no led.
  - A quantidade de números inputada é utilizada para exibir a mesma quantidade de leds.
  - A cor é definida pela regra de resultados possívels apresentados na descrição.

## Instalação e execução

Instalação das bibliotecas:

```bash
  yarn
```

Empacotamento dos módulos:

```bash
  yarn build
```

Empacotamento dos módulos em tempo real:

```bash
  yarn watch
```

Inicialização do projeto:

```bash
  yarn start
```
