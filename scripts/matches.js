let matches = dataMatches.matches;

for(let i = 0; i<matches.length; i++){
    console.log(matches[i].homeTeam.id);
}

function crearTabla(partidos){
    let tabla = document.getElementById("tabla");

    for(let i = 0; i < partidos.length; i++){
        const tr = document.createElement("tr");

        let fecha = new Date(partidos[i].utcDate);
        let fechaPartido = document.createElement("td");
        fechaPartido.className = "fechaPartido";
        fechaPartido.textContent = fecha.toLocaleString();
        tr.appendChild(fechaPartido)

        let equipoLocal = document.createElement("td");
        equipoLocal.className = "equipoLocal";
        equipoLocal.textContent = partidos[i].homeTeam.name;
        tr.appendChild(equipoLocal)

        let recogidaEscudoLocal = matches[i].homeTeam.id;
        let recogidaEscudoVisitante = matches[i].awayTeam.id;

        let equipoLocalEscudo = document.createElement("img");
        equipoLocalEscudo.setAttribute("src", "https://crests.football-data.org/" + recogidaEscudoLocal + ".svg");
        equipoLocalEscudo.setAttribute("alt", "Escudo equipo");
        equipoLocalEscudo.classList.add("equipoLocalEscudo");
        equipoLocal.appendChild(equipoLocalEscudo)

        let equipoVisitante = document.createElement("td");
        equipoVisitante.className = "equipoVisitante";
        equipoVisitante.textContent = partidos[i].awayTeam.name;
        tr.appendChild(equipoVisitante)

        let equipoVisitanteEscudo = document.createElement("img");
        equipoVisitanteEscudo.setAttribute("src", "https://crests.football-data.org/" + recogidaEscudoVisitante + ".svg");
        equipoVisitanteEscudo.setAttribute("alt", "Escudo equipo");
        equipoVisitanteEscudo.classList.add("equipoVisitanteEscudo");
        equipoVisitante.appendChild(equipoVisitanteEscudo)

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
