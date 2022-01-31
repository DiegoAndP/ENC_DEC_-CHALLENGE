const contem = /[A-Z0-9áéíóúÁÉÍÓÚãÃõÕ]/g;
const botoes= document.querySelectorAll(".btn");
botoes[0].onclick = codifica;
botoes[1].onclick = decodifica;
botoes[2].onclick = copia;
botoes[3].onclick = moveTexto;

function codifica() {

	event.preventDefault();

	let insiraTexto = document.querySelectorAll(".text-input");

	let x = insiraTexto[0];
	let y = insiraTexto[1];

	if (contem.test(x.value) == true) {

		alert('Este programa não aceita letras maiúsculas, com acentos ou números.')

	} else {

		texto = x.value.replace(/e/g, "enter")
			.replace(/i/g, "imes")
			.replace(/a/g, "ai")
			.replace(/o/g, "ober")
			.replace(/u/g, "ufat");

		return y.value = texto;	
		
	}
}


function decodifica() {

	event.preventDefault();

	let insiraTexto = document.querySelectorAll(".text-input");

	let x = insiraTexto[0];
	let y = insiraTexto[1];

	if (contem.test(x.value) == true) {

		alert('Este programa não aceita letras maiúsculas, com acentos ou números.')
	} else {

		texto = x.value.replace(/ufat/g, "u")
			.replace(/ober/g, "o")
			.replace(/ai/g, "a")
			.replace(/imes/g, "i")
			.replace(/enter/g, "e");

		return y.value = texto;
		
	}
}

function copia(){

	let copia = document.querySelectorAll(".text-input")[1].select();
	let copiado = document.execCommand('copy');

	if (copiado == true){

		alert("valor copiado para clipboard");
	}
}

function moveTexto(){

	recebeTexto = document.querySelectorAll(".text-input")[1];
	document.querySelectorAll(".text-input")[0].value = recebeTexto.value;
	recebeTexto.value = "";
}