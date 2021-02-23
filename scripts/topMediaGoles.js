// TOP 5 EQUIPOS CON MAYOR MEDIA DE GOLES POR PARTIDO

dataTopGoles()
function dataTopGoles(){
    const url = "https://api.football-data.org/v2/competitions/2014/matches"

    fetch(url,{
        method : "GET",
        headers : {
            "X-Auth-Token" : "ed78a9ec730f4a56b3c1b1d295f847ba"
        }
    }).then(response => {
        if(response.ok) return response.json();
    }).then(data => {
        let loaderUno = document.getElementById("loaderUno");
        loaderUno.style.display = "none";
        let loaderDos = document.getElementById("loaderDos");
        loaderDos.style.display = "none";
        
        data = data.matches;
        topMediaGoles(data)
        visitantesMenosGoleados(data)

    }).catch(error =>{
        console.log(error)
    })
}

function topMediaGoles(partidos){
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
        estadisticas.forEach(localEncontrado =>{
            if(localEncontrado.id === equipoHomeId){
                homeTeamEncontrado = localEncontrado
            }
        })

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
        estadisticas.forEach( visitanteEncontrado =>{
            if(visitanteEncontrado.id === equipoAwayId){
                awayTeamEncontrado = visitanteEncontrado
            }
        })

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

    estadisticas.forEach(estadisticasMedia =>{
        let media = estadisticasMedia.goals / estadisticasMedia.matches;
        let mediaObjeto = {
            avg: media.toFixed(3)
        }
        Object.assign(estadisticasMedia, mediaObjeto)
        estadisticas.sort((a,b) => b.avg - a.avg)
    })

    tablaMayorMediaGoles(estadisticas)
}



function tablaMayorMediaGoles(estadisticas){
    let tablaMayorMediaGoles = document.getElementById("tablaResultadosGoles");
    let estadisticasTop5 = estadisticas.slice(0, 5);

    estadisticasTop5.forEach(topCincoMedia => {
        const tr = document.createElement("tr");
        
        let imgEscudo = document.createElement("img")
        imgEscudo.setAttribute("src", "https://crests.football-data.org/" + topCincoMedia.id + ".svg");
        imgEscudo.classList.add("escudoId");
    
        let datosTabla = [
            imgEscudo,
            topCincoMedia.name,
            topCincoMedia.goals,
            topCincoMedia.matches,
            topCincoMedia.avg,
        ]

        datosTabla.forEach(mayorMedia =>{
            let td = document.createElement("td");
            td.append(mayorMedia);
            tr.appendChild(td);
            tablaMayorMediaGoles.appendChild(tr);  
        })
    })

}
