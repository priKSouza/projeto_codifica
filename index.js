document.getElementById("botao-enviar").addEventListener("click", inicia);

function inicia(event) {
  event.preventDefault();
  var cd = document.querySelector('input[name="opt"]:checked').value;
  console.log(cd);
  var texto = document.getElementById("texto").value;
  var inc = parseInt(document.getElementById("inc").value);

  var item = document.querySelector('input[name="cdf"]:checked').value;
  console.log(item);
  if (cd == "1") {
    if (inc == 0) {
      alert("Defina um incremento!");
    }
    if (item == "1") {
      var codificar = Codificar(inc, texto);
      document.getElementById("texto").value = codificar;
    } else {
      var decodificar = Decodificar(inc, texto);
      document.getElementById("texto").value = decodificar;
    }
  } else {
    if (item == "1") {
      var codificar = btoa(texto);
      document.getElementById("texto").value = codificar;
    } else {
      var decodificar = atob(texto);
      document.getElementById("texto").value = decodificar;
    }
  }
}

function Codificar(offset, texto) {
  var resultCodifica = [];
  var positiva = offset >= 0;
  for (var i = 0; i < texto.length; i++) {
    if (texto.charCodeAt(i) > 64 && texto.charCodeAt(i) < 91) {
      var offsetTurn = positiva ? -65 : 65;
      resultCodifica.push(
        String.fromCharCode(
          ((str.charCodeAt(i) + offset + offsetTurn) % 26) + 65
        )
      );
    } else if (texto.charCodeAt(i) > 96 && texto.charCodeAt(i) < 123) {
      var offsetTurn = positiva ? -97 : -19;
      resultCodifica.push(
        String.fromCharCode(
          ((texto.charCodeAt(i) + offset + offsetTurn) % 26) + 97
        )
      );
    } else {
      resultCodifica.push(String.fromCharCode(texto.charCodeAt(i)));
    }
  }
  return resultCodifica.join("");
}

function Decodificar(offset, texto) {
  var resultD = [];
  var positiva = offset >= 0;
  for (var i = 0; i < texto.length; i++) {
    if (texto.charCodeAt(i) > 64 && texto.charCodeAt(i) < 91) {
      var offsetTurn = positiva ? 65 : -65;
      resultD.push(
        String.fromCharCode(
          ((texto.charCodeAt(i) - offset + offsetTurn) % 26) + 65
        )
      );
    } else if (texto.charCodeAt(i) > 96 && texto.charCodeAt(i) < 123) {
      resultD.push(
        String.fromCharCode(((texto.charCodeAt(i) - offset - 19) % 26) + 97)
      );
    } else {
      resultD.push(String.fromCharCode(texto.charCodeAt(i)));
    }
  }
  return resultD.join("");
}
