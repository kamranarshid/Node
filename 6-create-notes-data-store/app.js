const chalk = require('chalk')
const yargs = require('yargs')
const { readNotes } = require('./notes.js')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        address: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNotes(argv.title, argv.address)
    
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title,argv.address)
        
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    
    handler(argv){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    
    builder: { 
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
            }
        },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()