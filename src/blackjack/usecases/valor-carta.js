
/**
 * Obtener el valor de la carta
 * @param {String} carta Ejemplo: 9C
 * @returns {Number} Retorna el valor númerico de dicha carta
 */


export const valorCarta = ( carta ) => {

    if(!carta) throw Error('No has indicado ninguna carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}