// TABLA MEDIA GOLES
function dataMayorMediaGoles(partidos){
    // 0. Crear función que va calcular las estadísticas, recibiendo como param el array de partidos
    // 1. Crear array vacía (será array de objetos)
    let estadisticas = [];

    // 2. Iterar por todos los partidos
    for(let i = 0; i < partidos.length; i++){
        
        // Obtendremos los datos a traves del estado de los partidos. porque solo pueden tener dos opciones: finalizado o a la espera. (boolean)
        let statusMatch = partidos[i].status;

        // 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido
        // CUANDO NO ES FINISHED NO LEE LA LINEA 15!
        if(statusMatch !== "FINISHED"){
            // Cumplida la condicion… recogemos los datos de los finalizados         
            continue
        }
        let equipoHomeId = partidos[i].homeTeam.id;
        let equipoHomeName = partidos[i].homeTeam.name;
        let equipoHomeGoals = partidos[i].score.fullTime.homeTeam;
        let equipoAwayId = partidos[i].awayTeam.id;
        let equipoAwayName = partidos[i].awayTeam.name;
        let equipoAwayGoals = partidos[i].score.fullTime.awayTeam;   

        // 4. Buscar en la array estadisticas el objeto con el mismo id que el homeTeam del partido
        // Recorrer el array y si no existe añadirlo, 1º buscar si existe si no existe añadirlo, si vuelve a aparecer +1. (como si pides en el bar  que en comanda aparece +1. O por ejemplo como si sumaras con palitos vas añadiendo palitos)
        let homeTeamEncontrado;
        for(let j = 0; j < estadisticas.length; j++){
            if(estadisticas[j].id === equipoHomeId){
                homeTeamEncontrado = estadisticas[j]
            }
        }
        // console.log(equipoHomeName, homeTeamEncontrado)

        if(homeTeamEncontrado == undefined){
            // console.log("añadimos nuevo equipo")
            estadisticas.push({
                id:equipoHomeId,
                name:equipoHomeName,
                goals:equipoHomeGoals,
                matches: 1
            })
        }else{
            // console.log("modificamos equipo existente")
            homeTeamEncontrado.matches++
            homeTeamEncontrado.goals += equipoHomeGoals;
        }

        // 7. Hacer exactamente lo mismo a partir del punto 4, pero con awayTeam
        let awayTeamEncontrado;
        for(let j = 0; j < estadisticas.length; j++){
            if(estadisticas[j].id === equipoHomeId){
                awayTeamEncontrado = estadisticas[j]
            }
        }
        // console.log(equipoHomeName, awayTeamEncontrado)

        if(awayTeamEncontrado == undefined){
            // console.log("añadimos nuevo equipo")
            estadisticas.push({
                id:equipoAwayId,
                name:equipoAwayName,
                goals:equipoAwayGoals,
                matches: 1
            })
        }else{
            // console.log("modificamos equipo existente")
            awayTeamEncontrado.matches++
            awayTeamEncontrado.goals += equipoAwayGoals;
        }
    }

    // 8. Una vez fuera del loop de partidos, iterar por el array estadisticas
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

// TABLA EQUIPOS CON MENOS GOLES EN CONTRA COMO VISITENTE
function dataMenosGolesVisitante(partidos){
    // 0. Crear función que va calcular las estadísticas, recibiendo como param el array de partidos
    // 1. Crear array vacía (será array de objetos)
    let estadisticasDos = [];

    // 2. Iterar por todos los partidos
    for(let i = 0; i < partidos.length; i++){
        
        // Obtendremos los datos a traves del estado de los partidos. porque solo pueden tener dos opciones: finalizado o a la espera. (boolean)
        let statusMatch = partidos[i].status;

        // 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido
        // CUANDO NO ES FINISHED NO LEE LA LINEA 15!
        if(statusMatch !== "FINISHED"){
            // Cumplida la condicion… recogemos los datos de los finalizados         
            continue
        }
        let equipoHomeGoals = partidos[i].score.fullTime.homeTeam;
        let equipoAwayId = partidos[i].awayTeam.id;
        let equipoAwayName = partidos[i].awayTeam.name;

        // 7. Hacer exactamente lo mismo a partir del punto 4, pero con awayTeam
        let awayTeamEncontrado;
        for(let j = 0; j < estadisticasDos.length; j++){
            if(estadisticasDos[j].id === equipoAwayId){
                awayTeamEncontrado = estadisticasDos[j]
            }
        }
        // console.log(equipoHomeName, awayTeamEncontrado)

        if(awayTeamEncontrado == undefined){
            // console.log("añadimos nuevo equipo")
            estadisticasDos.push({
                id:equipoAwayId,
                name:equipoAwayName,
                goals:equipoHomeGoals,
                matches: 1
            })
        }else{
            // console.log("modificamos equipo existente")
            awayTeamEncontrado.goals += equipoHomeGoals;
            awayTeamEncontrado.matches++
        }
        
    }

    console.log(estadisticasDos)

}
dataMenosGolesVisitante(dataMatches.matches);

