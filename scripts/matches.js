dataMatches()

function dataMatches(){
    const url = "https://api.football-data.org/v2/competitions/2014/matches";
    fetch(url,{
        method: "GET",
        headers:{
        "X-Auth-Token":"ed78a9ec730f4a56b3c1b1d295f847ba"
        }
    }).then(response => {
        if(response.ok) return response.json();
    }).then(data => {
        let loader = document.getElementById("loader");
        loader.style.display = "none";
        
        data = data.matches;
        crearTablaPartidos(data)

        let buscarEquipo = document.getElementById("buscarEquipo");
        buscarEquipo.addEventListener("click", function(e){
            e.preventDefault()
            filtroBuscar(data);
        })

    }).catch(error =>{
        console.log(error)
    })
}

function filtroBuscar(matches){

    let inputEscrito = document.getElementById("textoBuscar").value;
    let radioEstado = document.querySelector("input[name=estadoPartido]:checked");
    let alertText = document.getElementById("alertText");
    let alertStatus = document.getElementById("alertStatus");
    
    if(inputEscrito == ""){
        alertText.style.display = "block";
        crearTablaPartidos(matches)
        return 
    }
    
    let datosFiltrados = matches.filter(element => {
        return inputEscrito == element.homeTeam.name || inputEscrito == element.awayTeam.name;
    })
    

    if(radioEstado == null){
        alertStatus.style.display = "block";
        crearTablaPartidos(datosFiltrados)
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

    let borrarPeticion = document.getElementById("borrarPeticion");
    borrarPeticion.addEventListener("click", function(){
        let inputEscrito = document.getElementById("textoBuscar");
        inputEscrito.value = "";
        alertText.style.display = "none";
        alertText.style.display = "none";
        radioEstado.checked = false;
        crearTablaPartidos(matches)
    })

    crearTablaPartidos(filtrarEquipos);
};


function crearTablaPartidos(matches){

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for(let i = 0; i < matches.length; i++){
        const tr = document.createElement("tr");

        let escudoLocal = document.createElement("img");
        escudoLocal.classList.add("escudoId");
        escudoLocal.setAttribute("src","https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg");
        escudoLocal.setAttribute("alt","Logo Equipo");
        
        let escudoVisitante = document.createElement("img");
        escudoVisitante.classList.add("escudoId");
        escudoVisitante.setAttribute("src","https://crests.football-data.org/" + matches[i].awayTeam.id + ".svg");
        escudoVisitante.setAttribute("alt","Logo Equipo");

        let fechaPartidos = new Date (matches[i].utcDate);

        let resultados = matches[i].score.fullTime.homeTeam + " - " + matches[i].score.fullTime.awayTeam;
            if(resultados === "null - null"){
                resultados = "Aplazado";
            }else{
                resultados.textContent = matches[i].score.fullTime.homeTeam + " - " + matches[i].score.fullTime.awayTeam;
            }

        let datosPartidos = [
            fechaPartidos.toLocaleDateString(),
            escudoLocal,
            matches[i].homeTeam.name,
            escudoVisitante,
            matches[i].awayTeam.name,
            resultados,
        ]

        datosPartidos.forEach(partidosTabla =>{
            let td = document.createElement("td");  
            td.append(partidosTabla)    
            tr.appendChild(td)          
            tbody.appendChild(tr)
        })        
    }
};

