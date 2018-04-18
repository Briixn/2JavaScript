console.log('holi');
var nombre = 'Adrian';
var edad = 20;
var deudas = 223.36;
var FechaNacimiento = new Date();
var casado = false;
var estoyVacio = null;
var noEstoyDefinido = undefined;
//null undefined 0 -1 1
//
if(1) {
    console.log('Verdadero');
} else{
        console.log('falso');
    }

    //json para propiedades de un objeto, empieza con unas llaves, como buena practica se usaran las comillas simples,
//no hace falta formatear el codigo.. ctrl a y luego ctralt l para formatear
var usuario = {
    "nombre": "Brix",
    apellido: 'Jarrin',
    edad: 28,
    //imprimirEnConsola: function(){
    //    console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    //}
   imprimirEnConsola: sumarDosNumeros
};

console.log(usuario)

delete usuario.edad;
console.log(usuario);
usuario.cedula = '1722589648';
console.log(usuario);

// no se puede definir nuevas caracteristicas sin haberlas definido antes a mas de 1 nivel
//usuario.cedula.ec = '1722589648';

//para ello primero hay q definirla
usuario.mascotas = {};
usuario.mascotas.nombre = 'cachetes';

console.log(typeof  nombre)
console.log(typeof  edad)
console.log(typeof  FechaNacimiento)
console.log(typeof  usuario)

//no se tendra ni public ni private ni tipos de datos, no constructores, si existen los metodos imprimir : ()

//seguir las normas del Codigo Limpio

function sumarDosNumeros(numeroUno,numeroDos){
    return numeroDos+numeroUno;
}

console.log(sumarDosNumeros(1,2));

var sumardosNumerosVersionDos = function noImportaSiEscriboElNOmbre(numeroUno,numeroDos){
    return numeroUno+numeroDos;
}

//Funcion Anonima

var sumarDosNumerosVersionTres = function (numeroUno,numeroDos){
    return numeroUno+numeroDos;
}

console.log(sumardosNumerosVersionDos(1,2,3,4,5,6,7,8,9))
console.log(sumarDosNumerosVersionTres(1,2))

console.log(usuario.imprimirEnConsola);

