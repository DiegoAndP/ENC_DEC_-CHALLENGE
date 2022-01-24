function codifica() {

	
	if (contem.test(insiraTexto.value) == true) {

		alert('Este programa não aceita letras maiúsculas, com acentos ou números.')

	} else {

		let texto = insiraTexto.value.replace("e", "enter")
			.replace("i", "imes")
			.replace("a", "ai")
			.replace("o", "ober")
			.replace("u", "ufat");

		msgbox.value = texto;	
		return mensagem = texto;
	}
}


function decodifica() {

	if (contem.test(insiraTexto.value) == true) {

		alert('Este programa não aceita letras maiúsculas acentos ou números.')

	} else {

		let texto = insiraTexto.value.replace("ufat", "u")
			.replace("ober", "o")
			.replace("ai", "a")
			.replace("imes", "i")
			.replace("enter", "e");

		msgbox.value = texto;
		return resultado = texto;

	}
}
let resultado = "";
let msgbox = document.getElementById("msg");
let contem = /[A-Z0-9áéíóúÁÉÍÓÚãÃõÕ]/;
let insiraTexto = document.getElementById("input-texto");
let botaoEncripta = document.getElementById("btn-cripto");
let botaoDecripta = document.getElementById("btn-descripto");
botaoDecripta.onclick = decodifica;
botaoEncripta.onclick = codifica;

console.log(resultado);

