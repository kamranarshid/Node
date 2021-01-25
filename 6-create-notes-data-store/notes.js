const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()
       notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = ()=>{
    try{
        const readFile = fs.readFileSync('notes.json')
        const convertFileToString = readFile.toString()
        return JSON.parse(convertFileToString )


        

  
    }catch(e){
        return []
    }
    

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}