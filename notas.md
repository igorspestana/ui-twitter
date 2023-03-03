
# 1. Criar projeto

Criar estrutura do projeto
```
 npm create vite@latest
```
Instalar dependências
```
 npm install
```
Rodar
```
 npm run dev
```
### Arquivos e diretórios que devem ser deletados:
- Diretório assets
- App.css
- App.tsx
- index.css

---

<br>

## Vite

Vite é um framework de desenvolvimento de aplicativos da web moderno, rápido e leve que usa o JavaScript moderno para criar aplicativos da web. Ele foi projetado para acelerar o desenvolvimento de aplicativos da web modernos, com suporte a ES modules, TypeScript e JSX. O Vite também oferece recursos avançados como hot module replacement (HMR) e tree shaking.

- Compilação rápida e otimizada: O Vite usa uma abordagem de compilação "just-in-time", que é mais rápida do que a compilação tradicional "just-in-time". Isso significa que as alterações nos arquivos são refletidas instantaneamente no navegador, sem a necessidade de recarregar a página. 

- Suporte ao TypeScript: O Vite oferece suporte nativo ao TypeScript, permitindo que você crie projetos usando esse popular linguagem de programação. 

- Hot Module Replacement (HMR): O HMR permite que você faça alterações em seu código e veja as alterações refletidas no navegador sem precisar recarregar a página. Isso é útil para depuração e desenvolvimento rápido. 

- Suporte às últimas tecnologias web: O Vite suporta as últimas tecnologias web, incluindo ES6, CSS Modules, React, Vue e muito mais. 

- Ferramentas de desenvolvimento integradas: O Vite inclui ferramentas de desenvolvimento integradas como um servidor HTTP embutido, um monitor de recursos e um console JavaScript para depuração.

<br>

# 2. Compilers e Bundlers

Compilers e Bundlers são ferramentas usadas para ajudar a construir aplicações React. Eles são usados para converter código JavaScript, HTML e CSS em um formato que o navegador entenda.

Compiladores são usados para compilar código de linguagens de alto nível (como JavaScript) em código de máquina, que é o que os navegadores entendem. Um exemplo de compilador é o Babel, que é usado para compilar códigos ES6+ (ECMAScript 6+) em códigos ES5, que é suportado por todos os navegadores modernos.

Bundlers são usados para agrupar vários arquivos JavaScript e CSS em um único arquivo. Isso torna mais fácil carregar os arquivos no navegador e também reduz o tempo de carregamento da página. Um exemplo de bundler é o Webpack, que pode ser usado para agrupar vários arquivos JavaScript e CSS em um único arquivo. Além disso, ele também pode ser usado para minificar esses arquivos, reduzindo assim o tempo de carregamento da página.

<br>

# 3. Components

Componentes em React são blocos de código reutilizáveis que encapsulam lógica, estado e estilos. Eles são usados para construir interfaces de usuário complexas e permitem que os desenvolvedores dividam a interface do usuário em partes menores, mais manejáveis.

Exemplos de componentes em React incluem:

- Botões: Um botão é um componente que permite ao usuário realizar uma ação, como clicar em um botão para enviar um formulário ou clicar em um botão para navegar para outra página.

- Formulários: Um formulário é um componente que permite ao usuário inserir informações, como nome, endereço ou número de telefone. Os formulários também podem conter campos de seleção, caixas de verificação e outros elementos interativos.

- Listas: Uma lista é um componente que exibe uma lista de itens. Por exemplo, uma lista pode exibir uma lista de produtos disponíveis para compra ou uma lista de tarefas pendentes.

```
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default MyComponent;
```

<aside>
💡 Components são funções que retornam javascript.

</aside>

<br>

## Estrutura de um componente

- importação de dependências
- importação de componentes
- importação de arquivos
- interface do typescript
- lógica javascript
- declaração da função (pode ser exportada aqui)
  - return com html dentro de ()
    - javascript dentro do html dentro de {}
- exportação da função (pode ser exportada na declaração)

<br>

## Propriedades e Children

Propriedades e children são elementos fundamentais para a criação de componentes reutilizáveis e flexíveis no React.

<br>

### Propriedades

Propriedades (ou props) são dados passados de um componente pai para seu(s) filho(s). Elas permitem que os componentes sejam configuráveis quando forem criados, sem precisar alterar o código do próprio componente. Por exemplo:

```
// Componente Pai
const App = () => { 
  return ( 
    <div> 
      <MyComponent name="John" age={25} /> 
    </div> 
  ); 
};
```
```
 // Componente Filho 
const MyComponent = (props) => { 
   return ( 
     <div> 
       <h1>{props.name}</h1> // John 
       <h2>{props.age}</h2> // 25   </div> ); };
```
<br>

### Children

Children é o conteúdo que é passado entre as tags de um componente. Por exemplo:

const App = () => { return ( <MyComponent> <p>Hello World!</p> </MyComponent> ); };

const MyComponent = (props) => { return ( <div className="my-component"> {props.children} </div> ); };

<br>

# 4. Typescript

Typescript é uma linguagem de programação open-source que fornece suporte ao JavaScript com tipagem estática. É uma extensão do JavaScript que adiciona tipos ao código, permitindo que os desenvolvedores escrevam códigos mais robustos e confiáveis. O Typescript é amplamente utilizado no React, pois oferece vantagens como melhor legibilidade, maior produtividade e maior segurança.

Exemplos de código:

```
// Criando uma interface para definir o tipo de um objeto 
interface Pessoa { 
    nome: string; 
    idade: number; 
} 
```
```
// Criando uma função que recebe um objeto do tipo Pessoa como parâmetro 
function saudar(pessoa: Pessoa) { 
    console.log(`Olá ${pessoa.nome}, você tem ${pessoa.idade} anos`); 
} 
  
```
```
// Criando um objeto do tipo Pessoa 
let p1 = { nome: "João", idade: 20 }; 
```

```
//Typescript
import React from 'react';
 
interface HelloWorldProps {
  name: string;
}
 
export function HelloWorld(props: HelloWorldProps) {
  return <h1>Hello {props.name}!</h1>;
};
```

```
//Javascript 

import React from 'react';

export function HelloWorld(props) {
return <h1>Hello {props.name}!</h1>;
};
```

O TypeScript oferece uma série de recursos que ajudam os desenvolvedores a escrever código JavaScript de forma mais eficiente. Alguns dos principais recursos incluem:

- Tipagem estática: Permite que os desenvolvedores especifiquem o tipo de dados para variáveis, parâmetros e funções. Isso ajuda a evitar erros comuns e garante que o código seja executado corretamente.

- Classes e Interfaces: O TypeScript permite que os desenvolvedores criem classes e interfaces para organizar melhor o código. Isso também facilita a reutilização do código entre projetos diferentes.

- Compatibilidade com ECMAScript: O TypeScript é compatível com as versões mais recentes do ECMAScript, permitindo que os desenvolvedores usem as últimas funcionalidades do JavaScript sem se preocupar com incompatibilidades entre navegadores.

- Ferramentas de depuração: O TypeScript fornece ferramentas de depuração integradas, permitindo que os desenvolvedores encontrem erros rapidamente e corrijam-nos antes da produção.

<br>

# 5. CSS


A aplicação do CSS no React difere da aplicação de CSS em HTML tradicional de várias maneiras. Primeiro, o React usa JavaScript para definir estilos, em vez de usar arquivos externos. Isso significa que os estilos são definidos dentro dos componentes e não precisam ser carregados separadamente. Além disso, o React usa um sistema de nomeação diferente para seus estilos, chamado CSS-in-JS. Isso permite que os desenvolvedores criem estilos dinâmicos e reutilizáveis ​​que podem ser facilmente compartilhados entre componentes. Finalmente, o React também oferece recursos adicionais como animações e temas que não são possíveis com CSS tradicional.

O CSS é usado para estilizar aplicações React, assim como qualquer outra aplicação web. No entanto, o React oferece algumas maneiras diferentes de adicionar estilos à sua aplicação.

Um exemplo de código para adicionar estilos CSS a uma aplicação React é usando o atributo style:

```
// Exemplo 1: Usando style 
import React from 'react'; 
 
  return (    

    <div style={{ borderRadius: 8}}> // Aqui passamos a propriedade css. O primeito cojunto de {} é para indicar que estamos inserindo javascript no html e o segundo é porque a propriedade css é inserida como um objeto e por isso deve estar entre {}      

      <h1>Hello World!</h1>    

    </div>  

  ); } export default MyComponent;
```
```
// Exemplo 2: Usando style 
import React from 'react'; 
 
// Aqui criamos um objeto com as propriedades do CSS que queremos usar. 
const MyComponentStyles = {  

    backgroundColor: '#FF0000',     // A propriedade backgroundColor é o mesmo que background-color no CSS.  

    fontSize: '20px'     // A propriedade fontSize é o mesmo que font-size no CSS.  

  };  

  return (    

    <div style={MyComponentStyles}>       // Aqui passamos o objeto MyComponentStyles para a propriedade style do elemento.      

      <h1>Hello World!</h1>    

    </div>  

  ); } export default MyComponent;
```

Outra maneira de adicionar estilos CSS à sua aplicação React é usando folhas de estilo externas. Para fazer isso, você precisa importar as folhas de estilo em seu arquivo JavaScript e, em seguida, usá-las como um objeto JavaScript: 

```
// Exemplo 1: Usando className

import React from 'react';
import './style.css';
 
const MyComponent = () => {
  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  );
}
 
export default MyComponent;
```

<aside>
💡 Recomendado resetar o CSS removendo o margin e o padding e usando border-box para que o padding não altera a width e a height do elemento.

```
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
</aside>

## REM

É basicamente a represetanção do fontsize da tela. Rem é uma unidade de medida usada no CSS para definir o tamanho de fontes, espaçamentos e outros elementos. É uma abreviação para "root em", que é definido como o tamanho da fonte do elemento raiz (ou seja, o elemento HTML). O tamanho da fonte padrão é 16px, então 1rem equivale a 16px, que é o padrão dos navegadores. Isso significa que, se você definir um elemento com 2rem, ele terá o tamanho de 32px.

<aside>
💡 É recomendado usar o tamanho relativo e não o tamanho fixo porque permite que o usuário consiga nas configurações de acessibilidade do sistema aumentar e diminuir o texto e isso reflete também nos lugares que está sendo usado a medida rem.

```
1rem => 16px
0.25rem => 4px
2rem => 32px
```
</aside>


<aside>
💡 Deixa a fonte mais nítida para browsers baseados no chromium

```
body {
    -webkit-font-smoothing: antialiased;
}
```
</aside>


## Phosphor

Dependência para adicionar icons no react

Para instalar
```
npm i phosphor-react
```

