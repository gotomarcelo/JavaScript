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
<p>NaN é a abreviação de Not-a-Number é um valor especial que é retornado quando há um método usado errado em uma variável ou uma opração matemática impossível ou indeterminada. </p>

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

> Note que há diferença em '==' e '===', onde em um exemplo `10 == "10"` retorna `true` e `10 === "10"` retorna `false`.

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
} else {
  instrução2;
}
```

> Caso o bloco não tenha uma condição booleana (2 possíveis saídas), pode adicionar mais condições somente colocando entre o `if` e `else` uma expressão com `else if`, por exemplo: `else if (condição2) { instruçãoN; }`

<h2>Operador condicional ternário:</h2>
<p>É uma forma reduzida de se escrever if...else, mas bem prática:</p>

```js
idade >= maioridade ? "Pode dirigir" : "Não pode dirigir";
```

<p>Esse condicional é chamado dessa forma pois em sua construção, ele tem 3 "operadores", o primeiro (>=) é a condição da função, o segundo são as possíveis saídas da conmdição (?) e o terceiro é a tomada de caminhos (:).</p>
<p>Escrever o operador ternário pode ser considerado uma má prática, principalmente a quesito de legibilidade, mas quando trabalhamos com alguma biblioteca/framework vemos bastante esse condicional. Então para tirar limpo a discussão, é considerado uma má prática em arquivos grandes, ou com mais saídas condicionárias, então para pequenas expressões pode ser utilizado, veja um exemplo com mais de duas saídas:</p>

```js
isAnalfabeto
  ? "Não é obrigado a votar"
  : idade >= 18 && idade <= 70
  ? "Obrigado a votar"
  : "Não é obrigado a votar";
```

<p>Note que há uma maior dificuldade de leitura da condição.</p>

<h1>Saídas do JavaScript</h1>
<p>Quando codificamos um script queremos saber o seu comportamento, seja de uma condicional, de um algoritmo. O JavaScript é uma linguagem que anda de lado a lado com o navegador, aliás ela foi criada para dar comportamento(script) a pagina web, portanto, segue abaixo formas de saída do JavaScript:</p>

<h2><li>innerHTML</li></h2>
<p>É uma forma de escrever uma saída dentro do HTML:</p>

```js
<p id="demo"></p>

<script>
  document.getElementById("demo").innerHTML = 5 + 6;
</script>
```

<p>Dessa forma ele pega o elemento pelo id e coloca o reasultado do valor dentro desse.</p>

<h2><li>document.write()</li></h2>
<p>Forma de escrever no HTML sem precisar pegar ID ou elemento:</p>

```js
<script>document.write(5 + 6);</script>
```

<p>Lembrando que caso seja chamado essa saída depois do HTML estar carregado, ele vai sobrepor todo o documento ficando apenas a saída.</p>

<h2><li>window.alert()</li></h2>
<p>Ao utilizar essa saída, o navegador irá mostrar uma janela sobreposta como popup em cima do header.</p>

```js
<script>window.alert(5 + 6);</script>
```

<h2><li>console.log()</li></h2>
<p>Essa é uma forma de saída que não é mostrada no HTML, mas no console do navegador (quando usamos a ferramenta de depuração)</p>

```js
<script>console.log(5 + 6);</script>
```

> Quando estamos aprendendo a codificar o JavaScript, não vamos direto ao HTML, fazemos o algotitmo em um IDE, portanto para fazermos que a saída do código saia no terminal, usamos o <a href="https://nodejs.org/en/">Node.JS</a>. E portanto é usado a saída `console.log()`.

<h2>Formas de saídas</h2>
<p>Ao escrevermos uma saída, normalmente queremos que essa saia legível, não mostrando somente o resultado, então há formas de escrever a saída:</p>

<h3>Concatenação de string</h3>

```js
const nome = "Marcelo";
console.log("O meu nome é " + nome ".");
```

<h3>Template String</h3>
<p>É uma forma mais prática de escrever a saída de uma variiável, basta envolver a string toda com acentos graves e o placeholder (variável) é envolta com ${ }, ficando mais prático para escrever.</p>

```js
const nome = "Marcelo";
console.log(`O meu nome é ${nome}.`);
```

> Apesar de ser usado em console.log() o template string é também usado pesadamente em <a href="https://styled-components.com">styled components</a>.

<h1>Funções</h1>
<p>Uma função é um bloco de códigos designados a fazer uma determinada tarefa, e só é executada quando chamada.</p>
<p>Existem 4 maneiras de se fazer uma função em JavaScript, são essas:</p>
<h2><li>Declaração de função:</li></h2>

É a forma mais básica e intuitiva de se fazer uma função, é necessário chamar a palavra-chave `function`, seguido pelo nome da função, entre parentesis os argumentos e a expressão a ser executada entre chaves com o retorno.

<p>Em todas os exemplos de funções vamos escrever uma função que se retorna o seu quadrado.</p>

```js
function square(x) {
  return x * x;
}
```

<h2><li>Expressão de função:</li></h2>

Essa forma de criar uma função, é expressa, inicialmente se declara uma variável que será o nome da função, e após o operador de igualdade, é chamado a palavra chave `function` com o(s) argumento(s) entre parentesis, e a expressão a ser executada entre chaves.

```js
const square = function (x) {
  return x * x;
};
```

<h2><li>Expressão de Arrow function:</li></h2>

Essa forma não é necessário chamar a palavra-chave `function`, mas a delcaração se dá pela seta (=>), e a expressão a ser executada entre chaves.

```js
const square = (x) => {
  return x * x;
};
```

<h2><li>Expressão concisa de Arrow function:</li></h2>
<p>É a forma de escrever uma função em uma linha só em JavaScript, é uma forma simplificada da anterior dita.</p>

```js
const square = (x) => x * x;
```

> Note que ao fazermos uma expressão de função, ocorre o caso do Hoisting (escopo global), que é o mesmo caso da declaração de variável `var`. E a forma concisa de arrow function é a que mais vemos ao trabalharmos com qualquer biblioteca/framework.

<h1>Listas (Array) e Matrizes</h1>
<p>Assim como várias outras linguagens de programação, em JavaScript é definido uma array com os colchetes [ ]. E matrizes, da mesma forma, mas com dois conjuntos de colchetes [ ][ ].</p>
<p>Os elementos são separados entre vígulas:</p>

```js
let lista = [1, 2, 3, 4];
let matriz = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
```

<h2>Funções em JavaScript para listas:</h2>
<h3><strong><li>Push</li></strong></h3>
<p>A função push adiciona um elemtento no final da lista:</p>

```js
lista.push("elemento");
console.log(lista);
>> [1,2,3,4,"elemento"]
```

<h3><strong><li>Pop</li></strong></h3>
<p>Ao contrário do push, a função .pop faz com que o último elemento da lista seja removido, e não precisa de nenhum elemento dentro da função, ela é vazia:</p>

```js
lista.pop();
console.log(lista);
>> [1,2,3,4]
```

<h3><strong><li>Concac</li></strong></h3>
<p>Derivado do nome concatenação, essa função faz com que duas listas sejam unidas:</p>

```js
let lista1 = [1,2,3];
let lista2 = [4,5,6];
const listaUnida = lista1.concat(lista2);
console.log(listaUnida):
>> [1,2,3,4,5,6]
```

<h3><strong><li>Filter</li></strong></h3>
<p>Como seu nome já diz, essa função faz um "filtro" em cima da lista em estudo.</p>
<p>Por exemplo, vamos criar uma função que retorna se o numero é par:</p>

```js
function ehNumeroPar(valor) {
  if (valor % 2 == 0) {
    return valor;
  }
}
```

<p>Agora vamos aplicar o filtro na lista:</p>

```js
const listaPar = lista.filter(ehNumeroPar);
console.log(listaPar);
>> [2,4]
```

<h3><strong><li>FindIndex</li></strong></h3>
<p>Esse tipo de função, não vai retornar os numeros de retorno da função, mas o seu índice.</p>
<p>No entando, se colocarmos essa função como elemento da função findindex, temos como retorno:</p>

```js
const indiceNumeroPar = lista.findIndex(ehNumeroPar);
console.log(indiceNumeroPar);
>> 1
```

> Note que essa função só retorna o primeiro valor true, ou seja, ele fecha a iteração, retornando o primeiro valor encontrado. E caso não tenha nenhum valor que retorne, o resultado dará `-1`.

<h3><strong><li>LastIndexOf</li></strong></h3>
<p>Essa função só diferencia da anterior pelo fato de que essa função faz a iteração de trás para frente, então usando o exemplo anterior, temos:</p>

```js
const ultimoIndiceNumeroPar = lista.lastIndexOf(ehNumeroPar);
console.log(ultimoIndiceNumeroPar);
>> 5
```

<h3><strong><li>ForEach</li></strong></h3>
<p>Na tradução de seu nome temos "para cada", que define bem o comportamento dessa função, para cada elemento, essa função retorna o valor alterado dependendo da função estabelecida.</p>
<p>Vamos pegar aquela função já escrita anteriormente, de elevar o numero ao seu quadrado, e fazermos uma pequena alteração:</p>

```js
function square(x) {
  console.log(x * x);
}
```

<p>E vamos aplicar a função:</p>

```js
lista.forEach(square);
>> 1
>> 4
>> 9
>> 16
```

<h3><strong><li>Shift</li></strong></h3>
<p>Com o comportamento bem parecido com o pop, essa função elimina o primeiro elemento da lista, sem precisar salvar em uma nova variável:</p>

```js
lista.shift();
console.log(lista);
>> [2,3,4]
```

<h3><strong><li>UnShift</li></strong></h3>
<p>Em contrapartida da função anterior, a função UnShift adiciona o primeiro termo:</p>

```js
lista.unshift(1);
console.log(lista);
>> [1,2,3,4]
```

<h3><strong><li>Sort</li></strong></h3>
<p>A função sort faz com que os elementos da lista seja redistribuidos de forma da classificação do unicode, onde numeros vem antes de letras, ou seja, ordenar.</p>

```js
const listaDesorganizada = ["z", "@", "a", -1, 20, 1, 5];
const listaOrdenada = listaDesorganizada.sort();
console.log(listaOrdenada);
>> [-1, 1, 20, 5, '@', 'a', 'z']
```

<h3><strong><li>Splice</li></strong></h3>
<p>Essa função serve tanto para adicionar elementos ou excluir, em determinado indice indicado:</p>

```js
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
```

Onde `indice` é um inteiro onde deve iniciar o procedimento na lista, `deleteCount` é um inteiro onde informa a quantidade de elementos após o índice, deve ser excluidos, e o `elemento1` até o `elementoN` são os valores a serem adicionados. Por exemplo:

```js
const lista3 = [0, 1, 2, 3];
lista3.splice(3, 1, "três");
console.log(lista3) >> [0, 1, 2, "três"];
```

> Caso não seja informado nenhum valor para ser trocado, a função irá somente deletar os elementos, e existe também a forma de adicionar um elemento sem que exclua algum valor simplismente zerando o `deleteCount`.

<h1>Laços e iterações</h1>

Laços e iterações são formas de executar o mesmo método repetidas vezes, mas com valores diferentes. Temos como um exemplo, a função dita mais acima de lista, a `Array.forEach()`, mas não sendo somente para lista, mas para qualquer outro tipo de entrada, com sucessão de valores.

Existem Vários tipos de iterações, são esses:

<h2><li>For:</li></h2>
<p>A iteração For, é uma forma de ocorrer uma condição, até que ela seja falsa:</p>

```js
for (let i = 0; i <= 2; i++){
  console.log(i)
};
>> 0
>> 1
>> 2
```

<h2><li>do...while:</li></h2> 
<p>Esse tipo de iteração fará com o que ocorra o laço até que a condição seja falsa:</p>

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 2);
>> 1
>> 2
```

<h2><li>while:</li></h2>   
<p>O while é uma forma mais prática do do..while, essa iteração tem a seguinte construção:</p>

```js
let n = 0;
while (n < 2) {
  n++;
  console.log(n)
}
>> 1
>> 2
```

> Tome cuidado com a condição do while, se for uma condição que não há alteração, essa iteração irá ter um laço infinito, como `while(true){console.log(1)};` assim irá mostrar no console 1 para sempre.

<h1>Callbacks</h1>
<p>Quando estudamos funções em JavaScript, não foi mencionado, mas funções são objetos em JS. E podemos também chamar uma função dentro de uma função, usando a função como parâmetro. Dessa forma podemos modificar um fluxo de hierarquia no Javascript.</p>

<p>Por exemplo, vamos fazer uma função de soma e uma função de multiplicação:<p>

```js
const x = 10;
const y = 20;

function soma(numero1,numero2) {
  return(numero1 + numero2);
}

let somado = soma(x, y);

function square(numero) {
  console.log(numero * numero);
}

square(somado);
>> 900
```

<p>Perceba que criamos as funções de cima para baixo, na sua ordem de hierarquia, mas e se construirmos uma função que depende de um determinado resultado de outra função?</p>

```js
const mensagem = function () {
  console.log("Essa mensagem é exibida depois de 3 segundos");
};

setTimeout(mensagem, 3000);
```

<p>Dessa forma é apontado que o script só vai executar a função primeira após o término da contagem. O exemplo acima descreve um callback assíncrono, pois espera um resultado para prosseguir.</p>
<p>Mas então, como ficaria uma ultilização de callback no primeiro exemplo?</p>

```js
const x = 10;
const y = 20;

function mostrarResultado(num) {
  console.log(`O resultado foi ${num}`);
}

function soma(numero1, numero2, callback) {
  callback(numero1 + numero2);
  return(numero1 + numero2);
}

function square(numero, callback) {
  callback(numero * numero);
}

let somado = soma(x, y, mostrarResultado);
square(somado, mostrarResultado);

>> O resultado foi 30
>> O resultado foi 900
```

<p>O exemplo acima descreve um callback síncrono.</p>

> O termo callback também pode ser escrito como `cb`.

<h1>Funções Importantes</h1>

<h2><li>Map( ):</li></h2> 
<p>A função map( ) é uma função que seu parâmetro é um callback, que recebe como entrada uma array e retorna também uma array, só que com os elementos trabalhados um a um. É um método parecido com o forEach( ), mas esse método em estudo retorna uma array ao invés de numeros soltos, e pode ter uma entrada em index também:</p>

```js
const list = [ 'o', 'l', 'a'];
list.map((elemento, index) => {
  console.log(`O índice da letra ${elemento} é ${index}`);
});
>> O índice da letra o é 0
>> O índice da letra l é 1
>> O índice da letra a é 2
```

> Note que esse método não funciona com listas vazias, e é necessário criar uma variável caso queira os valores alterados em uma lista.

<h2><li>Reduce( ):</li></h2>

O método `lista.reduce()` tende a iterar por cada elemento de uma lista e converter essa lista toda em um único elemento, sendo esse elemento qualquer tipo. Um exemplo é:

```js
function calculaMediaLista(lista) {
  const somaNotas = lista.reduce((acumulador, total) => total + acumulador, 0);
  return somaNotas / lista.length;
}
const notas = [4,9,10];
console.log(calculaMediaLista(notas));

>> 7.666666666666667
```

> Assim como `map()`, o método recebe como parametro, uma função. Nesse caso acima, foi construído essa função.

<h1>Objetos</h1>
<p>Seguindo com uma programação POO (Programação Orientada a Objeto) temos um termo que ainda não estudamos, o objeto.</p>
<p>Um objeto é como se fosse uma lista, mas mais complexa/completa, onde ela é como chave e valor no JavaScript. Por exemplo:</p>

```js
const cliente = {
  nome: "Marcelo",
  idade: 23,
  cpf: "11111111111",
  email: "marcelo@email.com",
};
```

Podemos ver que ela se parece muito como uma matriz, mas ao invés de chamarmos um `console.log(cliente[0][1]); >> Marcelo`, podemos fazer a operação:

```js
console.log(cliente.nome);
>> Marcelo
```

<p>Ou seja, não sendo necessário proucurar a linha da matriz que contém o nome do cliente, basta sabermos que existe uma chave com o valor chamado de "nome".</p>

<h2>Adicionando chave-valor no objeto:</h2>
<p>Para adicionar uma chave e valor em um objeto já existente é bem simple, basta chamar o nome do objeto com uma chave nova e igualando a um valor desejado:</p>

```js
cliente.telefone = "(98)9999-9999";
```

<p>E para verificarmos se a adição da chave-valor foi feita, basta imprimirmos todo o objeto:</p>

```js
console.log(cliente);
>> {nome: 'Marcelo', idade: 23, cpf: '11111111111', email: 'marcelo@email.com', telefone: '(98)9999-9999'}
```

<h2>Deletando chave-valor no objeto:</h2>

Para deletar uma chave em um objeto, basta colocar a palavra `delete` na frente:

```js
delete cliente.telefone;
>> {nome: 'Marcelo', idade: 23, cpf: '11111111111', email: 'marcelo@email.com'}
```

<h2>Adicionando lista no valor do objeto:</h2>
<p>Supondo que seja necessário dois numeros de telefone para o cadastro do objeto cliente, podemos adicionar dois numeros de telefone em uma mesma chave:</p>

```js
cliente.telefone = ["(98) 99999-9999", "(98) 99999-9998"];
```

> Note que caso faça o `console.log(cliente)` a saída terá na chave telefone: `telefone: Array(2)`, que condiz que é uma lista com dois elementos.

<h2>Composição no Objeto:</h2>
<p>É possível criar um objeto dentro de um objeto, por exemplo, vamos adicionar um pet ao objeto cliente:</p>

```js
cliente.pet = {
  nome: "nina",
  animal: "gato",
};
```

E então para visuzalizarmos o pet do cliente, basta colocamos mais um valor na sua chamada: `console.log(cliente.pet.nome)`.

> Note que os métodos de adicionar, deletar e fazer lista é o mesmo procedimento.

<h2>Funções no Objeto:</h2>
<p>Um objeto também pode ter um método, uma função, basta fazermos assim:</p>

```js
const cliente = {
  nome: "Marcelo",
  idade: 23,
  cpf: "11111111111",
  email: "marcelo@email.com",
  saldo: 0,

  depositar: function (valor) {
    this.saldo += valor;
  },
};
```

Onde depositar é uma função acumuladora, para o saldo. E para chamar a função, basta escrever `cliente.saldo(30)`.

<h2>Copiar Objeto:</h2>

Caso seja necessário fazer uma cópia de um objeto em JavaScript, não podemos fazer `const copiaCliente = cliente;`, dessa forma ele só vai fazer com que a nova variável aponte para o objeto `cliente`, dessa forma, caso haja alguma modificação em `copiaCliente`, ela também será feita em `cliente`.

<p>Para realizar uma cópia, usamos o método:</p>

```js
const copiaCliente = object.create(cliente);
```

<h2>Métodos de Objetos:</h2>

<p>No JavaScript, temos alguns métodos que podemos utilizar em nossos algoritmos, são esses:</p>

<li>Object.keys(obj)</li>
<p>Esse método retorna todos os nomes das chaves</p>

```js
Object.keys(cliente);
>> ['nome', 'idade', 'cpf', 'email', 'telefone']
```

<li>Object.values(obj)</li>
<p>Esse método retorna todos os valores do objeto:</p>

```js
Object.values(cliente);
>> ['Marcelo', 23, '11111111111', 'marcelo@email.com', Array(2)]
```

<li>Object.entries(obj)</li>
<p>Faz com que o retorno seja uma lista de listas, de todas as chaves e valores do objeto:</p>

```js
console.log(Object.entries(cliente));
>> [
  [ 'nome', 'Marcelo' ],
  [ 'idade', 23 ],
  [ 'cpf', '11111111111' ],
  [ 'email', 'marcelo@email.com' ],
  [ 'telefone', [ '(98) 99999-9999', '(98) 99999-9998' ] ]
]
```

<h1>Sintaxe de espalhamento (Spread Operator)</h1>

A sintaxe de espalhamento ou spread operator é uma forma simples de adicionar itens em uma lista, combinar listas ou espalhar uma lista dentro de uma função. Para utilizar, basta escrever três pontos `(...)` e próximo o objeto/lista/expressão iterativa para expandir em uma lista de argumentos.

<h2>Para que usar?</h2>
Vamos dizer que teremos que fazer um algoritmo que sempre nos retorne o número máximo:

```js
console.log(Math.max(1,3,5));
>> 5
```

Mas e se a entrada for uma lista?

```js
console.log(Math.max([1,3,5]));
>> NaN
```

Observe que muitas funções não aceitam a entrada sendo uma lista, então nesse caso, vamos usar o spread operator:

```js
console.log(Math.max(...[1,3,5]));
>> 5
```

Sabendo disso, existem várias outras maneiras de como usar o spread operator a nosso favor, como:

<h3>Copiar lista:</h3>

```js
lista = [1, 2, 3];
copiaLista = [...lista];
```

<h3>Concatenar lista:</h3>

```js
lista1 = [1, 2, 3];
lista2 = [4, 5, 6];
combinada = [...lista1, ...lista2];
```

e várias outras formas...

<h1>Protótipos</h1>
Quando começamos os nossos estudos em JavaScript, ouvimos falar que é uma linguagem baseada em protótipos, mas o que isso quer dizer?

<h2>Mecanismos de herança:</h2>
Protótipos são mecanismos no qual um objetos JavaScript herda de um objeto pai ou passa para o objeto filho. É bem simples, podemos fazer um objeto que tenha um método qualquer, e não há necessidade de refazermos esse mesmo método em outro objeto, basta criarmos um protótipo no qual esse segundo objeto vai herdar o método do primeiro objeto, é isso que chamamos de objeto pai e objeto filho.

O JS tem um objeto anônimo que pode ser referenciado pelo `Object.prototype`, na qual possui varias propriedades internas em que uma delas é a `constructor` que aponta de volta pra o `prototype`.v

> Lembre-se que em JS, toda função é um objeto.

Vamos aos exemplos, vamos criar um objeto que é uma impressora, uma impressora recebe o documento a ser imprimido e ler para verificar se está tudo certo:

```js
function impressora(documento) {
  this.documento = documento;
}
```

Após ler o documento recebido, ela tem que imprimir:

```js
impressora.prototype.imprimir = function () {
  console.log(this.documento);
};
```

Agora, vamos jogar um documento para imprimirmos:

```js
const pdf = new impressora("Documento para impressão.");
pdf.imprimir();

>> Documento para impressão.
```

> Perceba que a função imprimir pega emprestado, ou melhor dizendo, aponta para um método já criado e adiciona outro método, de imprimir.

> A função `contructor` foi referenciada quando chamamos a constante `pdf` como um `new impressora()`.

<h3>Super</h3>
Super é uma palavra-chave para acessar um objeto pai naquele objeto filho:

```js
class Carro {
  constructor(marca) {
    this.marca = marca;
  }
}

class Modelo extends Carro {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
```

<h1>Orientação a Objetos</h1>
