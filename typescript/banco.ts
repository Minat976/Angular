interface ICuenta{
    saldo:number;
    interes:number;
    montoDeRetiro?:number;
    Deposito():number;
    Retiro():number;
    ConsultaSaldo():number;
}

interface ICuentaDeCredito extends ICuenta{
    calculaIntereses():number;
}


class CuentaPersonal implements ICuenta{
    saldo:number;
    interes:number;
    montoDeRetiro:number;
    constructor(saldo:number, interes:number, montoDeRetiro:number){
        this.saldo = saldo;
        this.interes = interes;
        this.montoDeRetiro = montoDeRetiro;
    }
    
    Deposito(){
        return  this.saldo++;
    }
   
    Retiro(){
        return this.saldo = this.saldo - this.montoDeRetiro;
    }

    ConsultaSaldo(){
        return this.saldo;
    }
}

class CuentaEmpresarial implements ICuenta{
    saldo:number;
    interes:number;
    montoDeRetiro:number;
    constructor(saldo:number, interes:number, montoDeRetiro:number){
        this.saldo = saldo;
        this.interes = interes;
        this.montoDeRetiro = montoDeRetiro;
    }
    
    Deposito(){
        return  this.saldo++;
    }
   
    Retiro(){
        return this.saldo = this.saldo - this.montoDeRetiro;
    }

    ConsultaSaldo(){
        return this.saldo;
    }
}

class TarjetaDeCredito implements ICuentaDeCredito{
    saldo:number;
    interes:number;
    montoDeRetiro:number=20;
    constructor(saldo:number, interes:number, montoDeRetiro:number){
        this.saldo = saldo;
        this.interes = interes;
        this.montoDeRetiro = montoDeRetiro;
    }
    
    Deposito(){
        return  this.saldo++;
    }
   
    Retiro(){
        return this.saldo = this.saldo - this.montoDeRetiro;
    }

    ConsultaSaldo(){
        return this.saldo;
    }

    calculaIntereses(){
        return (this.saldo*this.interes)+this.saldo;
    }
}
