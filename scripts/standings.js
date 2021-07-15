dataStanding()

function dataStanding(){
    const url = "https://api.football-data.org/v2/competitions/2014/standings";
    fetch(url,{
        method: "GET",
        headers:{
            "X-Auth-Token":"ed78a9ec730f4a56b3c1b1d295f847ba"
        }
    })
    .then(response => {
        if(response.ok) return response.json();
    })
    .then(data => {
        let loader = document.getElementById("loader");
        loader.style.display = "none";
        crearTablaStandings(data);

    }).catch(error =>{
        console.log(error)
    })
}

function crearTablaStandings(data){
    
    let arrayTable = data.standings[0].table;
    let tablaClasificacion = document.getElementById("tablaClasificacion");

    // Los 20 equipos de la liga
    // console.log(arrayTable[0].position)
    
    // let ChampionsLeague = [];

    // arrayTable.forEach( elemento => {
    //     if (elemento.position <= 4){
    //         ChampionsLeague.push(elemento)
    //         console.log(ChampionsLeague)
    //     }
    // })

    for(let i = 0; i < arrayTable.length; i++){
        let tr = document.createElement("tr");

        let equipoEscudo = document.createElement("img");
            equipoEscudo.classList.add("imgteam1");
            equipoEscudo.setAttribute("src","https://crests.football-data.org/" + arrayTable[i].team.id + ".svg");
            equipoEscudo.setAttribute("alt","Logo Equipo");
            equipoEscudo.style.width = "50px";
            tr.appendChild(equipoEscudo);

        let lastMatches = arrayTable[i].form;
            // lastMatches = lastMatches.replace(/W/g," 🟢 ");
            // lastMatches = lastMatches.replace(/D/g," 🟡 ");
            // lastMatches = lastMatches.replace(/L/g," 🔴 ");
            // lastMatches = lastMatches.replace(/,/g,"  ");

        let infotabla = arrayTable[i];
        let datosTabla= [
            infotabla.position,
            equipoEscudo,
            infotabla.team.name,
            // infotabla.playedGames,
            // infotabla.won,
            // infotabla.draw,
            // infotabla.lost,
            // infotabla.points,
            // infotabla.goalsFor,
            // infotabla.goalsAgainst,
            // infotabla.goalDifference,
            // lastMatches
        ];

        let promoChampions = [1,2,3];
        let promoUefa = [4,5];
        let mediaTabla = [6,7,8,9,10,11,12,13,14,15,16,17]
        let descensoTabla = [18,19,20]
        
        promoChampions.forEach(elemento =>{
            if(elemento == infotabla.position){
                tr.style.borderLeft ="5px solid green";
            }
        })
    
        promoUefa.forEach(elemento =>{
            if(elemento == infotabla.position){
                tr.style.borderLeft ="5px solid orange";
            }
        })
        
        mediaTabla.forEach(elemento =>{
            if(elemento == infotabla.position){
                tr.style.borderLeft ="5px solid #cccccc";
            }
        })
        
        descensoTabla.forEach(elemento =>{
            if(elemento == infotabla.position){
                tr.style.borderLeft ="5px solid red";
            }
        })

        datosTabla.forEach(clasificacionTabla => {
            let td = document.createElement("td");
            td.append(clasificacionTabla)
            tr.appendChild(td)
            tablaClasificacion.appendChild(tr)            
        });
    }
}