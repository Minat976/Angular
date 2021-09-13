"use strict";
var CuentaPersonal = /** @class */ (function () {
    function CuentaPersonal(saldo, interes, montoDeRetiro) {
        this.saldo = saldo;
        this.interes = interes;
        this.montoDeRetiro = montoDeRetiro;
    }
    CuentaPersonal.prototype.Deposito = function () {
        return this.saldo++;
    };
    CuentaPersonal.prototype.Retiro = function () {
        return this.saldo = this.saldo - this.montoDeRetiro;
    };
    CuentaPersonal.prototype.ConsultaSaldo = function () {
        return this.saldo;
    };
    return CuentaPersonal;
}());
var CuentaEmpresarial = /** @class */ (function () {
    function CuentaEmpresarial(saldo, interes, montoDeRetiro) {
        this.saldo = saldo;
        this.interes = interes;
        this.montoDeRetiro = montoDeRetiro;
    }
    CuentaEmpresarial.prototype.Deposito = function () {
        return this.saldo++;
    };
    CuentaEmpresarial.prototype.Retiro = function () {
        return this.saldo = this.saldo - this.montoDeRetiro;
    };
    CuentaEmpresarial.prototype.ConsultaSaldo = function () {
        return this.saldo;
    };
    return CuentaEmpresarial;
}());
var TarjetaDeCredito = /** @class */ (function () {
    function TarjetaDeCredito(saldo, interes, montoDeRetiro) {
        this.saldo = 10;
        this.interes = 20;
        this.montoDeRetiro = 20;
        this.saldo = saldo;
        this.interes = interes;
        this.montoDeRetiro = montoDeRetiro;
    }
    TarjetaDeCredito.prototype.Deposito = function () {
        return this.saldo++;
    };
    TarjetaDeCredito.prototype.Retiro = function () {
        return this.saldo = this.saldo - this.montoDeRetiro;
    };
    TarjetaDeCredito.prototype.ConsultaSaldo = function () {
        return this.saldo;
    };
    TarjetaDeCredito.prototype.calculaIntereses = function () {
        return (this.saldo * this.interes) + this.saldo;
    };
    return TarjetaDeCredito;
}());
var CuentaPersonal = new CuentaPersonal();
miTriangulo.color = "verde";
miTriangulo.calculaArea();
