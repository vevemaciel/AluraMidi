
function clicaTecla(idElemento){
    document.querySelector(idElemento).play();
    
  }
  
  const listaDeTeclas = document.querySelectAll('.input[type=button]');


  for (let digito = 0; digito < listaDeTeclas.length; digito++) {

    const tecla = listaDeTeclas[digito];
    const botao=tecla.classList[1];

    tecla.onclick = function (){
        botao('#value')
    };
    
  }
  '.input[type="tel"]'






/* Faça como eu fiz: Brinque com seletores no JS
PRÓXIMA ATIVIDADE

Praticar ajuda bastante no aprendizado de um novo conceito, assim, é muito importante que você esteja sempre praticando. Pensando nisso, gostaria de propor este pequeno desafio que envolve o que foi visto em aula.

A partir deste código a seguir:

HTML e CSS  */

/* Escreva o código em JavaScript capaz de selecionar o elemento HTML input do tipo telefone:

Como fazer:

Abra o editor de código de sua preferência;
Crie dois arquivos: desafio.html e desafio-estilo.css;
Copie o código acima e cole dentro da tag < body> do arquivo chamado desafio.html e o código CSS no arquivo desafio-estilo.css;
Para resolver este desafio, você pode usar apenas a aba Console da ferramenta DevTools; */



/* para selecionar o elemento HTML input do tipo telefone, podemos utilizar o método querySelector() no JavaScript. Como o input de telefone tem um atributo tipo com valor "tel", podemos usar esse seletor para selecioná-lo.

Segue o código:

javascript
Copy code
const inputTelefone = document.querySelector('input[type="tel"]');
Esse código seleciona o primeiro elemento input que tenha o atributo "type" com o valor "tel". Caso haja mais de um input do tipo telefone, podemos utilizar querySelectorAll() e acessar o input desejado pelo índice do array retornado. */