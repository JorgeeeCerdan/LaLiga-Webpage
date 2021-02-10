let standings = dataStandings.standings;
let arrayTable = standings[0].table;

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
        equipoClasificacionImagen.style.margin = "0px auto";
        tr.appendChild(equipoClasificacion)
        equipoClasificacion.appendChild(equipoClasificacionImagen)

        let escudoClasificacion = document.createElement("td")
        escudoClasificacion.textContent = clasificacionLiga[0].table[i].team.name;
        tr.appendChild(escudoClasificacion)    

        tabla.appendChild(tr)
    }
}
crearTabla(standings);

