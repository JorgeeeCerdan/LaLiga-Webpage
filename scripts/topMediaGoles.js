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
            if(estadisticas[j].id === equipoHomeId){
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
    }

    console.log(estadisticas)

}
dataMayorMediaGoles(dataMatches.matches);


// --------------------------------------------------


function tablaMayorMediaGoles(estadisticas){
    let tablaMayorMediaGoles = document.getElementById("tablaResultadosGoles");

    for(let t = 0; t < estadisticas.length; t++){
        const tr = document.createElement("tr");

        let infotabla = estadisticas[t];
        let datosTabla = [
            infotabla.id,
            infotabla.name,
            infotabla.goals
        ]

        for(let r = 0; r < datosTabla.length; r++){
            let td = document.createElement("td");
            td.append(datostabla[r]);
            tr.appendChild(td);
            tablaMayorMediaGoles.appendChild(tr);
        }

    }
}
tablaMayorMediaGoles(estadisticas);
