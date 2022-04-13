const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption: true,
                describe:'Es la base de la tabla de multiplicar'
            })

            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                describe:'Muestra la tabla en consola'

            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10,
                describe:'Indica hasta que numero se quiere multiplicar'

            })

            .check((argv, option)=>{
                if(isNaN(argv.base && argv.h)){
                    throw ' tiene que ser un numero'
                }
                return true
            })
            .argv

module.exports = argv;