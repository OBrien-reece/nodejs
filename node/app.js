const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

//Shows the yargs behind the scenes
console.log(process.argv);

//customize yargs version
yargs.version('1.1.0')

//In the notes
// Add, Remove, read, List

//Create add command
yargs.command({
    command: "Add",
    describe: "Adding a note",
    builder: {
         title: {
             describe: "Note Title",
             demandOption: true,
             type: 'string'
         },
        body: {
            describe: "This is the body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
        //console.log("Title: " +argv.title);
        //console.log("Body: " +argv.body);
    }
});


//Create remove command
yargs.command({
    command: 'Remove',
    describe: "Removing a new note",
    handler: function(){
        console.log("Removing a new note")
    }
});

//Create List
yargs.command({
    command: "List",
    describe: "Add New List",
    handler: function(){
        console.log("Add New List")
    }
});

//Read the notes
yargs.command({
    command: "Read",
    describe: "Read the notes",
    handler: function() {
        console.log("Read the notes")
    }
});

yargs.parse();
//console.log(yargs.argv);


// const getNotes = require('./notes.js');

// const msg = getNotes();

// const notesAdd = process.argv[2];

// if(notesAdd === 'Add'){
//     console.log('Adding Notes')
// }

// const chalk = require('chalk');
// console.log(chalk.red('OBrien Reece'));

// console.log(process.argv[2]);
// // console.log(chalk.blue('OBrien Reece'));
// // console.log(chalk.green('OBrien Reece'));

// // //combine styled normal strings
// // const log = console.log;
// // log(chalk.blue('Hello') + ',my name is' + chalk.red(' OBrien Reece'));

// // //Compose multiple styles using the chainable API
// // log(chalk.blue.bgRed.bold(`My name is O'Brien Reece`));

// // //Pass in mutiple arguments
// // log(chalk.blue('Hello','World','Die'));

// // //Nest styles
// // log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// // log(chalk.red('OBrien', chalk.underline.bgBlue.bold.italic('Evance') + '!'));

// // //Nest styles of the same type even color underline backround
// // log(chalk.blue(
// //     'I am a blue line ' +
// //     chalk.green.underline.bold.italic('with a green substring') +
// //     ' that becomes blue again'
// // ));

// // log(chalk.green('I am a green name ' + chalk.blue.underline.bold.inverse.italic.bgGray('with a blue substring') + ' that becomes green again'))


// // // ES2015 template literal
// // log(`
// // CPU: ${chalk.red('90%')}
// // RAM: ${chalk.green('40%')}
// // DISK: ${chalk.yellow('70%')}
// // `);

// // log('CPU: ', chalk.red('90%'));


// // //Defining my own themes

// // const error = chalk.red.bold;
// // console.log(error('Error'));
// // const warning =chalk.keyword('orange');
// // console.log(warning('Warning'));
// // const dim = chalk.dim;
// // console.log(dim('Dim this string'));

// // // const validator = require('validator');
// // // const getEmail = validator.isEmail('indeche.evans.o@gmail.com');
// // // console.log(validator.isEmail('indeche.evans.o@gmail.com'));
// // // console.log(validator.isURL('https://www.npmjs.com/package/validator'));