
//declaramos la funcion rgbToHex que transforma a hexadecimal
exports.rgbToHex = function (red, green, blue){ 
    // necesitas tres parametros por el [255,0,0] de rgbToHex de app.js en este caso son (red, green, blue)
    let redHex = red.toString(16); //16 es el numero maximo en hexadecimal
    let greenHex = green.toString(16); //16 es la base del toString
    let blueHex = blue.toString(16);

    return transform(redHex) + ransform(greenHex) + ransform(blueHex); //introducimos los datos a trasnformar
};

function transform(hex){
    return(hex.length === 1 ? "0" + hex : hex);
    //si el hex intruducido es un numero conviertelo a un numero string "0" si no no le hagas nada
};

//declaramos la funcion hexToRgb que transforma a un arreglo RGB
//si lo exportamos no podemos usarlo aqui. tendriamos que exportarlo de manera separada
exports.hexToRgb = function(hex){
    let red = parseInt(hex.substring(0,2), 16); 
    //subString define la longitud de la cadena de texto hola = ho
    //16 es la base del parseInt (hex) por defecto es 10 osea int
    let green = parseInt(hex.substring(2,4), 16); 
    //2 a 4 por que un hexadecimal tiene 6 numeros 012345
    let blue = parseInt(hex.substring(4,6), 16);
    
    //retorna los datos de los colores en formato de arreglo rbg
    return[red, green, blue];
};