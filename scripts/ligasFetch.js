ligasFetch()
function ligasFetch() {
    const url = "https://api.football-data.org/v2/competitions?plan=TIER_ONE"
    fetch(url,{
        method : "GET",
        headers:{
            "X-Auth-Token" : "ed78a9ec730f4a56b3c1b1d295f847ba"
        }
    }).then(response => {
        if(response.ok) return response.json();
    }).then(data => {
        ligas(data)
    }).catch( error => {
        console.log(error)
    })
}

function ligas(data){
    
    console.log(data)
    let dataCompetitions = data.competitions

    dataCompetitions.forEach(element => {
        competitionsIds = element.id
        competitionsCountry = element.area.name
        competitionsNameLeague = element.name
        console.log(competitionsIds, competitionsCountry, competitionsNameLeague)
    });

}