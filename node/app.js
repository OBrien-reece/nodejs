const chalk = require('chalk');
console.log(chalk.red('OBrien Reece'));
console.log(chalk.blue('OBrien Reece'));
console.log(chalk.green('OBrien Reece'));

//combine styled normal strings
const log = console.log;
log(chalk.blue('Hello') + ',my name is' + chalk.red(' OBrien Reece'));

//Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold(`My name is O'Brien Reece`));

//Pass in mutiple arguments
log(chalk.blue('Hello','World','Die'));

//Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
log(chalk.red('OBrien', chalk.underline.bgBlue.bold.italic('Evance') + '!'));

//Nest styles of the same type even color underline backround
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold.italic('with a blue substring') +
    ' that becomes blue again'
));

log(chalk.green('I am a green name ' + chalk.blue.underline.bold.italic.bgGray('with a blue substring') + ' that becomes green again'))


// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log('CPU: ', chalk.red('90%'));


//Defining my own themes

const error = chalk.red.bold;
console.log(error('Error'));
const warning =chalk.keyword('orange');
console.log(warning('Warning'));
const dim = chalk.dim;
console.log(dim('Dim this string'));

// const validator = require('validator');
// const getEmail = validator.isEmail('indeche.evans.o@gmail.com');
// console.log(validator.isEmail('indeche.evans.o@gmail.com'));
// console.log(validator.isURL('https://www.npmjs.com/package/validator'));