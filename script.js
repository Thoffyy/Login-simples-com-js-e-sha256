function fazerLogin() {
    var pass = document.getElementById('pass').value;
    var hash = 'b7e94be513e96e8c45cd23d162275e5a12ebde9100a425c4ebcdd7fa4dcd897c';
  
    if (hash === sha256(pass)) {
      window.alert('senha correta')
      window.location.href = "inside.html";
    } else {
      window.alert('senha incorreta');
    }
  
    var user = document.getElementById('user').value;
    var hash = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';
  
    if (hash === sha256(user)) {
      window.alert('Bem vindo');
    } else {
      window.alert('Usuario nao existente');
    }
  }
  

  function botao(){
    var op = document.getElementById('opcoes').value
    switch(botao){
    case 1:
    
break;
    case 2:
    
break; 
    case 3:
    
break;
  
  }
}