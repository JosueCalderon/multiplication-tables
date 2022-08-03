const { createFile } = require('./helpers/multiply')
const argv = require('./config/yargs')

console.clear();

createFile(argv.b, argv.l, argv.e)
    .then(fileName => console.log(fileName, 'created.'))
    .catch(error => console.log(error));


