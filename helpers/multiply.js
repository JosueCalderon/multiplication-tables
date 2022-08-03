const fs = require('fs');
const colors = require('colors/safe');

const createFile = async (number, list, end) => {

    try {

        let data, consoleData = "";

        for (let i = 0; i <= end; i++) {

            consoleData += `${number} ${colors.green('*')} ${i} ${colors.green('=')} ${colors.yellow(number * i)}\n`
            data += `${number} * ${i} = ${number * i}\n`

        }

        if (list) {

            console.log(colors.green('===================================='));
            console.log();
            console.log('MULTIPLICATION TABLE WITH BASE:', colors.green(number));
            console.log();
            console.log(colors.green('===================================='));
            console.log();
            console.log(consoleData);

        }

        fs.writeFileSync(`./tables/tabla-${number}.txt`, data);

        return `Table with base: ${colors.green(number)}`

    } catch (error) {

        throw error;

    }

}

module.exports = {
    createFile
}