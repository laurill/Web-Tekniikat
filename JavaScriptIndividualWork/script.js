// Kun painiketta painetaan
document.getElementById("addNote").onclick = function(){
    //Luodaan aika
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    // Lue syöte ja tallenna muuttujaan
    let participant = document.getElementById("name").value;
    let note = document.getElementById("textbox").value;
    // Luodaan uusi name ja note elementti
    let newNoteElement = document.createElement("newNote");
    //Luetaan checkbox

    let checkbox = document.getElementById("important")
    // Aseta name ja note elementtien sisällöksi syötetty tieto
    newNoteElement.innerHTML = day + "." + month + "." + year + " " + "(" + participant + ")" + "<br>" + "<span id='message'>" + note + "</span>" + "<br>"
    document.getElementById("printNote").style.border = "thin solid #000000";
    // Lisää note elementti ul-elementille
    document.getElementById("printNote").appendChild(newNoteElement);
    // If
    if (participant == "") {
        newNoteElement.innerHTML = "" ;
    }
    if (document.getElementById("important").checked) {
        let list = document.getElementById("message");

        list.classList.add("myStyle");
    }
}