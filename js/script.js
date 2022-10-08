function sumar (valor) {
    //#region definir variables
    var total = 0;	
    valor = parseInt(valor); 
    total = document.getElementById('spTotal').innerHTML;
	//#endregion
   //#region calculos
    total = (total == null || total == undefined || total == "") ? 0 : total;
	

    total = (parseInt(total) + parseInt(valor));
	//#endregion
   
    document.getElementById('spTotal').innerHTML = total;
}