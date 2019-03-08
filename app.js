//requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: `, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}



// console.log('Base', argv.base);
// console.log('Limite', argv.limite);



// let parametro = argv[2];
// let base = parametro.split('=')[1];