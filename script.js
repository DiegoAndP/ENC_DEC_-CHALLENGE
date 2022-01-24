let contem = /[A-Z0-9áéíóúÁÉÍÓÚãÃõÕ]/g;
let botoes= document.querySelectorAll(".btn");
//let texto = "";
botoes[0].onclick = codifica;
botoes[1].onclick = decodifica;
//botoes[2].onclick = copia;

function codifica() {

	let insiraTexto = document.querySelectorAll(".text-input");

	let x = insiraTexto[0];
	let y = insiraTexto[1];

	if (contem.test(x.value) == true) {

		alert('Este programa não aceita letras maiúsculas, com acentos ou números.')

	} else {

		texto = x.value.replace("e", "enter")
			.replace("i", "imes")
			.replace("a", "ai")
			.replace("o", "ober")
			.replace("u", "ufat");

		return y.value = texto;	
		
	}
}


function decodifica() {

	let insiraTexto = document.querySelectorAll(".text-input");

	let x = insiraTexto[0];
	let y = insiraTexto[1];

	if (contem.test(x.value) == true) {

		alert('Este programa não aceita letras maiúsculas, com acentos ou números.')
	} else {

		texto = insiraTexto.replace("ufat", "u")
			.replace("ober", "o")
			.replace("ai", "a")
			.replace("imes", "i")
			.replace("enter", "e");

		return y.value = texto;
		
	}
}


