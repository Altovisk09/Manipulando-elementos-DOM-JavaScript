var container = document.querySelector(".container.content");

var container = document.querySelector(".container.content");

container.addEventListener("click", function(event) {
  if (event.target.matches(".likes img")) {
    event.target.classList.toggle("red-heart");
    
    var likeClick = event.target.parentNode.querySelector("b");
    
    if (event.target.classList.contains("red-heart")) {
      likeClick.textContent = "2 likes";
    } else {
      likeClick.textContent = "1 likes";
    }
  }
});





// Aqui, estamos selecionando o elemento HTML que possui a classe .container.content usando document.querySelector().
// Essa linha de código retorna o primeiro elemento que corresponde ao seletor especificado.

// container.addEventListener("click", function(event) {
  
  // Adicionamos um ouvinte de eventos de clique ao elemento container selecionado anteriormente.
// Quando ocorrer um evento de clique dentro do container, a função anônima passada como segundo argumento será executada.

// if (event.target.matches(".likes img")) {
 
  // Verificamos se o elemento clicado (event.target) corresponde ao seletor especificado .likes img.
// O método matches() é usado para verificar se o elemento corresponde a um seletor CSS específico.
// Neste caso, estamos verificando se o elemento clicado é uma imagem dentro de um elemento com a classe .likes.

// event.target.classList.toggle("red-heart");
   
// Se o elemento clicado corresponder ao seletor especificado, alternamos a presença da classe .red-heart na lista de classes do elemento.
// Isso significa que, se a classe estiver presente, ela será removida, e se estiver ausente, ela será adicionada.

// var likeClick = event.target.parentNode.querySelector("b");

// Encontramos o elemento b (elemento de texto em negrito) que é um filho direto do pai do elemento clicado (event.target).
// event.target.parentNode retorna o elemento pai do elemento clicado.

// if (event.target.classList.contains("red-heart")) {
    
// Verificamos se o elemento clicado possui a classe .red-heart após a alternância feita na etapa 4.
// Se a classe estiver presente, atualizamos o conteúdo do elemento likeClick para exibir "2 likes".

// likeClick.textContent = "2 likes";

// } else {
//   likeClick.textContent = "1 likes";
  
//  else { likeClick.textContent = "1 likes"; }:Se a classe .red-heart estiver ausente no elemento clicado, atualizamos o conteúdo do elemento likeClick para exibir "1 likes".
  

