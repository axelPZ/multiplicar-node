//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`table de ${base}`.green);
    console.log('====================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base*i} \n`;
        }

        //guarda la tabla en un documento txt

        //primer parametro el nombre del txt,
        //segundo lo que se va grabar
        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}`);
        });
    });
}


//EXPORTAR
module.exports = {
    crearArchivo,
    listarTabla
}