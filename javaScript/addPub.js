// Função para adicionar uma postagem adicional
function adicionarPostagem() {

  // Cria os elementos da postagem adicional
  let newPub = document.createElement("div");
  newPub.className = "card";
 
  let headerPub = document.createElement("div");
  headerPub.className = "card-header";
  let headerContent = document.createElement("div");
  let headerAvatar = document.createElement('img');
  headerAvatar.className = "avatar";
  headerAvatar.src = "/img/avatar-example.png";
  let headerUserName = document.createElement("b");
  headerUserName.textContent = "Ana Julia";
  let headerOptions = document.createElement('img');
  headerOptions.src = "/img/icons/more-vertical.svg";

  let contentPub = document.createElement("div");
  contentPub.className = "card-img";
  let pub = document.createElement("img");
  pub.src="/img/publication_example.jpg";

  let footerPub = document.createElement("div");
  footerPub.className = "card-body";
  let contentFooter = document.createElement("div");
  contentFooter.className = "card-itens";
  let contentLike = document.createElement("div");
  contentLike.className = "likes";
  let heartImg = document.createElement("img");
  heartImg.src  = "/img/icons/heart.svg";
  heartImg.className = "";
  heartImg.width = "24";
  
  let qtdLikes = document.createElement("b");
  qtdLikes.textContent = "1 likes";
  let dataPost = document.createElement("b");
  dataPost.textContent = "Postado no dia: 00/00/0000";

  let commentPub = document.createElement("div");
  commentPub.className = "card-comments";
  let commentP = document.createElement("p");
  let commentUserName = document.createElement("b");
  commentUserName.textContent = "Nome comentarista";
  var commentText = document.createTextNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris");
 
  let formComment = document.createElement('form');
  formComment.className = "form-comments";
  formComment.action = "/comentar"
  formComment.method = "post"
  
  let inputUser = document.createElement("input");
  inputUser.type="text";
  inputUser.hidden = true;
  inputUser.name = "postId";
  inputUser.value = "";

  let inputComment= document.createElement("input");
  inputComment.type="text";
  inputComment.name = "description";
  inputComment.placeholder = "Adicione um comentário...";

  let btnSub = document.createElement("button")
  btnSub.textContent = "Comentar"
  btnSub.type = "submit"


  // Insere os elementos criados na estrutura DOM
  newPub.appendChild(headerPub);
  newPub.appendChild(contentPub);
  newPub.appendChild(footerPub);
  newPub.appendChild(formComment);
  headerPub.appendChild(headerContent);
  headerContent.appendChild(headerAvatar)
  headerContent.appendChild(headerUserName)
  headerPub.appendChild(headerOptions)

  contentPub.appendChild(pub);

  footerPub.appendChild(contentFooter);
  footerPub.appendChild(commentPub);
  contentFooter.appendChild(contentLike);
  contentFooter.appendChild(dataPost);
  contentLike.appendChild(heartImg);
  contentLike.appendChild(qtdLikes);
  commentPub.appendChild(commentP);
  commentP.appendChild(commentUserName);
  commentP.appendChild(commentText);
  
  formComment.appendChild(inputUser);
  formComment.appendChild(inputComment);
  formComment.appendChild(btnSub);

  // Encontra o local onde a postagem adicional será inserida

 let contentMain = document.querySelector(".container.content");
 

  // Insere a postagem adicional antes do botão "Ver Mais"
  contentMain.insertBefore(newPub, buttonVerMais)

}
// Obtém o botão "Ver Mais"
var buttonVerMais = document.getElementById("more");

// Adiciona um ouvinte de eventos para o clique no botão
buttonVerMais.addEventListener("click", adicionarPostagem);