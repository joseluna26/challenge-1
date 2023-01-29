const textAEncriptar = document.querySelector(".text-aencriptar");
const textresultado = document.querySelector(".text-resultado");
const botcopiar = document.querySelector(".btn-copiar");
botcopiar.classList.add("ocultar");
textAEncriptar.focus();

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
  const textoEncriptado = encriptar(textAEncriptar.value)
  textresultado.value = textoEncriptado;
  textAEncriptar.value = "";
  textresultado.style.backgroundImage = "none";
  botcopiar.classList.add("mostrar-boton-copiar");
}

function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada
}

// -----------------------------------------------------------------------------

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textAEncriptar.value)
  textresultado.value = textoEncriptado;
  textAEncriptar.value = "";
  textresultado.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada
}

// función que permite la validación de minúsculas, espacios y acentos
function minusculas(e){
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghijklmnñopqrstuvwxyz ";

  especiales = [8, 13];
  tecla_especial = false
  for(var i in especiales){
    if(key == especiales[i]){
      tecla_especial = true;
      break;
    }
  }
  
  if(letras.indexOf(tecla) == -1 && !tecla_especial){
    alert("Solo minúsculas y sin acentos");
    return false;
  }
}
// termina validación de minúsculas, espacios y acentos


document.querySelector(".btn-copiar").addEventListener("click", function(){
  let copytext = document.querySelector(".text-resultado").value;
  navigator.clipboard.writeText(copytext).then(()=>{
    textAEncriptar.value = copytext;
    textresultado.value = "";
  });
});

function limpiar(){
  textresultado.value = "";
  textAEncriptar.value = "";
  document.getElementById("tresultado").style.backgroundImage = "url('img/muneco.png')";
  botcopiar.classList.add("ocultar");
  textAEncriptar.focus();
}
