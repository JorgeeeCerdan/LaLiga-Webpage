let standings = dataStandings.standings;

function tablaClasificacion(standings){
    let arrayTable = standings[0].table;
    let tablaClasificacion = document.getElementById("tablaClasificacion");

    for(let i = 0; i < arrayTable.length; i++){
        let tr = document.createElement("tr");

        let equipoEscudo = document.createElement("img");
            equipoEscudo.classList.add("imgteam1");
            equipoEscudo.setAttribute("src","https://crests.football-data.org/" + standings[0].table[i].team.id + ".svg");
            equipoEscudo.setAttribute("alt","Logo Equipo");
            equipoEscudo.style.width = "50px";
            tr.appendChild(equipoEscudo);

        let infotabla = standings[0].table[i];

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
        ];

        for (let j = 0; j<datosTabla.length; j++){
            let td = document.createElement("td");
            td.append(datosTabla[j])
            tr.appendChild(td)
            tablaClasificacion.appendChild(tr)
        }
    }
}
tablaClasificacion(standings);
