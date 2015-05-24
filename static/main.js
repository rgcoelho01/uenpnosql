
function post() {

    //guarda os radio buttons em 3 arrays
    var languageTypeRadios = document.getElementsByName('languagetype');
	var schemaRadios = document.getElementsByName('schema');
	var workloadRadios = document.getElementsByName('workload');
	
	//guarda o formulário e 2 strings (que auxiliam a formar a url final) e operationcount (para se calcular o número de rads e writes)
	var form = document.getElementById("form");
	var language;
	var schema;
	var operationcount = parseFloat(document.getElementById("operationcount").value);
					
	//pega o valor do radio button "language" marcado e guarda na variável language
	for (var i = 0, length = languageTypeRadios.length; i < length; i++)
	{
			if (languageTypeRadios[i].checked) 
			{
				language = languageTypeRadios[i].value;
				break;
			}
	}
	
	//pega o valor do radio button "schema" marcado e guarda na variável schema
	for (var i = 0, length = schemaRadios.length; i < length; i++)
	{
			if (schemaRadios[i].checked) 
			{
				schema = schemaRadios[i].value;
				break;
			}
	}
	
	//pega o valor do radio button "workload" marcado e calcula o valor de reads e writes associado ao tipo de workload
	for (var i = 0, length = workloadRadios.length; i < length; i++)
		{
			if (workloadRadios[i].checked) 
			{
				if(workloadRadios[i].value == "a"){
					document.getElementById("writes").value = parseInt(0.5 * operationcount);
					document.getElementById("reads").value = parseInt(0.5 * operationcount);
					}
					
				if(workloadRadios[i].value == "b"){
					document.getElementById("writes").value = parseInt(0.9 * operationcount);
					document.getElementById("reads").value = parseInt(0.05 * operationcount);
					}
				
				if(workloadRadios[i].value == "c"){
					document.getElementById("writes").value = 0;
					document.getElementById("reads").value = operationcount;
					}
				
				if(workloadRadios[i].value == "w"){
					document.getElementById("writes").value = operationcount;
					document.getElementById("reads").value = 0;
					}
				break;
			}
		}
	
	//language e schema não podem ser nulos
	if( (language == null) || (schema == null))
		alert("Voce deve selecionar um esquema e uma linguagem");
		
	else{
		
		//a url a ser acessada pelo atributo "action" do formulário é a concatenação dos valores do radio button "language" e "schema" marcados
		var finalUrl = language + schema + ".appspot.com";
		//o atributo "action" recebe como valor a url a ser acessada, depois é submetido
		//alert(finalUrl + " deve receber os parametros operationcount, languagetype, workload via POST e executar o benchmark");
		
		form.action = finalUrl;
		$(document.body).append(form);
		form.submit();
	}
}
