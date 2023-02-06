//--------------------------------probar APIS------------------
const expect = require('chai').expect;
const request = require('request');

describe("Color Code Converter API", function(){
    describe('RGB to HEX conversion', function () { 
        const url = "http://localhost:3000/rgbtohex?red=255&green=255&blue=255"; 
        //peticion http haciendo una query de red, green, blue en /rgbtohex
        it("return status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200); //espera un 200 todo chido
                done();//ejecuta la funcion
            });
        });

        it("return color in hex", function(done){
            request(url, function(error, response, body){
                expect(body.statusCode).to.equal("ffffff");
                done();
            });
        });
    });

    describe('HEX to RGB conversion', function () { 
        const url = "http://localhost:3000/hextorgb?hex=00ff00"; 
        //peticion http haciendo una query de hex 00ff00 en /hextorgb
        it("return status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200); //espera un 200 todo chido
                done();//ejecuta la funcion
            });
        });

        it("return color in rgb", function(done){
            request(url, function(error, response, body){
                expect(body.statusCode).to.equal("[0,255,0]");// arreglo rbg
                done();
            });
        });
    });
});