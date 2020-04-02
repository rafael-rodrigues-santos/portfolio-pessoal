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

