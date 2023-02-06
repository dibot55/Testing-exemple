//---------------------------------Test unitario--------------------------------

let expect = require('chai').expect; //expectativa y esperamos algo
let converter = require('../app/converter'); //converter es el index.js

//esta es una clase
describe ("Color code converter", function(){//con describe le ponemos un nombre a nuestro test

    //describe es un grupo de pruebas
    describe("HEX to RGB conversion", function(){
        it("converts basic colors", function(){
            //expectativa, simulamos el comportamiento de mi aplicación
            let redHex = converter.rgbToHex(255,0,0);//"converter" es el llamado a index.js
            let greenHex = converter.rgbToHex(0,255,0); //rgbToHex es una funcion de index.js
            let blueHex = converter.rgbToHex(0,0,255);
            //yo espero que...
            expect(redHex).to.equal("ff0000");//si una de estas falla mi caso falla
            expect(greenHex).to.equal("00ff00");//el .to es de chai
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("RGB to HEX conversion", function(){
        it("converts basic colors", function(){
            //expectativa, simulamos el comportamiento de mi aplicación
            let red = converter.hexToRgb("ff0000");
            let green = converter.hexToRgb("00ff00");
            let blue = converter.hexToRgb("0000ff");
            //yo espero que...
            expect(red).to.deep.equal([255,0,0]); //.deep es exactamente igual como el ===
            expect(green).to.deep.equal([0,255,0]);
            expect(blue).to.deep.equal([0,0,255]);
            
        });
    });
});
