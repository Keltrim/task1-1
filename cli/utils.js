const isNumber = (value) => {
    if (typeof value === 'number' && !isNaN(value)) {
        return value;
    }
    throw new Error('Значение параметра команды должно быть числовым');
}

const isBoolean = (value) => {
    return typeof value === 'boolean';
}
const showErrorMessage = (yargs) => {
    yargs.showHelp();
    console.log('команда введена некорректно, повторите ввод')
}

export {isNumber, isBoolean, showErrorMessage}