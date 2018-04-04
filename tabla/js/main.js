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

var fondos = [
	{"nombre": "basico", "img": "background.png"},
	{"nombre": "Castillo Bowser", "img": "bowser.png"},
	{"nombre": "Hyrule", "img": "hyrule.png"},
	{"nombre": "Metro Campana", "img": "metro_campana.jpg"},
	{"nombre": "Senda SNES", "img": "senda_snes.jpg"}
];


memoria={"local":"LocalSelect", "visitante":"VisitanteSelect"};

var competiciones = [
	{"id":"Amistosa", "nombre": "Amistosa","logo":"vs.png"},
	{"id":"MKU", "nombre": "MKU", "logo":"universal.png"},
	{"id":"SNL", "nombre": "SNL", "logo":"snl.png"}
];

var equipos = [
	{"id":"FE", "nombre": "Final Emblem","logo":"final_emblem.png", "size":"30px", "padding":"15px"},
	{"id":"FE1", "nombre": "Final Emblem Ifrit","logo":"final_emblem_ifrit.png", "size":"30px", "padding":"15px"},
	{"id":"FE2", "nombre": "Final Emblem Seraphim", "logo":"final_emblem_seraphim.png", "size":"24px", "padding":"21px"},
	//{"id":"AW", "nombre": "Apocalypsis Warriors", "logo":"Apocalypsis_Warriors.jpg", "size":"27px", "padding":"18px"},
	{"id":"Arcadia", "nombre": "Arcadia", "logo":"arcadia.png", "size":"30px", "padding":"15px"},
	{"id":"AWW", "nombre": "Army Wii", "logo":"Army_Wii.png", "size":"30px", "padding":"15px"},
	{"id":"AG", "nombre": "Atenea Gamers", "logo":"none2.png", "size":"30px", "padding":"15px"},
	{"id":"Aurora", "nombre": "Aurora", "logo":"Aurora.png", "size":"30px", "padding":"15px"},
	{"id":"BD", "nombre": "Baphomet's Dolls", "logo":"baphomets_dolls.png", "size":"30px", "padding":"15px"},
	{"id":"BL", "nombre": "BannanaLegion", "logo":"BannanaLegion.png", "size":"30px", "padding":"15px"},
	{"id":"BW", "nombre": "Black Wolves", "logo":"black_wolves.png", "size":"30px", "padding":"15px"},
	{"id":"BS", "nombre": "Blue Shells", "logo":"Blue_Shells.png", "size":"30px", "padding":"15px"},
	{"id":"CB", "nombre": "Champi Brothers", "logo":"Champi-Brothers.png", "size":"30px", "padding":"15px"},
	{"id":"CK", "nombre": "Cool Karts", "logo":"cool_karts.png", "size":"30px", "padding":"15px"},
	{"id":"Community", "nombre": "Community", "logo":"Community.png", "size":"30px", "padding":"15px"},
	//{"id":"DK", "nombre": "Dark Soldiers", "logo":"Dark_Soldiers.png", "size":"30px", "padding":"15px"},
	{"id":"DC", "nombre": "Deluxe Cruisers", "logo":"Deluxe_Cruisers.png", "size":"30px", "padding":"15px"},
	{"id":"DS", "nombre": "Deluxe of Switchss", "logo":"Deluxe_of_Switchs.png", "size":"30px", "padding":"15px"},
	{"id":"D", "nombre": "Ðynamite", "logo":"Dynamite.png", "size":"30px", "padding":"15px"},
	//{"id":"E", "nombre": "Elegance", "logo":"elegance.png", "size":"30px", "padding":"15px"},
	{"id":"FA", "nombre": "Fatal Aces", "logo":"FatalAces.png", "size":"30px", "padding":"15px"},
	{"id":"FDP", "nombre": "Frères de poulpe", "logo":"Freres_de_poulpe.png", "size":"30px", "padding":"15px"},
	{"id":"GG", "nombre": "Galactic Gamers", "logo":"galactic_gamers.png", "size":"30px", "padding":"15px"},
	{"id":"GC", "nombre": "Game Central", "logo":"game_central.png", "size":"30px", "padding":"15px"},
	{"id":"GT", "nombre": "Gravity Team", "logo":"GravityTeam.png", "size":"30px", "padding":"15px"},
	{"id":"HB", "nombre": "Hearts ßrothers", "logo":"Heartsßrothers.png", "size":"30px", "padding":"15px"},
	{"id":"HB", "nombre": "High Definition", "logo":"HighDefinition.png", "size":"30px", "padding":"15px"},
	{"id":"ID", "nombre": "Ink Dragons", "logo":"Ink_Dragons.png", "size":"30px", "padding":"15px"},
	{"id":"ID", "nombre": "Ink Drivers", "logo":"Ink_Drivers.png", "size":"30px", "padding":"15px"},
	{"id":"JPP", "nombre": "Jean Pierre-Pernault", "logo":"jpp.png", "size":"28px", "padding":"17px"},
	//{"id":"K", "nombre": "Koopas Atómicos", "logo":"koopas_atomicos.png", "size":"30px", "padding":"15px"},
	{"id":"LA", "nombre": "Legends of the Apocalypsis", "logo":"legends_of_the_apocalipsis.jpg", "size":"21px", "padding":"24px"},
	{"id":"MS", "nombre": "Mandarina de Schrödinger", "logo":"MS.png", "size":"22px", "padding":"23px"},
	{"id":"M", "nombre": "Merciless", "logo":"merciless.png", "size":"30px", "padding":"15px"},
	{"id":"MKR", "nombre": "MKR", "logo":"MKR.png", "size":"30px", "padding":"15px"},
	{"id":"Muse", "nombre": "Muse", "logo":"muse.png", "size":"30px", "padding":"15px"},
	{"id":"MT", "nombre": "Mushroom Team", "logo":"mtx.png", "size":"30px", "padding":"15px"},
	{"id":"MT1", "nombre": "Mushroom Team X", "logo":"mtx.png", "size":"30px", "padding":"15px"},
	{"id":"MT2", "nombre": "Mushroom Team Y", "logo":"mty.png", "size":"30px", "padding":"15px"},
	{"id":"NK", "nombre": "Neo Karts", "logo":"neo_karts.jpg", "size":"30px", "padding":"15px"},
	{"id":"N", "nombre": "Nightmare", "logo":"Nightmare.png", "size":"30px", "padding":"15px"},
	{"id":"NTH", "nombre": "Nintenhype", "logo":"Nintenhype.jpg", "size":"30px", "padding":"15px"},
	{"id":"OB", "nombre": "Obvious Brilliance", "logo":"ob.png", "size":"30px", "padding":"15px"},
	{"id":"PR", "nombre": "Pixel Rush", "logo":"PixelRush.png", "size":"30px", "padding":"15px"},
	{"id":"PIL", "nombre": "Play It Loud", "logo":"PlayItLoud.png", "size":"30px", "padding":"15px"},
	{"id":"RR", "nombre": "RagnaЯöck", "logo":"RagnaЯöck.png", "size":"30px", "padding":"15px"},
	{"id":"RF", "nombre": "Rainbow Fun", "logo":"rf.png", "size":"30px", "padding":"15px"},
	{"id":"RG", "nombre": "Retro gamers", "logo":"none2.png", "size":"30px", "padding":"15px"},
	{"id":"RG", "nombre": "Road Gods", "logo":"rg.png", "size":"30px", "padding":"15px"},
	{"id":"RK", "nombre": "Rozando la Katastrofe", "logo":"rk.png", "size":"25px", "padding":"20px"},
	{"id":"RK2", "nombre": "Rozando la Kalamidad", "logo":"rk.png", "size":"25px", "padding":"20px"},
	{"id":"RK3", "nombre": "Rozando el Kataclismo", "logo":"rk.png", "size":"25px", "padding":"20px"},
	{"id":"SS", "nombre": "Saigo no Sasayaki", "logo":"Saigo_no_Sasayaki.png", "size":"30px", "padding":"15px"},
	{"id":"SS", "nombre": "Salty Goblins", "logo":"Salty_Goblins.png", "size":"30px", "padding":"15px"},
	{"id":"SH", "nombre": "Shells From Hell", "logo":"sh.png", "size":"30px", "padding":"15px"},
	{"id":"SH", "nombre": "Shells From Hell Blue", "logo":"sh.png", "size":"26px", "padding":"19px"},
	{"id":"SH2", "nombre": "Shells From Hell Red", "logo":"sh2.png", "size":"27px", "padding":"18px"},
	//{"id":"SK", "nombre": "SplatKarts", "logo":"SplatKarts.png", "size":"27px", "padding":"18px"},
	{"id":"STC", "nombre": "Souls of the Circuit", "logo":"stc.png", "size":"27px", "padding":"18px"},
	{"id":"ST", "nombre": "Star Team", "logo":"star_team.png", "size":"30px", "padding":"15px"},
	{"id":"TeamJBZZ", "nombre": "TeamJBZZ", "logo":"TeamJBZZ.png", "size":"30px", "padding":"15px"},
	{"id":"TL", "nombre": "Team Luxembourg", "logo":"Team_Luxembourg.png", "size":"30px", "padding":"15px"},
	{"id":"TDK", "nombre": "Tokyo Drift Kings", "logo":"Tokyo_Drift_Kings.png", "size":"30px", "padding":"15px"},
	{"id":"TT", "nombre": "Tuéstame la tostada", "logo":"tt.png", "size":"30px", "padding":"15px"},
	{"id":"UU", "nombre": "Unbeatable Underdogs", "logo":"uu.png", "size":"25px", "padding":"20px"},
	{"id":"VictoryRoad", "nombre": "Victory Road", "logo":"VictoryRoad.png", "size":"30px", "padding":"15px"},
	{"id":"VR", "nombre": "Victory Racers", "logo":"VR1.png", "size":"30px", "padding":"15px"},
	{"id":"VR1", "nombre": "Victory Racers Esmerald", "logo":"VR1.png", "size":"24px", "padding":"21px"},
	{"id":"VR2", "nombre": "Victory Racers Sapphire", "logo":"VR2.png", "size":"24px", "padding":"21px"},
	{"id":"WEC", "nombre": "Wii Elite Clan", "logo":"wec.png", "size":"30px", "padding":"15px"},
	{"id":"WW", "nombre": "Winner winner cuco dinner", "logo":"Winner_winner_cuco_dinner.png", "size":"21px", "padding":"2px"},
	{"id":"WF", "nombre": "World Friend", "logo":"World_Friend.png", "size":"30px", "padding":"15px"},
	{"id":"YF", "nombre": "Yoshi Family", "logo":"yoshi_family.png", "size":"30px", "padding":"15px"},
	{"id":"ZS", "nombre": "Zapfish Squad", "logo":"zapfish_squad.jpg", "size":"30px", "padding":"15px"},
	{"id":"Z", "nombre": "Zealous", "logo":"Zealous.png", "size":"30px", "padding":"15px"},
];

function openLocalTeam(typeName, variable) {
    var i;
    var x = document.getElementsByClassName("localTeam");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(typeName).style.display = "block";
    memoria[variable] = typeName;

    console.log(variable+":"+memoria[variable]);
}

function openVisitTeam(typeName, variable) {
    var i;
    var x = document.getElementsByClassName("visitTeam");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(typeName).style.display = "block";
    memoria[variable] = typeName;

    console.log(variable+":"+memoria[variable]);
}

function previewFile(selectorImg, selectorFile) {
  var preview = document.querySelector(selectorImg);
  var file    = document.querySelector(selectorFile).files[0];
  var reader  = new FileReader();

  preview.src = "img/equipos/none2.png";

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function downloadCanvas(canvasId, filename) {
    // Obteniendo la etiqueta la cual se desea convertir en imagen
    var domElement = document.getElementById(canvasId);
 
    // Utilizando la función html2canvas para hacer la conversión
    html2canvas(domElement).then(function(domElementCanvas) {

    		download(domElementCanvas.toDataURL("image/png"), "image.png", "image/png");
            // Obteniendo el contexto del canvas ya generado
            /*var context = domElementCanvas.getContext('2d');
 
            // Creando enlace para descargar la imagen generada
            var link = document.createElement('a');
            link.href = domElementCanvas.toDataURL("image/png");
            link.download = filename;
 
            // Chequeando para browsers más viejos
            if (document.createEvent) {
                var event = document.createEvent('MouseEvents');
                // Simulando clic para descargar
                event.initMouseEvent("click", true, true, window, 0,
                    0, 0, 0, 0,
                    false, false, false, false,
                    0, null);
                link.dispatchEvent(event);
            } else {
                // Simulando clic para descargar
                link.click();
            }*/
        }
  	);
}







var crearEquipos = function(){
	for(i=0; i< equipos.length; i++){

		$( ".idEquipos" ).append( '<option value="'+i+'">'+equipos[i].nombre+'</option>' );
	}
}

var crearCompeticiones = function(){
	for(i=0; i< competiciones.length; i++){

		$( "#competicionNombre" ).append( '<option value="'+i+'">'+competiciones[i].id+'</option>' );
	}
}

var rellenarSelect = function (id, lista){
	for(i=0; i< lista.length; i++){

		$( id ).append( '<option value="'+i+'">'+lista[i].nombre+'</option>' );
	}
};




var getJugadores = function(prefix){
	jugadores = [{}];
	jugadores[0].puntos = $(prefix+"Penalizacion").val();
	for (i = 1; i < 7; i++) {
		idNombre = prefix+i+"Nombre"
		idPuntos = prefix+i+"Puntos"
		nombre = $(idNombre).val();
		puntos = $(idPuntos).val();
    	jugadores[i]={"nombre":nombre,"puntos":puntos, "mvp":false};
	}
	return jugadores;

}

var getMvp= function(jugadores){
	mvp = 0;
	for (i=1; i < jugadores.locales.length; i++){
		if (parseInt(jugadores.locales[i].puntos) > mvp){
			mvp = parseInt(jugadores.locales[i].puntos);
		}
		if (parseInt(jugadores.visitantes[i].puntos) > mvp){
			mvp = parseInt(jugadores.visitantes[i].puntos);
		}
	}

	for (i=1; i < jugadores.locales.length; i++){
		if (parseInt(jugadores.locales[i].puntos) == mvp){
			jugadores.locales[i].mvp = true;
		}
		if (parseInt(jugadores.visitantes[i].puntos) == mvp){
			jugadores.visitantes[i].mvp = true;
		}
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
		idMvp = "#jugador"+i+prefix+ " .mvp";
		$(idNombre).html(jugadores[i].nombre);
		$(idpuntos).html(jugadores[i].puntos);
		if (jugadores[i].mvp){
			$(idMvp).css(" visibility", "visible");
			$(idMvp).removeClass("hidden");
		}else{
			$(idMvp).addClass("hidden");
		}
	}
}

var setEquipo= function(equipo, prefix){
	$("#nombre"+prefix).html(equipo.nombre);
	$("#nombre"+prefix).css("font-size", equipo.size);
	$("#nombre"+prefix).css("padding-top", equipo.padding);
	$("#escudo"+prefix+" img").attr("src", "img/equipos/"+equipo.logo);
}

var setCompeticion= function(equipo, prefix){
	$("#competicionLogo").html(equipo.nombre);
	$("#escudo"+prefix+" img").attr("src", "img/equipos/"+equipo.logo);
}

var setFondo = function (fondo){
	$("#contenedor_tabla").css("background-image", "url(./img/fondos/"+ fondo +")");
	console.log("url(../img/fondos/"+ fondo +")");
}


$(document).ready(function(){
	rellenarSelect(".idEquipos" , equipos);
	rellenarSelect("#competicionNombre" , competiciones);
	rellenarSelect("#selectFondo" , fondos);
    $("#save").click (function (event) {
    	var jugadores = getTabJugadores();
    	jugadores = getMvp(jugadores);

    	var totalLocal = calcTotal(jugadores.locales);
    	var totalVisitante = calcTotal(jugadores.visitantes);

    	var diferencia = totalLocal - totalVisitante;



    	setJugadores(jugadores.locales, "Local");
    	setJugadores(jugadores.visitantes, "Visitante");
    	
    	$("#totalPuntosLocal").html(totalLocal);
    	$("#totalPuntosVisitante").html(totalVisitante);
    	$("#diferenciaPuntos").html(diferencia);

    	if (totalVisitante > totalLocal){
    		$("#totalPuntosLocal").addClass("perdedor");
    		$("#totalPuntosLocal").removeClass("ganador");

    		$("#totalPuntosVisitante").addClass("ganador");
    		$("#totalPuntosVisitante").removeClass("perdedor");

    		/*$("#winLocal").attr("src", "img/YOULOSE2.png");
    		$("#winVisit").attr("src", "img/YOUWIN.png");*/
    	}else if (totalVisitante < totalLocal){
    		$("#totalPuntosLocal").addClass("ganador");
    		$("#totalPuntosLocal").removeClass("perdedor");

    		/*$("#winLocal").attr("src", "img/YOUWIN.png");
    		$("#winVisit").attr("src", "img/YOULOSE2.png");*/

    		$("#totalPuntosVisitante").addClass("perdedor");
    		$("#totalPuntosVisitante").removeClass("ganador");
    	}else{
    		$("#totalPuntosLocal").removeClass("ganador perdedor");
    		$("#totalPuntosVisitante").removeClass("ganador perdedor");

    		/*$("#winLocal").attr("src", "img/empate.png");
    		$("#winVisit").attr("src", "img/empate.png");*/
    	}

    	if (memoria["visitante"] == "VisitanteSelect"){
    		var equipoVisitante = equipos[parseInt($("#visitanteNombre").val())];
    		setEquipo(equipoVisitante, "Visitante");
    	}else if (memoria["visitante"] == "VisitantePerson"){
    		$("#nombreVisitante").html($("#visitanteNombrePer").val());
    		previewFile('#escudoVisitanteImg', '#visitanteFilePer')

    	}

    	if (memoria["local"] == "LocalSelect"){
    		var equipoLocal = equipos[parseInt($("#localNombre").val())];
    		setEquipo(equipoLocal, "Local");
    	}else if (memoria["local"] == "LocalPerson"){
    		$("#nombreLocal").html($("#localNombrePer").val());
    		previewFile('#escudoLocalImg', '#localFilePer');
    	}

    	


    	var cmp = competiciones[parseInt($("#competicionNombre").val())];

    	$("#competicionLogo").attr("src", "img/competiciones/"+cmp.logo);


    	var fond = fondos[parseInt($("#selectFondo").val())];
    	setFondo(fond.img);


    	modal.style.display = "none";

    });


    $('#download').click(function() {
    	downloadCanvas('contenedor_tabla', 'imagen.png');
	});
});
