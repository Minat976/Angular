function Suma(num1:number,num2:number):number{
    return(num1+num2);
}
function Resta(num1:number,num2:number):number{
    return(num1-num2);
}

function  Multiplicacion(num1:number,num2:number):number{
    return(num1*num2);
}


function Division(num1:number,num2:number):number{
    return(num1/num2);
}



let MayorDeDosNumeros = (x: number, y: number) => {
    let g=0;
    if(x>y){
        console.log(`${x} mas grande`)
        g=x;
    }
     
    else {
        console.log(`${y} mas grande`) 
        g=y;
    }
     return g;
}

enum Role {'Admin','User','SuperUser'}
type Department ='MK'|'Finanzas'|'HR';

function AgregarUsuario(name:string, role: Role, dpto: Department):void{
    console.log('User added');
}

AgregarUsuario("Ivan",Role.Admin,'HR');