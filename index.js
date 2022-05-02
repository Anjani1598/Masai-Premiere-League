// write js code here corresponding to index.html
// You should add submit event on the form


var form = document.querySelector("form")
var matches = JSON.parse(localStorage.getItem("schedule"))||[]

form.addEventListener("submit",function(){

    event.preventDefault()

    var match_data = {
        MatchNumber : form.matchNum.value,
        teamA : form.teamA.value,
        teamB : form.teamB.value,
        date : form.date.value,
        venue : form.venue.value
    }


    matches.push(match_data)

    localStorage.setItem("schedule",JSON.stringify(matches))
    // window.location.reload
})
