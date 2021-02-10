let standings = dataStandings.standings;
let arrayTable = standings[0].table;

// console.log(arrayTable[i].playedGames);

function crearTabla(clasificacionLiga){
    let tabla = document.getElementById("tablaClasificacion");
    
    for(let i = 0; i < arrayTable.length; i++){
        const tr = document.createElement("tr");

        let equipoPosicion = document.createElement("td")
        equipoPosicion.textContent = clasificacionLiga[0].table[i].position;
        tr.appendChild(equipoPosicion)
        
        let equipoClasificacion = document.createElement("td")
        let equipoClasificacionImagen = document.createElement("img")
        equipoClasificacionImagen.setAttribute("src", "https://crests.football-data.org/" + clasificacionLiga[0].table[i].team.id + ".svg");
        equipoClasificacionImagen.setAttribute("alt", "Escudo del equipo - Clasificación");
        equipoClasificacionImagen.style.width = "30px";
        tr.appendChild(equipoClasificacion);
        equipoClasificacion.appendChild(equipoClasificacionImagen);

        let escudoClasificacion = document.createElement("td")
        escudoClasificacion.textContent = clasificacionLiga[0].table[i].team.name;
        tr.appendChild(escudoClasificacion)    

        let partidosJugados = document.createElement("td");
        partidosJugados.textContent = arrayTable[i].playedGames;
        tr.appendChild(partidosJugados)

        let partidosGanados = document.createElement("td");
        partidosGanados.textContent = arrayTable[i].won;
        tr.appendChild(partidosGanados);

        let partidosEmpatados = document.createElement("td");
        partidosEmpatados.textContent = arrayTable[i].draw;
        tr.appendChild(partidosEmpatados);

        let partidosPerdidos = document.createElement("td");
        partidosPerdidos.textContent = arrayTable[i].lost;
        tr.appendChild(partidosPerdidos)

        let puntosClasificacion = document.createElement("td");
        puntosClasificacion.textContent = arrayTable[i].points;
        tr.appendChild(puntosClasificacion);

        let golesAFavor = document.createElement("td");
        golesAFavor.textContent = arrayTable[i].goalsFor;
        tr.appendChild(golesAFavor);

        let golesEnContra = document.createElement("td");
        golesEnContra.textContent = arrayTable[i].goalsAgainst;
        tr.appendChild(golesEnContra);

        let diferenciaGoles = document.createElement("td");
        diferenciaGoles.textContent = arrayTable[i].goalDifference;
        tr.appendChild(diferenciaGoles);



        
        tabla.appendChild(tr)
    }
}
crearTabla(standings);

