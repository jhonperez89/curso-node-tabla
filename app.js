const fs = require('fs');
const { arch } = require('os');
// const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


            
            
            

console.clear()

console.log(argv);
//  console.log('base :yargs', argv.base, argv.h) 


crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch( err => console.log(err) )