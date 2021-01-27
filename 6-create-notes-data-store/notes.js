const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = (title, address) => {
    const notes = loadNotes()
    
     const duplicateNotes = notes.find((note) =>  note.title === title )
     
    if(!duplicateNotes ){
        notes.push({
            title: title,
            address: address
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("new note added"))
    }else{
        console.log(chalk.bgRed("This title is already in the list"))
    }
   

}

const removeNote = (title)=>{
    const notes = loadNotes()
    const checkTitle = notes.filter((note) =>  note.title !== title)
console.log(notes.length +">"+ checkTitle.length)
    if(notes.length > checkTitle.length){
        saveNotes(checkTitle)
        console.log(chalk.bgGreen("Notes are removed"))
    }else{
        console.log(chalk.bgRed("Unable to delete notes"))
    }
     
  
    
}

const listNotes = (title, address)=>{
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title +'-'+note.address)
    });

}

const readNotes = (title)=>{
    const notes =loadNotes()
    const readNote = notes.find((note) =>  note.title === title )

    if(readNote){
        console.log(chalk.greenBright.inverse(readNote.title +'  '+ readNote.address))
    }else{
        console.log(chalk.redBright .inverse("No Record Found"))
    }
    
    
  

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    try {
        const readFile = fs.readFileSync('notes.json')
        const convertFileToString = readFile.toString()
        return JSON.parse(convertFileToString)
    } catch (e) {
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}