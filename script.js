window.addEventListener("load", function() {
    document.querySelector(".userName").innerHTML = "<strong>Nome Usuário</strong>";
    
    // document.querySelector('input[name="name"]').placeholder = "Digite seu primeiro nome"; Alternativa

    let inputs = document.getElementsByName("name");
  inputs[0].placeholder = "Digite seu primeiro nome";
});



