<h1 align="center">JavaScript <img src="https://user-images.githubusercontent.com/42941634/158379175-812dcf3b-0d50-4276-a3d1-a672cf1c3466.png"></img></h1>
<h1>Curiosidades:</h1>
<ul>
  <li>Rank 3# mais popular do mundo.</li>
  <li>ES6 - ECMAScript 6 - atualização mais importante.</li>
  <li>Brandan Eich criou a linguagem em 10 dias (1995).</li>
  <li>JavaScript é uma linguagem de roteiro que constrói comportamentos ao website.</li>
</ul>

<h1>Paradigmas da Programação:</h1>
<p>O JS tem as classificações:</p>
<ul>
  <li>Multiparadigma: Programação Orientada a Objetos e Funcional.</li>
  <li>Interpretada ou Compilada (JIT).</li>
  <li>Tipagem Dinâmica: não há necessidade de declaração de tipo.</li>
  <li>Fracamente Tipada: pode haver alteração de tipo na variável já criada.</li>
  <li>Case sensitive: há diferença entre minúsculo e maiúsculo.</li>
</ul>

<h2>Ponto e vírgula ;</h2>
<p>O JavaScript usa ASI (Automatic Semicolon Insertion), no qual ao interpretar/compilar há inserção automática,
 mas existem casos que há necessidade de inserir o ponto e vírgula como por exemplo ao usar a iteração <i>for loop</i>. Para concluir,
TC39 (Grupo de vários colaboradores do ECMA), Google e outros recomendam usar o ponto e vírgula (;).</p>

<h1>Declarações de Variáveis:</h1>
<p>Uma variável é uma forma de armazenar dado que pode ser usado, alterado ou não. Só podem conter letras, numero, underline (underscore) e $. 
E por convenção não devem começar com número.<p/>

<p><strong>Existem convenções para declarações de varíaveis, sendo algumas delas:</strong></p>
<ul>
  <li>camelCase</li>
  <li>snake_case</li>
  <li>kebab-case</li>
  <li>PascalCase</li>
</ul>

> O mais usado é o `camelCase`.

<p>O JavaScript tem as seguinter palavras reservadas, ou seja, não podem ser usadas como nome de variável ou função:</p>

> abstract, else, instanceof, switch, boolean, enum, int, synchronized, break, export, interface, this, byte, extends, long, throw,
> case, false, native, throws, catch, final, new, transient, char, finally, null, true, class, float, package, try, const, for, private,
> typeof, continue, function, protected, var, debugger, goto, public, void, default, if, return, volatile, delete, implements, short, while,
> do, import, static, with, double, in, super.

<p>No JavaScript, existem 3 formas de declaração de variável:</p>
<h2><li> Var: </li></h2>
  <p>Var é uma forma de declaração usada majoritariamente antes da atualização ECMAScript 6. O var é uma declaração de escopo global, isso significa que todas declarações do tipo var tem prioridade ao interpretar/compilar, dessa forma ela pode ser acessada em qualquer
parte do código, até dentro de uma função.<p/>
<p>Por exemplo:</p>

```js
var x = 10;
```

<p>O var não é recomendado a sua utilização pois por não haver bloqueio de escopo, a declaração de várias variáveis var são mais propícios a erros.
 Portanto, a partir do ECMAScript 6, foram introduzidos mais 2 formas de declaração: <i>const</i> e <i>let</i>.</p>

<h2><li> Const: </li></h2>
<p>A declaração com <i>const</i> usa o escopo local e é feito para uma variável que tem um valor que não altera, sempre constante.</p>

```js
const pi = 3.14159;
```

<h2><li> Let: </li></h2>
<p>Também com escopo local a forma de declaração <i>let</i> deferencia do <i>const</i> por ter sua variável que pode ser alterada (variável variável). Um exemplo de uso nela é no <i>for loop</i>.</p>

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

<h1>Tipos e saídas:</h1>
<p>No JS temos tipos casuais de qualquer outras linguagem de programação, mas como se trata de uma linguagem fracamente tipada, esses tipos são ocultos dentro da variável, os primitives são:</p>
<ul>
  <li><strong>Boolean</strong>: true ou false.</li>
  <li><strong>Null</strong>: valor nulo.</li>
  <li><strong>Undefined</strong>: uma variável que não tem valor.</li>
  <li><strong>Number</strong>: número.</li>
  <li><strong>String</strong>: letra, frases.</li>
  <li><strong>Symbol</strong>: usados para fazer propriedades de objetos anônimos.</li>
  <li><strong>Object</strong>: coleção de propriedades.</li>
</ul>

> <p>Mas quando não sabemos o tipo de uma variável, podemos usar o método <i>typeof()</i> que retorna o tipo em string.</p>

<h2>NaN:</h2>
<p>NaN é a abreviação de Not-A-Number é um valor especial que é retornado quando há um método usado errado em uma variável ou uma opração matemática impossível ou indeterminada. </p>

<h2>Truphy-Falsy</h2>
<p>Tryphy e Falsy são termos usados no JS para valores que não são <i>true</i> ou <i>false</i> mas que tem o comportamento igual, como:</p>

```js
console.log(0 == false); //true
console.log("" == false); //true
console.log(1 == true); //true
```

<h2>Conversões</h2>
<p>Em JS, pode ser feita conversões implícitas, até porque a linguagem é dinamicamente tipada, então ao atribuir um valor em uma variável, pode alterar o tipo somente alterando valor (exceto com declaração <i>const</i>). Mas para a legibilidade do código, é sempre importante que o código seja limpo e exposto, portanto, é preferível fazer conversões explicitas, com métodos como:</p>
<ul>
  <li><strong>Number()</strong>: retorna um número.</li>
  <li><strong>String()</strong>: retorna uma string.</li>
  <li><strong>toString()</strong>: retorna também uma string.</li>
  <li><strong>parseFloat()</strong>: de uma string, retorna um float (ponto flutuante).</li>
  <li><strong>parseInt()</strong>: de uma string, retorna um inteiro.</li>
</ul>

<h1>Operadores:</h1>
<p>Para a realização de operações matemáticas, sendo até para o seguimento de lógica, o JavaScript usa alguns simbolos para a representações de operações, como:</p>

<h2>Operadores aritiméticos:</h2>
<ul>
  <li><strong>+</strong> : para adição de numeros, strings e outros.</li>
  <li><strong>-</strong> : para subtração de numeros, strings e outros.</li>
  <li><strong>*</strong> : para multiplicação.</li>
  <li><strong>/</strong> : para divisão.</li>
  <li><strong>%</strong> : para retornar o resto de uma divisão.</li>
  <li><strong>++</strong> : para incremento unitário, como visto no <i>for loop</i> ( i++ ).</li>
  <li><strong>--</strong> : para decremento unitário.</li>
  <li><strong>**</strong> : exponenciação. (ES2016)</li>
</ul>

<h2>Operadores de comparação:</h2>
<ul>
  <li><strong>==</strong> : comparação de variáveis.</li>
  <li><strong>===</strong> : comparação de variáveis e tipo.</li>
  <li><strong>!=</strong> : desigualdade de variáveis.</li>
  <li><strong>!==</strong> : desigualdade de variáveis e tipo.</li>
  <li><strong>></strong> : comparação 'maior que'.</li>
  <li><strong><</strong> : comparação 'menor que'.</li>
  <li><strong>>=</strong> : comparação 'maior ou igual que'.</li>
  <li><strong><=</strong> : comparação 'menor ou igual que'.</li>
</ul>

> Note que há diferença em '==' e '===', onde em um exemplo  `10 == "10"` retorna `true` e `10 === "10"` retorna `false`.

<h2>Operadores lógicos:</h2>
<ul>
   <li><strong>&&</strong> : 'e' (and) lógico.</li>
   <li><strong>||</strong> : 'ou' (or) lógico.</li>
   <li><strong>!</strong> : negação lógica.</li>
</ul>


<h2>Operadores de atribuição:</h2>

<p>Os operadores de atribuição são uma forma implícita de escrever os demais operadores, então quase todos podem ser escritos implicitamente.</p>

<ul>
  <li><strong>=</strong> : igualdade.</li>
  <li><strong>+=</strong> : soma implícita (x += y <-> x = x + y).</li>
  <li><strong>-=</strong> : subtração implícita (x -= y <-> x = x - y).</li>
  <li><strong>*=</strong> : multiplicação implícita (x *= y <-> x = x * y).</li>
  <li><strong>/=</strong> : divisão implícita (x /= y <-> x = x / y).</li>
  <li><strong>%=</strong> : resto implícito (x %= y <-> x = x % y).</li>
  <li><strong>**=</strong> : exponenciação implícita (x **= y <-> x = x ** y).</li>
</ul>

<h1>Condicionais</h1>
<p>Um bloco condicional é uma tomada de decisão do código, se uma expressão for verdadeira, irá tomar um caminho diferente do que se ela for falsa. </p>

<h2>Operador condicional if...else :</h2>

```js
if (condição) {
  instruçao1;
}
else {
  instrução2;
}
```
> Caso o bloco não tenha uma condição booleana (2 possíveis saídas), pode adicionar mais condições somente colocando entre o `if` e `else` uma expressão com `else if`, por exemplo: `else if (condição2) { instruçãoN; }`

<h2>Operador condicional ternário:</h2>
<p></p>