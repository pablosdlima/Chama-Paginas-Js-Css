function pagina1(id){
	document.getElementById("page1").style.display = "block";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
	
}/*Habilita a page1 e desabilita as demais*/

function pagina2(id){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "block";
	document.getElementById("page3").style.display = "none";

}/*Habilita a page2 e desabilita as demais*/

function pagina3(id){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "block";

}/*Habilita a page3 e desabilita as demais*/

