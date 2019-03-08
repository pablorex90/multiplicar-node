const fileSystem = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fileSystem.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject('La base o el limite no es un número');
            return;
        }

        console.log('==========================='.green);
        console.log(`===== tabla de ${base}=====`.green);
        console.log('==========================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i} `);
        }

    });


};


module.exports = {
    crearArchivo,
    listarTabla
}