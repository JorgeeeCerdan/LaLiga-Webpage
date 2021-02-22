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

    for(let i = 0; i < arrayTable.length; i++){
        let tr = document.createElement("tr");

        let equipoEscudo = document.createElement("img");
            equipoEscudo.classList.add("imgteam1");
            equipoEscudo.setAttribute("src","https://crests.football-data.org/" + arrayTable[i].team.id + ".svg");
            equipoEscudo.setAttribute("alt","Logo Equipo");
            equipoEscudo.style.width = "50px";
            tr.appendChild(equipoEscudo);

            let lastMatches = arrayTable[i].form;
            lastMatches = lastMatches.replace(/W/g," 🟢 ");
            lastMatches = lastMatches.replace(/D/g," 🟡 ");
            lastMatches = lastMatches.replace(/L/g," 🔴 ");
            lastMatches = lastMatches.replace(/,/g,"  ");
        
        
            // LIBRERIA DE ICONOS BOOTSRAP 5
            // <i class="bi bi-check-circle-fill"></i>
            // <i class="bi bi-x-circle-fill"></i>
            // <i class="bi bi-dash-circle-fill"></i>
        
            // let prueba = document.createElement("i");
            // prueba.classList.add("bi")
            // prueba.classList.add("bi-check-circle-fill")
            // lastMatches =lastMatches.replace(/W/g, prueba);
       
        
        let infotabla = arrayTable[i];
        let datosTabla= [
            infotabla.position,
            equipoEscudo,
            infotabla.team.name,
            infotabla.playedGames,
            infotabla.won,
            infotabla.draw,
            infotabla.lost,
            infotabla.points,
            infotabla.goalsFor,
            infotabla.goalsAgainst,
            infotabla.goalDifference,
            lastMatches
        ];

        datosTabla.forEach(clasificacionTabla => {
            let td = document.createElement("td");
            td.append(clasificacionTabla)
            tr.appendChild(td)
            tablaClasificacion.appendChild(tr)            
        });
    }
}