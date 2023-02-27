
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
Limpando arquivos
- diretório assets
- App.css
- App.tsx
- index.css

---

## Vite

Vite é um framework de desenvolvimento de aplicativos da web moderno, rápido e leve que usa o JavaScript moderno para criar aplicativos da web. Ele foi projetado para acelerar o desenvolvimento de aplicativos da web modernos, com suporte a ES modules, TypeScript e JSX. O Vite também oferece recursos avançados como hot module replacement (HMR) e tree shaking.

- Compilação rápida e otimizada: O Vite usa uma abordagem de compilação "just-in-time", que é mais rápida do que a compilação tradicional "just-in-time". Isso significa que as alterações nos arquivos são refletidas instantaneamente no navegador, sem a necessidade de recarregar a página. 

- Suporte ao TypeScript: O Vite oferece suporte nativo ao TypeScript, permitindo que você crie projetos usando esse popular linguagem de programação. 

- Hot Module Replacement (HMR): O HMR permite que você faça alterações em seu código e veja as alterações refletidas no navegador sem precisar recarregar a página. Isso é útil para depuração e desenvolvimento rápido. 

- Suporte às últimas tecnologias web: O Vite suporta as últimas tecnologias web, incluindo ES6, CSS Modules, React, Vue e muito mais. 

- Ferramentas de desenvolvimento integradas: O Vite inclui ferramentas de desenvolvimento integradas como um servidor HTTP embutido, um monitor de recursos e um console JavaScript para depuração.


# 2. Compilers e Bundlers

Compilers e Bundlers são ferramentas usadas para ajudar a construir aplicações React. Eles são usados para converter código JavaScript, HTML e CSS em um formato que o navegador entenda.

Compiladores são usados para compilar código de linguagens de alto nível (como JavaScript) em código de máquina, que é o que os navegadores entendem. Um exemplo de compilador é o Babel, que é usado para compilar códigos ES6+ (ECMAScript 6+) em códigos ES5, que é suportado por todos os navegadores modernos.

Bundlers são usados para agrupar vários arquivos JavaScript e CSS em um único arquivo. Isso torna mais fácil carregar os arquivos no navegador e também reduz o tempo de carregamento da página. Um exemplo de bundler é o Webpack, que pode ser usado para agrupar vários arquivos JavaScript e CSS em um único arquivo. Além disso, ele também pode ser usado para minificar esses arquivos, reduzindo assim o tempo de carregamento da página.


---

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
💡 Components são funções que retornam javascript

</aside>

## Propriedades e Children

Propriedades e children são elementos fundamentais para a criação de componentes reutilizáveis e flexíveis no React.


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

### Children

Children é o conteúdo que é passado entre as tags de um componente. Por exemplo:

const App = () => { return ( <MyComponent> <p>Hello World!</p> </MyComponent> ); };

const MyComponent = (props) => { return ( <div className="my-component"> {props.children} </div> ); };


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

O TypeScript oferece uma série de recursos que ajudam os desenvolvedores a escrever código JavaScript de forma mais eficiente. Alguns dos principais recursos incluem:

- Tipagem estática: Permite que os desenvolvedores especifiquem o tipo de dados para variáveis, parâmetros e funções. Isso ajuda a evitar erros comuns e garante que o código seja executado corretamente.

- Classes e Interfaces: O TypeScript permite que os desenvolvedores criem classes e interfaces para organizar melhor o código. Isso também facilita a reutilização do código entre projetos diferentes.

- Compatibilidade com ECMAScript: O TypeScript é compatível com as versões mais recentes do ECMAScript, permitindo que os desenvolvedores usem as últimas funcionalidades do JavaScript sem se preocupar com incompatibilidades entre navegadores.

- Ferramentas de depuração: O TypeScript fornece ferramentas de depuração integradas, permitindo que os desenvolvedores encontrem erros rapidamente e corrijam-nos antes da produção.