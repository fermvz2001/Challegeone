var EncriptaMensaje = document.querySelector ("#input-texto");
var btnEncripta     = document.querySelector ("#btn-encriptar");
var btnDesencripta  = document.querySelector ("#btn-desencriptar");
var btnCopia        = document.querySelector ("#btn-copy");
var Respuesta       = document.querySelector ("#msg");
EncriptaMensaje.focus();
	/*Las "llaves" de encriptación que utilizaremos son las siguientes:
	La letra "e" es convertida para "enter"
	La letra "i" es convertida para "imes"
	La letra "a" es convertida para "ai"
	La letra "o" es convertida para "ober"
	La letra "u" es convertida para "ufat"
	solo letras minusculas
	no se permite acentuacion de las palabras*/
	function Encriptar ()  {
  		var eMensaje = EncriptaMensaje.value;
  		var reemplazar1 = eMensaje.replace(/["e"]/g, "enter");
  		var reemplazar2 = reemplazar1.replace (/["i"]/g, "imes");
  		var reemplazar3 = reemplazar2.replace (/["a"]/g, "ai");
  		var reemplazar4 = reemplazar3.replace (/["u"]/g, "ufat");
  		var reemplazar5 = reemplazar4.replace (/["o"]/g, "ober");
  		Respuesta.value = reemplazar5;

	}

	function Desencriptar ()  {
		var dMensaje = EncriptaMensaje.value;
		const enter = /enter/g;
    	const imes  = /imes/g;
    	const ai    = /ai/g;	
    	const ufat  = /ufat/g;
    	const ober  = /ober/g;
    	var reemplazar1 = dMensaje.replace    (enter, "e");
    	var reemplazar2 = reemplazar1.replace (imes, "i");
    	var reemplazar3 = reemplazar2.replace (ai, "a");
    	var reemplazar4 = reemplazar3.replace (ufat, "u");
    	var reemplazar5 = reemplazar4.replace (ober, "o");
    	Respuesta.value = reemplazar5;

    }

	function copiartexto () {
    	var resultado = Respuesta.value;
    	navigator.clipboard.writeText(resultado);
    	Respuesta.select ();

    }

  	const transactionForm = document.getElementById("transactionForm");
	transactionForm.addEventListener("submit", function() {
		event.preventDefault ();

    });

  btnEncripta.onclick = Encriptar;
  btnDesencripta.onclick = Desencriptar;
  btnCopia.onclick = copiartexto;



