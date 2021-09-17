function Buscar() {
  var valorElemento1 = document.getElementById("nota1");
	var valor1 = valorElemento1.value;
	var nota1 =parseInt(valor1)
	
	
	var valorElemento2 = document.getElementById("nota3");
	var valor2 = valorElemento2.value;
	var nota2 =parseInt(valor2)
	
	var valorElemento3 = document.getElementById("nota3");
	var valor3 = valorElemento3.value;
	var nota3 =parseInt(valor3)
	
	var valorElemento4 = document.getElementById("nota4");
	var valor4 = valorElemento4.value;
	var nota4 =parseInt(valor4)
	
	var valorElemento5 = document.getElementById("nome");
	var nome1 = valorElemento5.value;

	var Resultado = (nota1+nota2+nota3+nota4) / 4;
		
	var elementoMédiaFinal = 	document.getElementById("Resultado")
	var média= nome1  + " Sua média foi " + Resultado;
	elementoMédiaFinal.innerHTML = média;
	console.log(média)
} 



