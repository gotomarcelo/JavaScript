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

<h3>Ponto e vírgula ;</h3>
<p>O JavaScript usa ASI (Automatic Semicolon Insertion), no qual ao interpretar/compilar há inserção automática,
 mas existem casos que há necessidade de inserir o ponto e vírgula como por exemplo ao usar a iteração <i>for loop</i>. Para concluir,
TC39 (Grupo de vários colaboradores do ECMA), Google e outros recomendam usar o ponto e vírgula (;).</p>

<h1>Declarações de Variáveis:</h1>
<p>Uma variável é uma forma de armazenar dado que pode ser usado, alterado ou não. Só podem conter letras, numero, underline e $. 
E por convenção não devem começar com número.<p/>

<p><strong>Existem convenções para declarações de varíaveis, sendo algumas delas:</strong></p>
<ul>
  <li>camelCase</li>
  <li>snake_case</li>
  <li>kebab-case</li>
  <li>PascalCase</li>
</ul>

<p>O JavaScript tem as seguinter palavras reservadas, ou seja, não podem ser usadas como nome de variável ou função:</p>

> abstract, else, instanceof, switch, boolean, enum, int, synchronized, break, export, interface, this, byte, extends, long, throw,
> case, false, native, throws, catch, final, new, transient, char, finally, null, true, class, float, package, try, const, for, private, 
> typeof, continue, function, protected, var, debugger, goto, public, void, default, if, return, volatile, delete, implements, short, while,
> do, import, static, with, double, in, super.


<p>No JavaScript, existem 3 formas de declaração de variável:</p>
<h3><li> Var: </li></h3>
  <p>Var é uma forma de declaração usada majoritariamente antes da atualização ECMAScript 6. O var é uma declaração de escopo global, 
isso significa que todas declarações do tipo var tem prioridade ao interpretar/compilar, dessa forma ela pode ser acessada em qualquer
parte do código, até dentro de uma função.<p/>
<p>Por exemplo:</p> 

```js
var x = 10;
```

<p>O var não é recomendado a sua utilização pois por não haver bloqueio de escopo, a declaração de várias variáveis var são mais propícios a erros.
 Portanto, a partir do ECMAScript 6, foram introduzidos mais 2 formas de declaração: `const` e `let`</p>



