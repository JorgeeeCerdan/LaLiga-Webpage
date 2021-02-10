let matches = dataMatches.matches;

function crearTabla(partidos){

    let tabla = document.getElementById("tabla");

    for(let i = 0; i < partidos.length; i++){
        const tr = document.createElement("tr");

        let fechaPartido = document.createElement("td");
        fechaPartido.className = "fechaPartido";
        fechaPartido.textContent = partidos[i].utcDate;
        tr.appendChild(fechaPartido)

        let equipoLocal = document.createElement("td");
        equipoLocal.className = "equipoLocal";
        equipoLocal.textContent = partidos[i].homeTeam.name;
        tr.appendChild(equipoLocal)

        let equipoVisitante = document.createElement("td");
        equipoVisitante.className = "equipoVisitante";
        equipoVisitante.textContent = partidos[i].awayTeam.name;
        tr.appendChild(equipoVisitante)

        let resultadoPartido = document.createElement("td");
        resultadoPartido.className = "resultadoPartido";
        resultadoPartido.textContent = partidos[i].score.fullTime.homeTeam + " - " + partidos[i].score.fullTime.awayTeam;
        tr.appendChild(resultadoPartido)
            if(partidos[i].score.fullTime.homeTeam == null){
                resultadoPartido.textContent = "Aplazado";
            }

        tabla.appendChild(tr);
    }
}
crearTabla(matches);
