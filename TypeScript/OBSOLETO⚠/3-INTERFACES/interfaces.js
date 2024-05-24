"use strict";
let usuario1 = { nombreUsuario: 'juan', contraseña: '1234' };
console.log(usuario1);
let avion = {
    abordarTransporte: function () {
        console.log('se abordo el avion');
    }
};
avion.abordarTransporte();
/*
    al definir una interfaz es definir un contrato

    y cuando se crea una variable del tipo de intefazque se a definido, simplemente se tiene que
    corresponder a dicha interfaz
*/ 
