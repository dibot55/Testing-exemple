const express = require('express');
const app = express();

const converter = require('./converter');//llamamos al converter.js que transforma rbg a hex y viceversa

app.get("/rbgtohex", function(request, response){
    const red = parseInt(request.query.red, 10); //base 10 decimal
    const green = parseInt(request.query.green, 10);
    const blue = parseInt(request.query.blue, 10);

    const hex = converter.rgbToHex(red, green, blue);//obtenemos los parametros de rbgToHex en converter.js
    response.send(hex);
});

app.get("/hextorgb", function(request, response){
    const hex = request.query.hex;
    const rgb = converter.hexToRgb(hex);
    
    response.send(JSON.stringify(rgb));//como recibimos numeros lo convertimos a string
});

//server
app.listen(3000);