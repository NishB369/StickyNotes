const notesContainer = document.querySelector("#app")
const addNoteButton = document.querySelector(".add-note")

function getNotes(){
    JSON.parse(localStorage.getItem("stickynotes-notes") || "[]")
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes))
}

function createNoteElement(id, content){

}

function addNote(){

}

function updateNote(){

}

function deleteNote(){

}