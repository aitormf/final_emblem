// Get the modal
var modal = document.getElementById('configure');

// Get the button that opens the modal
var btn = document.getElementById("config");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var getJugadores = function (){
	var jugadores = {};
	jugadores.locales = [{}];
	jugadores.visitantes = [{}];
	for (i = 1; i < 7; i++) {
		idNombre = "local"+i+"Nombre"
		idPuntos = "local"+i+"Puntos"
		nombre = $(idNombre).val();
		puntos = $(idPuntos).val();
    	jugadores.locales[i]={"nombre":nombre,"puntos":puntos};
	} 
	console.log(jugadores);

}


$(document).ready(function(){
	console.log("aaaa");
    $("#save").click (function (event) {
    	console.log("aaaa");
    	equipo = $("#localNombre").val();
    	console.log(equipo);
    	$("#nombreLocal").html(equipo);
    });
});