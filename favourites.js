// write js code here corresponding to favourites.html


var fav_data = JSON.parse(localStorage.getItem("favourites"))

display(fav_data)


function display(data){

    data.forEach(function(el,i){
    
    var tr  = document.createElement("tr")

    var matchNum = document.createElement("td")
    matchNum.innerText = el.MatchNumber
    var teamA = document.createElement("td")
    teamA.innerText = el.teamA
    var teamB = document.createElement("td")
    teamB.innerText = el.teamB
    var date = document.createElement("td")
    date.innerText = el.date
    var venue = document.createElement("td")
    venue.innerText = el.venue
    var fav = document.createElement("td")
    fav.innerText = "Delete"
    fav.style.cursor = "pointer"
    fav.style.color = "teal"
    fav.addEventListener("click",function(){
        console.log("clicked")
        removefunc(el,i)
    })

    tr.append(matchNum,teamA,teamB,date,venue,fav)

    document.querySelector("tbody").append(tr)
    })

}

function removefunc(element,index)
{
    fav_data = fav_data.splice(index,1)

    localStorage.setItem("favourites",JSON.stringify(fav_data))
    event.target.parentNode.remove()

    // display(fav_data)
    

}