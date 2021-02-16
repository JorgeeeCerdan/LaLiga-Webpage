// TABLA MENOS GOLES EN CONTRA COMO VISITANTE
dataMayorMediaGoles(dataMatches.matches);

function dataMayorMediaGoles(partidos){
    let estadisticas = [];

    for(let i = 0; i < partidos.length; i++){
        let statusMatch = partidos[i].status;

        if(statusMatch !== "FINISHED"){
            continue
        }

        // let equipoHomeId = partidos[i].homeTeam.id;
        // let equipoHomeName = partidos[i].homeTeam.name;
        let equipoHomeGoals = partidos[i].score.fullTime.homeTeam;
        let equipoAwayId = partidos[i].awayTeam.id;
        let equipoAwayName = partidos[i].awayTeam.name;
        // let equipoAwayGoals = partidos[i].score.fullTime.awayTeam;   

        // Equipo visitante
        let awayTeamEncontrado;
        for(let j = 0; j < estadisticas.length; j++){
            if(estadisticas[j].id === equipoAwayId){
                awayTeamEncontrado = estadisticas[j]
            }
        }

        if(awayTeamEncontrado == undefined){
            estadisticas.push({
                id:equipoAwayId,
                name:equipoAwayName,
                goals:equipoHomeGoals,
                matches: 1
            })
        }else{
            awayTeamEncontrado.matches++
            awayTeamEncontrado.goals += equipoHomeGoals;
        }
    }
    estadisticas.sort((a,b) => a.goals - b.goals);
    console.log(estadisticas)

    tablaMenosGolesEnContraVisitante(estadisticas)
}

function tablaMenosGolesEnContraVisitante(estadisticas){
    let tablaMenosGolesEnContraComoVisitante = document.getElementById("tablaMenosGolesEnContraComoVisitante");
    let estadisticasTop5 = estadisticas.slice(0, 5);

    
    for(let t = 0; t < estadisticasTop5.length; t++){
        const tr = document.createElement("tr");
        
        let imgEscudo = document.createElement("img")
        imgEscudo.setAttribute("src", "https://crests.football-data.org/" + estadisticasTop5[t].id + ".svg");
        imgEscudo.classList.add("escudoId");
        

        let datosTabla = [
            estadisticasTop5[t].name,
            imgEscudo,
            estadisticasTop5[t].matches,
            estadisticasTop5[t].goals,
        ]
        console.log(datosTabla)

        for(let r = 0; r < datosTabla.length; r++){
            let td = document.createElement("td");
            td.append(datosTabla[r]);
            tr.appendChild(td);
            tablaMenosGolesEnContraComoVisitante.appendChild(tr);
        }
    }
}

