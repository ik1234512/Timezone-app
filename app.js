let button = document.getElementById("getTimezone")
if(button!==null){
    button.addEventListener("click",timeZone)
}
function timeZone(){
    document.getElementById("showTimezone").innerHTML = Date()
    
}
