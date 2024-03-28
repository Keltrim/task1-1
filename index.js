#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {ParameterParser} from './cli/parameter-parser.js';
import {AddCommand} from './cli/commands/add.command.js';
import {CurrentCommand} from './cli/commands/current.command.js';
import {SubCommand} from './cli/commands/sub.command.js';
import {isBoolean, isNumber, showErrorMessage} from './cli/utils.js';

let params= null;
const yargsInstance = yargs(hideBin(process.argv));

yargsInstance
    .scriptName('cmd')
    .usage('$0 <cmd> [options]')
    .command({
        command: 'current',
        describe: 'Получить текущую дату и время',
        builder: {
            d: {
                alias: 'date',
                describe: 'Получить текущий день',
                type: 'boolean',
                coerce: isBoolean
            },
            m: {
                alias: 'month',
                describe: 'Получить текущий месяц',
                type: 'boolean',
                coerce: isBoolean
            },
            y: {
                alias: 'year',
                describe: 'Получить текущий год',
                type: 'boolean',
                coerce: isBoolean
            }
        },
        handler: () => {
            try {
                const command = new CurrentCommand();
                command.execute(params);
            }
            catch (_) {
                showErrorMessage(yargsInstance);
            }
        }
    })
    .command({
        command: 'add',
        describe: 'Добавить указанное количество времени к текущей дате',
        builder: {
            d: {
                alias: 'date',
                describe: 'Добавить указанное количество дней',
                type: 'number',
                coerce: isNumber

            },
            m: {
                alias: 'month',
                describe: 'Добавить указанное количество месяцев',
                type: 'number',
                coerce: isNumber
            },
            y: {
                alias: 'year',
                describe: 'Добавить указанное количество лет',
                type: 'number',
                coerce: isNumber
            }
        },
        handler: function () {
            try {
                const command = new AddCommand();
                command.execute(params);
            }
            catch (_) {
                showErrorMessage(yargsInstance);
            }
        }
    })
    .command({
        command: 'sub',
        describe: 'Вычесть указанное количество времени из текущей даты',
        builder: {
            d: {
                alias: 'date',
                describe: 'Вычесть указанное количество дней',
                type: 'number',
                coerce: isNumber
            },
            m: {
                alias: 'month',
                describe: 'Вычесть указанное количество месяцев',
                type: 'number',
                coerce: isNumber
            },
            y: {
                alias: 'year',
                describe: 'Вычесть указанное количество лет',
                type: 'number',
                coerce: isNumber
            }
        },
        handler: () => {
           try {
                const command = new SubCommand();
                command.execute(params);
            }
            catch (_) {
                showErrorMessage(yargsInstance);
            }
        }
    })
    .middleware((argv, yargs) => {
        params = ParameterParser.parse(argv)
    })
    .strictCommands()
    .strictOptions()
    .parse()