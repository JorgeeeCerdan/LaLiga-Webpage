// TABLA MENOS GOLES EN CONTRA COMO VISITANTE

function visitantesMenosGoleados(partidos){
    let estadisticas = [];

    for(let i = 0; i < partidos.length; i++){
        let statusMatch = partidos[i].status;

        if(statusMatch !== "FINISHED"){
            continue
        }

        let equipoHomeGoals = partidos[i].score.fullTime.homeTeam;
        let equipoAwayId = partidos[i].awayTeam.id;
        let equipoAwayName = partidos[i].awayTeam.name;

        let awayTeamEncontrado;
        estadisticas.forEach(visitanteEncontrado =>{
            if(visitanteEncontrado.id === equipoAwayId){
                awayTeamEncontrado = visitanteEncontrado
            }
        })

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
    tablaMenosGolesEnContraVisitante(estadisticas)
}

function tablaMenosGolesEnContraVisitante(estadisticas){
    let tablaMenosGolesEnContraComoVisitante = document.getElementById("tablaMenosGolesEnContraComoVisitante");
    let estadisticasTop5 = estadisticas.slice(0, 5);

    estadisticasTop5.forEach(estadisticasMenosGoleados =>{
        const tr = document.createElement("tr");

        let imgEscudo = document.createElement("img")
        imgEscudo.setAttribute("src", "https://crests.football-data.org/" + estadisticasMenosGoleados.id + ".svg");
        imgEscudo.classList.add("escudoId");
    
        let datosTabla = [
            imgEscudo,
            estadisticasMenosGoleados.name,
            estadisticasMenosGoleados.matches,
            estadisticasMenosGoleados.goals,
        ]

        datosTabla.forEach(topCincoMenosGoleados =>{
            let td = document.createElement("td");
            td.append(topCincoMenosGoleados);
            tr.appendChild(td);
            tablaMenosGolesEnContraComoVisitante.appendChild(tr);

        })
    })
    
}

