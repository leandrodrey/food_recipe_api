import {createRequire} from 'node:module';
import fs from 'node:fs/promises';

const require = createRequire(import.meta.url);

export const readJSON = (path) => require(path);

export const writeJSON = async (path, data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(path, jsonData);
        console.log('Datos guardados correctamente en el archivo JSON.');
    } catch (err) {
        console.error('Error al guardar los datos en el archivo JSON:', err);
    }
}
