let matches = dataMatches.matches;
nuevaTabla(matches);

let buscarEquipo = document.getElementById("buscarEquipo");
buscarEquipo.addEventListener("click", function(e){
    e.preventDefault()
    filtroBuscar(matches);
});


function filtroBuscar(matches){

    let inputEscrito = document.getElementById("textoBuscar").value;
    let radioEstado = document.querySelector("input[name=estadoPartido]:checked");
    let alertText = document.getElementById("alertText");
    let alertStatus = document.getElementById("alertStatus");

    if(inputEscrito == ""){
        alertText.style.display = "block";
        nuevaTabla(matches)
        return 
    }

    let datosFiltrados = matches.filter(element => {
        return inputEscrito == element.homeTeam.name || inputEscrito == element.awayTeam.name;
    })

    if(radioEstado == null){
        alertStatus.style.display = "block";
        nuevaTabla(datosFiltrados)
        return 
    }

    let filtrarEquipos = datosFiltrados.filter(element => {
        alertText.style.display = "none";
        alertStatus.style.display = "none";
        
        if(element.score.winner === null && radioEstado.value === "Aplazados"){
            return true
        }
        if(element.score.winner === "DRAW" && radioEstado.value === "Empatados"){
            return true
        }
        if(radioEstado.value === "Ganados"){
            if( element.score.winner == "HOME_TEAM" && inputEscrito == element.homeTeam.name){
                return true
            }
            if( element.score.winner == "AWAY_TEAM" && inputEscrito == element.awayTeam.name){
                return true
            }
        }
        if(radioEstado.value === "Perdidos"){
            if( element.score.winner == "AWAY_TEAM" && inputEscrito == element.homeTeam.name){
                return true
            }
            if( element.score.winner == "HOME_TEAM" && inputEscrito == element.awayTeam.name){
                return true
            }
        }
    })

    console.log(filtrarEquipos)
    nuevaTabla(filtrarEquipos);
};


function nuevaTabla(partidos){

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for(let i = 0; i < matches.length; i++){
        const tr = document.createElement("tr");

        let escudoLocal = document.createElement("img");
        escudoLocal.classList.add("escudoId");
        escudoLocal.setAttribute("src","https://crests.football-data.org/" + partidos[i].homeTeam.id + ".svg");
        escudoLocal.setAttribute("alt","Logo Equipo");
        
        let escudoVisitante = document.createElement("img");
        escudoVisitante.classList.add("escudoId");
        escudoVisitante.setAttribute("src","https://crests.football-data.org/" + partidos[i].awayTeam.id + ".svg");
        escudoVisitante.setAttribute("alt","Logo Equipo");

        let fechaPartidos = new Date (partidos[i].utcDate);

        let resultados = partidos[i].score.fullTime.homeTeam + " - " + partidos[i].score.fullTime.awayTeam;
        if(resultados === "null - null"){
            resultados = "Aplazado";
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
            tbody.appendChild(tr)
        }
    }
};

