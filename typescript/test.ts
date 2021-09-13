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

enum Brands {Chevrolet,Cadilac, Ford}
let carro : Brands = Brands.Ford

function SaludaAlUsuario() : void {
    console.log('Hola usuario');
}

let marca = "Bachoco";


//Sobrecarga
// function SumaDeNumeros(num1:number, num2:number):number{
//      return num1+num2;
// }

// function SumaDeNumeros(num1:number[], num2?:number):number;

// function SumaDeNumeros(num:any,num2?:number):number{
// suma=0;     
// if(Array.isArray(num1)){

//   } 
// return suma
//  }

function hello(names: string): string;
function hello(names: string[]): string ;
function hello(names: any, greeting?: string): string {
    let namesArray: string[];
    if (Array.isArray(names)) {
        namesArray = names;
    } else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}

function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a:any, b:any):any{
    return a+b;
}

class Persona{
    private nombre:string = '';
    private apellidoPaterno:string='';
    private apellidoMaterno:string='';

    constructor(n:string, ap:string, am:string, private mayorDeEdad:boolean){
        this.nombre = n;
        this.apellidoMaterno = am;
        this. apellidoPaterno = ap;
    }

    getINE(){
        return this.mayorDeEdad?"Puede tramitar el INE": "No puede asignarle el INE";
    }
}

interface FiguraGeometrica{
    color: string;
    diametro?:number;
    calculaArea():number;
}

class Rectangulo implements FiguraGeometrica{
    private base:number=0;
    private altura:number=0; 
    calculaArea(){
        return this.base*this.altura;
    }
    color:string = "Rojo";
}

class Triangulo implements FiguraGeometrica{
    private base:number=0;
    private altura:number=0; 
    color:string = "Verde";
    calculaArea(){
        return (this.base*this.altura)/2;
    }
}



class TrianguloIsosceles extends Triangulo{
}

class TrianguloEscaleno extends Triangulo{
}

let miTriangulo= new TrianguloEscaleno();
miTriangulo.color="verde";
miTriangulo.calculaArea();


class Circulo  implements FiguraGeometrica{
    color:string = "Azul";
    diametro:number=10;
    calculaArea(){
        return Math.PI*Math.pow(this.diametro/2,2);
    }
}