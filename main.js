//DESAFÍO 1
let nombre1 = prompt("Hola, por favor ingresá tu nombre completo");
alert("Hola " + nombre1);
alert(
  "Estos son los servicios que tenemos disponibles: Aplicaciones web, Tiendas online, Páginas web"
);
let servicio = prompt(
  nombre1 + " por favor ingresá el servicio que te interesa"
);
let mail = prompt("Por favor ingresá tu mail");
let whatsapp = prompt("Por favor ingresá tu WhatsApp");
let anio = parseInt(prompt("Por favor ingresá tu año de nacimiento")); //parseInt transforma lo que ingresa el usuario en númoer para operarar matemáticamente y no lo tome como caracter
let presupuesto = parseFloat(
  prompt("Por favor ingrese el presupuesto que tiene disponible")
); //parseFloat es para número decimales. La computadora usa el punto para los número decimales.
let PrecioConDescuento = presupuesto * 1.3 - presupuesto;
alert(
  "Muchas gracias " +
    nombre1 +
    " nos contacteremos a tu WhatApps " +
    whatsapp +
    ", y te enviaremos un mail a: " +
    mail +
    " para brindarte más información sobre el servicio que te interesa." +
    " Si contratás dentro de los 7 días tendrás un descuento del 30%. Por ejemplo podés ahorrar de tu presupuesto hasta " +
    PrecioConDescuento +
    " pesos."
);

//PRÁCTICA
//variables declaracion e inicializacion
let edad; //declaracion
edad = 35;
let edad2 = 35; //todo junto
let nombre = "Ayelén";
let apellido = "Ferreyra";
let curso = "JS";

//Operaciones matemáticas
let suma = edad + edad2; //resultado 70
let resta = edad - edad2; //resultado 0
let multiplicacion = edad * edad2;
let division = edad / 5; //resultado 5

//concatenación (el sómbolo + concatena)
let nombreCompleto = nombre + " " + apellido; //Resultado Ayelen Ferreyra

//cómo mostrar los datos que tenemos. Muestra los datos por consola // Salida de datos
console.log(nombreCompleto);
console.log(nombre);
console.log(nombreCompleto + " " + edad);
console.log(
  "La usuaria se llama" + " " + nombreCompleto + " y tiene " + edad + " años"
);
console.log(
  "La usuaria se llama " +
    nombreCompleto +
    ", tiene " +
    edad +
    " años " +
    "y está estudiando el curo de " +
    curso +
    "."
);

//Salida de datos con alert. Queremos que el usuario vea el mensaje
//alert("Datos ingresados por la usuaria: " +nombreCompleto +" " +edad +" " +curso);
//alert("Hola " + nombreCompleto);
//alert("La edad de la usuaria " + nombreCompleto + " " + "es " + edad + " años");

//PROMPT guadar datos que ingresa el usuario en una variable. Todo lo que ingresa por PROMPT por defecto es una cadena de caracteres

//let servicio = prompt("Ingrese el servicio que desea");
