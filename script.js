function logar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    
    if(usuario.value == "admin" && senha.value == "admin"){
    alert("Usuário autenticado!");
    }
    else{
      alert("Usuário ou senha inválidos!");
    }
  }