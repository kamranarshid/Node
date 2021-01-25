const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    //if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
     //   console.log('New note added!')
    //} else {
      //  console.log('Note title taken!')
   // }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}


// const fs = require('fs')

// const getNotes = function () {
//     return 'Your notes...'
// }

// const addNotes = (title, address)=>{
//         const notes = loadNotes()
//         notes.push({
//             title: title,
//             address: address

//         })

//         saveNotes(notes)
// }

// const saveNotes = (notes)=>{
//    const dataJson = JSON.stringify(notes)
//    fs.writeFileSync('notes.json',dataJson)
// }

// const loadNotes = ()=>{
//     try{
//         const readFile = fs.readFileSync('note.json')
//         const convertFileToString = readFile.toString()
//         //const stringParsed = JSON.parse(convertFileToString)
//         return JSON.parse(convertFileToString )
//     }catch(e){
//         return []
//     }
    

// }

// module.exports = {
//     getNotes: getNotes,
//     addNotes: addNotes
// }