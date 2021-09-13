"use strict";
// var myBoolea: boolean = true;
// var myNumber : number = 1234;
// var myStringArray: string[] = [`first`,`second`,`third`]; 
// let flag : boolean = false;
// let dato : any = 'dato cadena';
// console.log(dato);
// dato = 1000;
// dato = true;
// console.log(dato);
// type Animal = 'Cheetah'| 'Lion' | 'Turtle';
// const prueba : Animal = "Turtle";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadilac"] = 1] = "Cadilac";
    Brands[Brands["Ford"] = 2] = "Ford";
})(Brands || (Brands = {}));
var carro = Brands.Ford;
function SaludaAlUsuario() {
    console.log('Hola usuario');
}
var marca = "Bachoco";
function hello(names, greeting) {
    var namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}
function add(a, b) {
    return a + b;
}
var Persona = /** @class */ (function () {
    function Persona(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombre = n;
        this.apellidoMaterno = am;
        this.apellidoPaterno = ap;
    }
    Persona.prototype.getINE = function () {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarle el INE";
    };
    return Persona;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    Rectangulo.prototype.calculaArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo() {
        this.base = 0;
        this.altura = 0;
        this.color = "Verde";
    }
    Triangulo.prototype.calculaArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
var TrianguloIsosceles = /** @class */ (function (_super) {
    __extends(TrianguloIsosceles, _super);
    function TrianguloIsosceles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrianguloIsosceles;
}(Triangulo));
var TrianguloEscaleno = /** @class */ (function (_super) {
    __extends(TrianguloEscaleno, _super);
    function TrianguloEscaleno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrianguloEscaleno;
}(Triangulo));
var miTriangulo = new TrianguloEscaleno();
miTriangulo.color = "verde";
miTriangulo.calculaArea();
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.color = "Azul";
        this.diametro = 10;
    }
    Circulo.prototype.calculaArea = function () {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    };
    return Circulo;
}());
