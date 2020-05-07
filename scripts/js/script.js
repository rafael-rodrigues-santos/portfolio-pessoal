function loadHeader() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("menu").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../header.html", true);
    xhttp.send();
  }

  function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../footer.html", true);
    xhttp.send();
  }

  function loadHome() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../home.html", true);
    xhttp.send();
  }

  function loadAbout() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../about.html", true);
    xhttp.send();
  }

  function loadPortfolio() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../portfolio.html", true);
    xhttp.send();
  }

  function loadContact() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../contact.html", true);
    xhttp.send();
  }

  function loadSuccess() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../succes.html", true);
    xhttp.send();
  }


  // const form = document.querySelector('#form');
  // const email = document.querySelector('.email');
  // const erro = document.querySelector('.erro');
  
 

  // function validName() {
  //   const name = document.querySelector('#name').value;
  //   const input = document.querySelector('#name');
  //   const erro = document.querySelector('.erro');

  //   if (name == '' || name.length < 3) { 
  //     erro.style.display = "block";
  //     input.classList.add('invalido');
  //     // erroName.innerHTML = 'Errado';
  //     return false;
  //   }else {
  //     erro.style.display = "block";
  //     input.classList.add('invalido');
  //   }
  // }

  // const form = document.querySelector('#form');
  // const name = document.querySelector('name');
  // const email = document.querySelector('email')
  // const tel = document.querySelector('tel');
  // const erro = document.querySelector('.erro');  

  // function validateForm(event){
  //   const target = event.target;
  //   if (!target.checkValidity()){
  //     target.classList.add('invalido');
  //     target.nextElementSibling.innerText = target.validationMessage;
  //   } else {
  //     target.classList.remove('invalido');
  //     target.nextElementSibling.innerText = '';
  //   }
  // }

  // form.addEventListener('change', validateForm);

  const radioTel = document.querySelector('#tel');
  const radioEmail = document.querySelector('#email');
  const divWhats = document.querySelector('.whats');
  const retorno = document.getElementsByName('contact-return');

  function exbirDiv () {
    this.classList.replace('desativado', 'ativado');
  }

// if (radioTel.value == 'tel'){
//   console.log('clicou');
// }

function teste (){

  if (radioTel.checked == true) {
    console.log(divWhats)
    exbirDiv();
  } else {
    console.log("Telefone")
  }
  
  // for (let i = 0; i < retorno.length; i++){
  //   if (retorno[i].checked) {
      
  //     console.log('Selecionou: ', retorno[i].value);
      
  //     return retorno[i].value;
  //   }
  //   if (retorno[i].value == 'tel') {
  //     exbirDiv();
  //   } 
  // }
  // return console.log('deu errado');
}

if (radioTel.onfocus){
  console.log("focus")
}
  
  

  




  // function handleKeyUp(event) {
  //   const target = event.target;
  //   const erro = document.querySelector('.erro');

  //   if(email == '' || !target.checkValidity()) {
  //     target.classList.add('invalido');
  //     // erro.innerHTML = 'Errado';
  //     target.nextElementSibling.innerText = target.validationMessage;
  //   } else {
  //     target.classList.remove('invalido');
  //     target.nextElementSibling.innerText = "";
  //   }
  // }

  // form.addEventListener('change', handleKeyUp);
  // validName();
  // form.addEventListener("blur", validName);
  
