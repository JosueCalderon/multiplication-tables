const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiply base'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        describe: 'Show table in console'
    })
    .options('e', {
        alias: 'end',
        type: 'number',
        demandOption: true,
        describe: 'Maximum number of multiplications'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'The base has to be a number.'
        }
        if (isNaN(argv.e)) {
            throw 'The maximum number has to be a number.'
        }
        return true;
    })
    .argv;

module.exports = argv;