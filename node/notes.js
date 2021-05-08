const fs = require('fs')
const getNotes = function() {
    return "Your notes are........"
}

const addNotes = function(title,body){
    const notes = loadNotes()

    //filter data to avoid duplicatess
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    });

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note Added")
    }else{
        console.log("Note title taken")
    }

    //stringify the notes then save
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const saveNotes = function(notes){

}

//load in the existing notes when someone wants to do something
const loadNotes = function(){ 
    //defensive code that runs even if notes,json does not exist
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        //return console.error('error');
        return []
    }

}

//export two diff objects
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}