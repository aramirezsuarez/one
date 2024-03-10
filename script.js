const botonEncriptar = document.querySelector('.boton_encriptar')
const botonDesencriptar = document.querySelector('.boton_dencriptar')
const botonCopiar = document.querySelector('.boton_copiar')
const munieco = document.querySelector('.logo_b')
const contenedor = document.querySelector('.mensaje')
const resultado = document.querySelector('.texto-resultado')

botonEncriptar.onclick = encriptar
botonDesencriptar.onclick = desencriptar
botonCopiar.onclick = copiarTexto

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}


function recuperarTexto() {
  let cajatexto = document.querySelector('.espacio_texto')
  return cajatexto.value
}

function ocultarAdelante() {
  munieco.classList.add('ocultar')
  contenedor.classList.add('ocultar')
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}


function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";
  var i = 0;

  while (i < texto.length) {
    if (texto[i] == " ") {
      textoFinal += " ";
      i++;
    } else if (texto[i] == "a" && texto[i + 1] == "i") {
      textoFinal += "a";
      i += 2;
    } else if (texto.substring(i, i + 5) == "enter") {
      textoFinal += "e";
      i += 5;
    } else if (texto.substring(i, i + 4) == "imes") {
      textoFinal += "i";
      i += 4;
    } else if (texto.substring(i, i + 4) == "ober") {
      textoFinal += "o";
      i += 4;
    } else if (texto.substring(i, i + 4) == "ufat") {
      textoFinal += "u";
      i += 4;
    } else {
      textoFinal += texto[i];
      i++;
    }
  }

  return textoFinal;
}



function copiarTexto() {
  const respuesta = resultado.textContent
  navigator.clipboard
    .writeText(respuesta)
    .then(() => console.log(`Se ha copiado el texto "${respuesta}"`))
    .catch((err) => console.log("Error al copiar el texto:", err))
}

function validarTexto(texto) {
  // Validar que el texto solo contiene letras minúsculas y sin acentos
  return /^[a-z]+$/.test(texto)
}
