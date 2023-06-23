var container = document.querySelector(".container.content");
var isRedHeart = false 

container.addEventListener("click", function(event) {
  if (event.target.matches(".likes img")) {
    var heartClick = event.target;
    var likeText = event.target.parentNode.querySelector("b");
    
    if (isRedHeart) {
      heartClick.src = "/img/icons/heart.svg";
      isRedHeart = false;
      likeText.textContent = "1 likes";
    } else {
      heartClick.src = "/img/red-heart.png";
      isRedHeart = true;
      likeText.textContent = "2 likes";
    }
  }
});




// A variavel isRedHeart está inicialmente definida como falsa,
// o que faz com que o else sejá executado, alterando o src e 
// alterando a variavel isRedHeart para true. Dessa forma no 
// proxímo clique o if será executado alterando o src para o
// original e em seguida tornando a variável isRedHeart falsa 
// novamente. Basicamente é um loop baseado no valor booleano
// da variável isRedHeart. 