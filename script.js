const botonEncriptar = document.querySelector('.boton_encriptar')
const botonDesencriptar = document.querySelector('.boton_dencriptar')
const botonCopiar = document.querySelector('.boton_copiar')
const munieco = document.querySelector('.logo_b')
const contenedor = document.querySelector('.mensaje')
const resultado = document.querySelector('.texto-resultado')

botonEncriptar.onclick = encriptar
botonDesencriptar.onclick = desencriptar
botonCopiar.onclick = copiarTexto

function encriptar() {
  ocultarAdelante()
  let cajatexto = recuperarTexto()
  resultado.textContent = encriptarTexto(cajatexto)
}

function desencriptar() {
  ocultarAdelante()
  let cajatexto = recuperarTexto()
  resultado.textContent = desencriptarTexto(cajatexto)
}

function recuperarTexto() {
  let cajatexto = document.querySelector('.espacio_texto')
  return cajatexto.value
}

function ocultarAdelante() {
  munieco.classList.add('ocultar')
  contenedor.classList.add('ocultar')
}

function encriptarTexto(mensaje) {
  let texto = mensaje
  let textoFinal = ''

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'a') {
      textoFinal = textoFinal + 'ai'
    } else if (texto[i] == 'e') {
      textoFinal = textoFinal + 'enter'
    } else if (texto[i] == 'i') {
      textoFinal = textoFinal + 'imes'
    } else if (texto[i] == 'o') {
      textoFinal = textoFinal + 'ober'
    } else if (texto[i] == 'u') {
      textoFinal = textoFinal + 'ufat'
    } else {
      textoFinal = textoFinal + texto[i]
    }
  }
  return textoFinal
}

function desencriptarTexto(mensaje) {
  let texto = mensaje
  let textoFinal = ''

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'a') {
      textoFinal = textoFinal + 'a'
      i = i + 1
    } else if (texto[i] == 'e') {
      textoFinal = textoFinal + 'e'
      i = i + 4
    } else if (texto[i] == 'i') {
      textoFinal = textoFinal + 'i'
      i = i + 3
    } else if (texto[i] == 'o') {
      textoFinal = textoFinal + 'o'
      i = i + 3
    } else if (texto[i] == 'u') {
      textoFinal = textoFinal + 'u'
      i = i + 3
    } else {
      textoFinal = textoFinal + texto[i]
    }
  }

  return textoFinal
}

function copiarTexto() {
  const respuesta = resultado.textContent
  navigator.clipboard
    .writeText(respuesta)
    .then(() => console.log(`Se ha copiado el texto ${respuesta}`))
    .catch((err) => console.log(err))
}
