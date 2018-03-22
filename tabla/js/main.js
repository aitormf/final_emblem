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


var competiciones = [
	{"id":"Amistosa", "nombre": "Amistosa","logo":"vs.png"},
	{"id":"MKU", "nombre": "MKU", "logo":"universal.png"},
	{"id":"SNL", "nombre": "SNL", "logo":"snl.png"}
];

var equipos = [
	{"id":"FE1", "nombre": "Final Emblem Ifrit","logo":"final_emblem_ifrit.png"},
	{"id":"FE2", "nombre": "Final Emblem Seraphim", "logo":"final_emblem_seraphim.png"}
];











var crearEquipos = function(){
	for(i=0; i< equipos.length; i++){

		$( ".idEquipos" ).append( '<option value="'+i+'">'+equipos[i].id+'</option>' );
	}
}

var crearCompeticiones = function(){
	for(i=0; i< competiciones.length; i++){

		$( "#competicionNombre" ).append( '<option value="'+i+'">'+competiciones[i].id+'</option>' );
	}
}




var getJugadores = function(prefix){
	jugadores = [{}];
	jugadores[0].puntos = $(prefix+"Penalizacion").val();
	for (i = 1; i < 7; i++) {
		idNombre = prefix+i+"Nombre"
		idPuntos = prefix+i+"Puntos"
		nombre = $(idNombre).val();
		puntos = $(idPuntos).val();
    	jugadores[i]={"nombre":nombre,"puntos":puntos};
	}
	return jugadores;

}

var getTabJugadores = function (){
	var jugadores = {};
	jugadores.locales = getJugadores("#local");
	jugadores.visitantes = getJugadores("#visitante");
	 
	return jugadores;

}

var calcTotal = function(jugadores){
	var total = 0;
	for (i=0; i < jugadores.length; i++){
		if (jugadores[i].puntos != ""){
			total += parseInt(jugadores[i].puntos);
		}
	}
	return total
}

var setJugadores = function (jugadores, prefix){
	$("#penalizacionPuntos"+prefix).html(jugadores[0].puntos);
	for (i=1; i < jugadores.length; i++){
		idNombre = "#jugador"+i+prefix+ " .nombre";
		idpuntos = "#jugador"+i+prefix+ " .puntos";
		$(idNombre).html(jugadores[i].nombre);
		$(idpuntos).html(jugadores[i].puntos);
	}
}

var setEquipo= function(equipo, prefix){
	$("#nombre"+prefix).html(equipo.nombre);
	$("#escudo"+prefix+" img").attr("src", "img/equipos/"+equipo.logo);
}


$(document).ready(function(){

	crearEquipos();
	crearCompeticiones();
    $("#save").click (function (event) {
    	var jugadores = getTabJugadores();

    	var totalLocal = calcTotal(jugadores.locales);
    	var totalVisitante = calcTotal(jugadores.visitantes);

    	setJugadores(jugadores.locales, "Local");
    	setJugadores(jugadores.visitantes, "Visitante");
    	
    	$("#totalPuntosLocal").html(totalLocal);
    	$("#totalPuntosVisitante").html(totalVisitante);

    	var equipoLocal = equipos[parseInt($("#localNombre").val())];
    	setEquipo(equipoLocal, "Local");

    	var equipoVisitante = equipos[parseInt($("#visitanteNombre").val())];
    	setEquipo(equipoVisitante, "Visitante");


    	modal.style.display = "none";

    });
});