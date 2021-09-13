"use strict";
function Suma(num1, num2) {
    return (num1 + num2);
}
function Resta(num1, num2) {
    return (num1 - num2);
}
function Multiplicacion(num1, num2) {
    return (num1 * num2);
}
function Division(num1, num2) {
    return (num1 / num2);
}
var MayorDeDosNumeros = function (x, y) {
    var g = 0;
    if (x > y) {
        console.log(x + " mas grande");
        g = x;
    }
    else {
        console.log(y + " mas grande");
        g = y;
    }
    return g;
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["SuperUser"] = 2] = "SuperUser";
})(Role || (Role = {}));
function AgregarUsuario(name, role, dpto) {
    console.log('User added');
}
AgregarUsuario("Ivan", Role.Admin, 'HR');
