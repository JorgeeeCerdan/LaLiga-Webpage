// TOP 5 EQUIPOS CON MAYOR MEDIA DE GOLES POR PARTIDO
dataMayorMediaGoles(dataMatches.matches);

function dataMayorMediaGoles(partidos){
    let estadisticas = [];

    for(let i = 0; i < partidos.length; i++){        
        let statusMatch = partidos[i].status;
        if(statusMatch !== "FINISHED"){
            continue
        }
        let equipoHomeId = partidos[i].homeTeam.id;
        let equipoHomeName = partidos[i].homeTeam.name;
        let equipoHomeGoals = partidos[i].score.fullTime.homeTeam;
        let equipoAwayId = partidos[i].awayTeam.id;
        let equipoAwayName = partidos[i].awayTeam.name;
        let equipoAwayGoals = partidos[i].score.fullTime.awayTeam;   

        let homeTeamEncontrado;
        for(let j = 0; j < estadisticas.length; j++){
            if(estadisticas[j].id === equipoHomeId){
                homeTeamEncontrado = estadisticas[j]
            }
        }

        if(homeTeamEncontrado == undefined){
            estadisticas.push({
                id:equipoHomeId,
                name:equipoHomeName,
                goals:equipoHomeGoals,
                matches: 1
            })
        }else{
            homeTeamEncontrado.matches++
            homeTeamEncontrado.goals += equipoHomeGoals;
        }

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
                goals:equipoAwayGoals,
                matches: 1
            })
        }else{
            awayTeamEncontrado.matches++
            awayTeamEncontrado.goals += equipoAwayGoals;
        }
    }

    for(let k = 0; k < estadisticas.length; k++){
        let media = estadisticas[k].goals / estadisticas[k].matches;
        let mediaObjeto = {
            avg: media.toFixed(3)
        }
        Object.assign(estadisticas[k], mediaObjeto)
        // a es mayor, b es menor. Por lo tanto b.avg - a.avg 
        // Ordena de menor a mayor
        estadisticas.sort((a,b) => b.avg - a.avg)
    }

    // console.log(estadisticas)
    tablaMayorMediaGoles(estadisticas)
}

function tablaMayorMediaGoles(estadisticas){
    let tablaMayorMediaGoles = document.getElementById("tablaResultadosGoles");
    let estadisticasTop5 = estadisticas.slice(0, 5);

    for(let t = 0; t < estadisticasTop5.length; t++){
        const tr = document.createElement("tr");

        let datosTabla = [
            estadisticasTop5[t].name,
            estadisticasTop5[t].goals,
            estadisticasTop5[t].matches,
            estadisticasTop5[t].avg,
        ]

        for(let r = 0; r < datosTabla.length; r++){
            let td = document.createElement("td");
            td.append(datosTabla[r]);
            tr.appendChild(td);
            tablaMayorMediaGoles.appendChild(tr);
        }
    }
}
