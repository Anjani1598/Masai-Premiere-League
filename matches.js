// write js code here corresponding to matches.html


var match_data = JSON.parse(localStorage.getItem("schedule"))

var bookmarkArr = JSON.parse(localStorage.getItem("favourites"))||[]

display(match_data)
function display(data){
    document.querySelector("tbody").innerHTML = ""

    data.forEach(function(el){
        
    
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
    fav.innerText = "Add to Favourites"
    fav.style.cursor = "pointer"
    fav.style.color = "teal"
    fav.addEventListener("click",function(){
        console.log("clicked")
        bookmark(el)
    })

    tr.append(matchNum,teamA,teamB,date,venue,fav)

    document.querySelector("tbody").append(tr)
    })

}


var filtered = document.querySelector("#filterVenue")


document.querySelector("#filterVenue").addEventListener("change",function(){
    filterbyVenue()
})

function filterbyVenue()
{
    if(filtered.value=="none")
    {
        display(match_data)
    }
    else{
        var filtered_data = match_data.filter(function(el){
            return el.venue == filtered.value
        })
        display(filtered_data)
    }
}


function bookmark(element)
{
    var bookmarkData = element

    var check = bookmarkArr
    var found = 0
    for(var i=0;i<check.length;i++)
    {
        if(element == check[i])
        {
            alert("already bookmarked")
            found = 1
            break;
        }
        
    }
    if(found==0)
    {
        bookmarkArr.push(bookmarkData)
        localStorage.setItem("favourites",JSON.stringify(bookmarkArr))
        
    }
    

}