/**
 * Importa una porcion de codigo html o template
 * @param {string} ubicacionTemplate - Ruta donde se ubica el Template dentro del proyecto
 * @param {string} idTemplate - ID de la etiqueta <template>
 * @param {string} contenedorPadre - Nombre de la etiqueta, ID o clase en donde se inyectara el template
 */
export async function importarTemplate(ubicacionTemplate, idTemplate, contenedorPadre){
    const response = await fetch(ubicacionTemplate);
    const texto = await response.text();

    const parser = new DOMParser();
    const htmlDoc = parser .parseFromString(texto, "text/html");

    const template = htmlDoc.getElementById(idTemplate);
    const clone = document.importNode(template.content, true);

    document.querySelector(contenedorPadre).appendChild(clone);
}

