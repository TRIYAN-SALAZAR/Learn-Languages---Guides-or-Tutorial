interface Usuario{
    nombreUsuario: string;
    contraseña: string;
    confir_contra?:string; //el signo de interrogacion es para hacer un dato opcional
}

let usuario1:Usuario = {nombreUsuario:'juan',contraseña:'1234'};
console.log(usuario1);
//document.getElementById('pi').innerHTML = usuario1.nombreUsuario;

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
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