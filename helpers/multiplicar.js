const fs = require('fs')
const { argv } = require('process')
var colors = require('colors/safe');

// const crearArchivo = (n)=>{

//     return new Promise ((resolve, reject)=>{


//         console.log("===================")
//         console.log('   Tabla del ',n)
//         console.log("===================")
        
        
//         let salida = " "
        
//         for (let i=0; i<=10; i++){
//          salida += (`  ${n} * ${i}  = ${n * i} \n `)
//         }
        
//         console.log(salida)
        
//         fs.writeFileSync(`tabla-${n}.txt`, salida)
        
        
//         if(salida){
//             resolve (`tabla-${n}.txt `)
//         }
//         else{
//             reject('ocurrio un error!')
//         }
        
//         })

      
        

//     CON EL ASYNC 

const crearArchivo = async (n=5, listar= false, hasta)=>{

    try {

        
        
        
        let salida = " "
        
        for (let i=0; i<=hasta; i++){
         salida += (`  ${n} * ${i}  = ${n * i} \n `)
        }

        if(listar){
            console.log(colors.yellow("==================="))
            console.log('   Tabla del ',n)
            console.log("===================")

            console.log(colors.rainbow(salida))
        }

      
        
        fs.writeFileSync(`./salida/tabla-${n}.txt`, salida)
        
         return (`tabla-${n}.txt `)
        
    } catch (err) {
        throw err
    }

    


        
      
        

    }



module.exports={
    crearArchivo
}