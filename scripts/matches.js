let matches = dataMatches.matches;

function tablaPartidos(partidos){

    let tablaPartidos = document.getElementById("tablaPartidos");

    for(let i = 0; i < matches.length; i++){
        const tr = document.createElement("tr");

        let escudoLocal = document.createElement("img");
        escudoLocal.classList.add("escudoLocal");
        escudoLocal.setAttribute("src","https://crests.football-data.org/" + partidos[i].homeTeam.id + ".svg");
        escudoLocal.setAttribute("alt","Logo Equipo");
        escudoLocal.style.width = "50px"
        
        let escudoVisitante = document.createElement("img");
        escudoVisitante.classList.add("escudoVisitante");
        escudoVisitante.setAttribute("src","https://crests.football-data.org/" + partidos[i].awayTeam.id + ".svg");
        escudoVisitante.setAttribute("alt","Logo Equipo");
        escudoVisitante.style.width = "50px"

        let fechaPartidos = new Date (partidos[i].utcDate);

        let resultados = partidos[i].score.fullTime.homeTeam + " - " + partidos[i].score.fullTime.awayTeam;
        if(resultados === "null - null"){
            resultados = "Aplazado";
            console.log(resultados)
        }else{
            resultados.textContent = partidos[i].score.fullTime.homeTeam + " - " + partidos[i].score.fullTime.awayTeam;
        }

        let datosPartidos = [
            fechaPartidos.toLocaleDateString(),
            escudoLocal,
            partidos[i].homeTeam.name,
            escudoVisitante,
            partidos[i].awayTeam.name,
            resultados,
        ]

        for(let j = 0; j < datosPartidos.length; j++){
            let td = document.createElement("td");
            td.append(datosPartidos[j])
            tr.appendChild(td)
            tablaPartidos.appendChild(tr)
        }
    }
}
tablaPartidos(matches);
