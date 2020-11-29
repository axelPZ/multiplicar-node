//sin destructuracion
//const multiplicar = require('./multiplicar/multiplicar);
//multiplicar.crearArchivo

//con destructuracion
//const { crearArchivo } = require('./multiplicar/multiplicar');


//USANDO YARGS 
// el YARGS nos ssirve para mandarle varios valores desde la consola y que reconosca cual es cual sin importar el orden
//EJEMPLO DEL CONSOLA = 
//node app listar --b 5 --l 10
// me mandamos como base 5 y liminte 10 aqui se utilizan los alias descritos a comtinuacion
//comando para instalar yargs =  npm i yargs --save

/*
CONFIGURACION DEL YARGS AQUI EN EL MISMO ARCHIVO.
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea una tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })

.help()
    .argv;
    
    AHORA SE MANDA DESDE LA CARPETA CONFIG*/
//const { argv} = require('./config/yargs') //asi se manda a llamar todo lo que esta dentro del archivo argv
const argv = require('./config/yargs').argv; //solo llamamos el metodo argv

//const { showCompletionScript } = require('yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//colores en la consola
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado', colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}
//let argv2 = process.argv;
//console.log('BASE', argv.base);
//console.log('LIMITE', argv.limite);


//crearArchivo(base)
//.then(archivo => console.log(`Archivo creado: ${archivo}`))
//.catch(err => console.log(err));