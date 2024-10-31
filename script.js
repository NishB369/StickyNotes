const notesContainer = document.querySelector("#app")
const addNoteButton = document.querySelector(".add-note")

function getNotes(){
    JSON.parse(localStorage.getItem("stickynotes-notes") || "[]")
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes))
}

function createNoteElement(id, content){
    const elem = document.createElement("textarea")
    elem.classList.add("note")
    elem.value=content
    elem.placeholder="Add Data to Sticky Note"

    elem.addEventListener("change", ()=>{
        updateNote(id,elem.value)
    })

    return elem

}

function addNote(){

}

function updateNote(){

}

function deleteNote(){

}