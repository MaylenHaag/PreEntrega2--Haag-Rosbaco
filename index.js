// participante 1
let nombre;
let apellido;
let dni;
let edad;
let sexo;
let kilometros;
let categoria;

let persona1;
let sexoconf1 = false;
let km = 0;
let verificacion1;
let anadirpersona;
const arrayParticipantes = [];


// participante 2
let persona2;
let sexoconf2 = false;
let verificacion2;



// Funciones para crear los participantes
function participante1(){

    persona1 = {

        nombre : prompt("Ingrese su nombre"),
        apellido : prompt("Ingrese su apellido"),
        dni : prompt("Ingrese su DNI"),
        edad : parseInt(prompt("Ingrese su edad (sólo números)")),
        sexo : prompt("Ingrese su sexo: femenino o masculino"),
        kilometros : prompt(
        "Ingrese el kilometraje que va a hacer: 43km, 65km o 95km"
        ), 
    }

   arrayParticipantes.push(persona1);
}


function participante2(){

    persona2 = {

        nombre : prompt("Ingrese el nombre del segundo participante"),
        apellido : prompt("Ingrese el apellido"),
        dni : prompt("Ingrese el DNI"),
        edad : parseInt(prompt("Ingrese la edad (sólo números)")),
        sexo : prompt("Ingrese el sexo: femenino o masculino"),
    }

    arrayParticipantes.push(persona2);
}



// Creamos participante 1 y corroboramos que toda la informacion este bien
participante1();


while (sexoconf1 === false) {
    if (persona1.sexo.toLowerCase() === "femenino" ) {
      sexoconf1 = 1;
    } else if(persona1.sexo.toLowerCase() === "masculino" ) {
      sexoconf1 = 2;
    } else {
      persona1.sexo = prompt("Ingrese el sexo nuevamente");
      sexoconf1 = false;
    }
}


while (km === 0) {
  if (persona1.kilometros === "43km" || persona1.kilometros === 43 || persona1.kilometros === "43") {
    km = 43;
  } else if (persona1.kilometros === "65km" || persona1.kilometros === 65 || persona1.kilometros === "65") {
    km = 65;
  } else if (persona1.kilometros === "95km" || persona1.kilometros === 95 || persona1.kilometros === "95") {
    km = 95;
  } else {
    km = 0;

    persona1.kilometros = prompt(
      "Ingrese el kilimetraje que va a hacer: 43km, 65km o 95km"
    );
  }
}


if (persona1.edad < 10 || persona1.edad > 85) {

    alert("Usted no puede participar porque no cumple con la edad requerida.");
  
} else {
  
    alert(
    `¡Gracias!
    Verificá que los datos estén bien:
    Nombre: ${persona1.nombre}
    Apellido: ${persona1.apellido}
    DNI: ${persona1.dni}
    Edad: ${persona1.edad}
    Sexo: ${persona1.sexo}
    Kilometraje: ${persona1.km}km`
    );

    verificacion1 = prompt("Ingrese SI o NO:");
}





if (verificacion1.toLowerCase() === "si") {
  // Añadimos otro participante en caso de que así lo desee el usuario
  anadirpersona = prompt("¿Desea correr en dupla? Escriba SI o NO");

  switch (anadirpersona.toLowerCase()) {
    // Creamos participante 2 y corroboramos que toda la informacion este bien
    case "si":
      participante2();

      while (sexoconf2 === false) {
        if (persona2.sexo.toLowerCase() === "femenino") {
          sexoconf2 = 1;
        } else if (persona2.sexo.toLowerCase() === "masculino") {
          sexoconf2 = 2;
        } else {
          persona2.sexo = prompt("Ingrese el sexo nuevamente");
          sexoconf2 = false;
        }
      }

      if (persona2.edad < 10 || persona2.edad > 85) {
        alert(
          "Usted no puede participar porque no cumple con la edad requerida."
        );
      } else {
        alert(
          `¡Gracias!
                Verificá que los datos estén bien:
                Nombre: ${persona2.nombre}
                Apellido: ${persona2.apellido}
                DNI: ${persona2.dni}
                Edad: ${persona2.edad}
                Sexo: ${persona2.sexo}`
        );

        verificacion2 = prompt("Ingrese SI o NO:");
      }

      if (verificacion2.toLowerCase() === "si") {
        //insertar funcion de categoria
      } else if (verificacion2.toLocaleLowerCase === "no") {
        alert("Por favor vuelva a ingresar sus datos");
        persona2();
      }

      break;

    case "no":
      categoriaSimple();
      alert(`Usted ha sido inscripto en la categoria ${categoria}`);
      break;

    default:
      do {
        anadirpersona = prompt(
          "Desea añadir otro participante? Escriba SI o NO"
        );
      } while (
        anadirpersona.toLowerCase() != "si" &&
        anadirpersona.toLowerCase() != "no"
      );
      break;
  }
} else {
  while (verificacion1.toLowerCase() === "no") {
    alert("Por favor vuelva a ingresar sus datos");
    participante1();
    alert(
      `¡Gracias!
    Verificá que tus datos estén bien:
    Nombre: ${persona1.nombre}
    Apellido: ${persona1.apellido}
    DNI: ${persona1.dni}
    Edad: ${persona1.edad}
    Sexo: ${persona1.sexo}`
    );

    verificacion1 = prompt("Ingrese SI o NO:");
  }
}


// Se busca la categoria en el caso de que el participante corra solo
function categoriaSimple(){

    switch (km) {

        case 43:
        
            switch (sexoconf1) {
          
                case 1:
            
                    if (persona1.edad <= 16) {
                        categoria = "CICLO DAMAS JUVENILES";
            
                    } else if (persona1.edad > 16 && persona1.edad <= 35) {
                        categoria = "CICLO DAMAS A";
            
                    } else if (persona1.edad >= 36 && persona1.edad < 45) {
                        categoria = "CICLO DAMAS B";
                        
                    } else if (persona1.edad >= 46 && persona1.edad < 55) {
                        categoria = "CICLO DAMAS C";
            
                    } else if (persona1.edad >= 55 && persona1.edad < 65) {
                        categoria = "CICLO DAMAS D";
            
                    } else if (persona1.edad >= 66) {
                        categoria = "CICLO DAMAS E";
            
                    }
                    break;
    
                case 2:
            
                    if (persona1.edad <= 16) {
                        categoria = "CICLO JUVENIL";
            
                    } else if (persona1.edad > 16 && persona1.edad <= 35) {
                        categoria = "CICLOTURISMO A";
            
                    } else if (persona1.edad >= 36 && persona1.edad < 45) {
                        categoria = "CICLOTURISMO B";
            
                    } else if (persona1.edad >= 46 && persona1.edad < 55) {
                        categoria = "CICLOTURISMO C";
            
                    } else if (persona1.edad >= 55 && persona1.edad < 65) {
                        categoria = "CICLOTURISMO D";
            
                    } else if (persona1.edad >= 66) {
                        categoria = "CICLOTURISMO E";
            
                    }
                    break;
            }
            break;
    
        case 65:
        
            switch (sexoconf1) {
          
                case 1:
            
                    if (persona1.edad >= 16 && persona1.edad <= 17) {
                        categoria = "DAMAS JUVENILES";
                    
                    } else if (persona1.edad > 17 && persona1.edad <= 35) {
                        categoria = "DAMAS A";
                
                    } else if (persona1.edad >= 36 && persona1.edad < 45) {
                        categoria = "DAMAS B";
                
                    } else if (persona1.edad >= 46 && persona1.edad < 55) {
                        categoria = "DAMAS C";
                
                    } else if (persona1.edad >= 55 && persona1.edad < 65) {
                        categoria = "DAMAS D";
                
                    } else if (persona1.edad >= 66) {
                        categoria = "DAMAS E";
                    }
                    break;
    
                case 2:
            
                    if (persona1.edad <= 16) {
                        categoria = "JUVENILES";
            
                    } else if (persona1.edad > 16 && persona1.edad <= 35) {
                        categoria = "MASTER A";
            
                    } else if (persona1.edad >= 36 && persona1.edad < 45) {
                        categoria = "MASTER B";
            
                    } else if (persona1.edad >= 46 && persona1.edad < 55) {
                        categoria = "MASTER C";
            
                    } else if (persona1.edad >= 55 && persona1.edad < 65) {
                        categoria = "MASTER D";
            
                    } else if (persona1.edad >= 66) {
                        categoria = "MASTER E";
                    }
                    break;
            }
            break;
    
        case 95:
        
            switch (sexoconf1) {
          
                case 1:
            
                    if (persona1.edad >= 18 && persona1.edad < 29) {
                        categoria = "DAMAS ELITE";
                    
                    } else if (persona1.edad >= 30 && persona1.edad < 39) {
                        categoria = "DAMAS A";
                
                    } else if (persona1.edad >= 40 && persona1.edad < 49) {
                        categoria = "DAMAS B";
                
                    } else if (persona1.edad >= 50 && persona1.edad < 59) {
                        categoria = "DAMAS C";
                
                    } else if (persona1.edad >= 60) {
                        categoria = "DAMAS D";
                
                    }
                    break;
    
                case 2:
            
                    if (persona1.edad >= 18 && persona1.edad < 23) {
                        categoria = "SUB 23";
                    
                    } else if (persona1.edad >= 24 && persona1.edad < 29) {
                        categoria = "ELITE";
                
                    } else if (persona1.edad >= 30 && persona1.edad < 34) {
                        categoria = "MASTER A1";
                
                    } else if (persona1.edad >= 35 && persona1.edad < 39) {
                        categoria = "MASTER A2";
                
                    } else if (persona1.edad >= 40 && persona1.edad < 44) {
                        categoria = "MASTER B1";
                
                    } else if (persona1.edad >= 45 && persona1.edad < 49) {
                        categoria = "MASTER B2";
                
                    } else if (persona1.edad >= 50 && persona1.edad < 54) {
                        categoria = "MASTER C1";
                
                    } else if (persona1.edad >= 55 && persona1.edad < 59) {
                        categoria = "MASTER C2";
                
                    } else if (persona1.edad >= 60 && persona1.edad < 64) {
                        categoria = "MASTER D1";
                
                    } else if (persona1.edad >= 65 && persona1.edad < 69) {
                        categoria = "MASTER D2";
                
                    } else if (persona1.edad >= 70) {
                        categoria = "MASTER E";
                
                    }
                    break;
            } 
            break;       
    }

}


// Se busca la categoria en el caso de que sea dupla
function sumaEdades(){

    const resultado = (arrayParticipantes[0].edad + arrayParticipantes[1].edad);

    return resultado;

}

console.log(arrayParticipantes);

console.log(sumaEdades());














































// //___________________________________________________


// persona();


// function persona() {
  
//     nombre = prompt("Ingrese su nombre");
//     apellido = prompt("Ingrese su apellido");
//     dni = prompt("Ingrese su DNI");
//     edad = parseInt(prompt("Ingrese su edad (sólo números)"));
//     sexo = prompt("Ingrese su sexo: femenino o masculino");
//     kilometros = prompt(
//     "Ingrese el kilometraje que va a hacer: 43km, 65km o 95km"
//     );
// }


// while (sexoconf === false) {
//   if (sexo.toLowerCase() === "femenino" ) {
//     sexoconf = 1;
//   } else if(sexo.toLowerCase() === "masculino" ) {
//     sexoconf = 2;
//   } else {
//     sexo = prompt("Ingrese el sexo nuevamente");
//     sexoconf = false;
//   }
// }


// while (km === 0) {
//   if (kilometros === "43km" || kilometros === 43 || kilometros === "43") {
//     km = 43;
//   } else if (kilometros === "65km" || kilometros === 65 || kilometros === "65") {
//     km = 65;
//   } else if (kilometros === "95km" || kilometros === 95 || kilometros === "95") {
//     km = 95;
//   } else {
//     km = 0;

//     kilometros = prompt(
//       "Ingrese el kilimetraje que va a hacer: 43km, 65km o 95km"
//     );
//   }
// }


// switch (km) {

//     case 43:
    
//         switch (sexoconf) {
      
//             case 1:
        
//                 if (edad <= 16) {
//                     categoria = "CICLO DAMAS JUVENILES";
        
//                 } else if (edad > 16 && edad <= 35) {
//                     categoria = "CICLO DAMAS A";
        
//                 } else if (edad >= 36 && edad < 45) {
//                     categoria = "CICLO DAMAS B";
                    
//                 } else if (edad >= 46 && edad < 55) {
//                     categoria = "CICLO DAMAS C";
        
//                 } else if (edad >= 55 && edad < 65) {
//                     categoria = "CICLO DAMAS D";
        
//                 } else if (edad >= 66) {
//                     categoria = "CICLO DAMAS E";
        
//                 }
//                 break;

//             case 2:
        
//                 if (edad <= 16) {
//                     categoria = "CICLO JUVENIL";
        
//                 } else if (edad > 16 && edad <= 35) {
//                     categoria = "CICLOTURISMO A";
        
//                 } else if (edad >= 36 && edad < 45) {
//                     categoria = "CICLOTURISMO B";
        
//                 } else if (edad >= 46 && edad < 55) {
//                     categoria = "CICLOTURISMO C";
        
//                 } else if (edad >= 55 && edad < 65) {
//                     categoria = "CICLOTURISMO D";
        
//                 } else if (edad >= 66) {
//                     categoria = "CICLOTURISMO E";
        
//                 }
//                 break;
//         }
//         break;

//     case 65:
    
//         switch (sexoconf) {
      
//             case 1:
        
//                 if (edad >= 16 && edad <= 17) {
//                     categoria = "DAMAS JUVENILES";
                
//                 } else if (edad > 17 && edad <= 35) {
//                     categoria = "DAMAS A";
            
//                 } else if (edad >= 36 && edad < 45) {
//                     categoria = "DAMAS B";
            
//                 } else if (edad >= 46 && edad < 55) {
//                     categoria = "DAMAS C";
            
//                 } else if (edad >= 55 && edad < 65) {
//                     categoria = "DAMAS D";
            
//                 } else if (edad >= 66) {
//                     categoria = "DAMAS E";
//                 }
//                 break;

//             case 2:
        
//                 if (edad <= 16) {
//                     categoria = "JUVENILES";
        
//                 } else if (edad > 16 && edad <= 35) {
//                     categoria = "MASTER A";
        
//                 } else if (edad >= 36 && edad < 45) {
//                     categoria = "MASTER B";
        
//                 } else if (edad >= 46 && edad < 55) {
//                     categoria = "MASTER C";
        
//                 } else if (edad >= 55 && edad < 65) {
//                     categoria = "MASTER D";
        
//                 } else if (edad >= 66) {
//                     categoria = "MASTER E";
//                 }
//                 break;
//         }
//         break;

//     case 95:
    
//         switch (sexoconf) {
      
//             case 1:
        
//                 if (edad >= 18 && edad < 29) {
//                     categoria = "DAMAS ELITE";
                
//                 } else if (edad >= 30 && edad < 39) {
//                     categoria = "DAMAS A";
            
//                 } else if (edad >= 40 && edad < 49) {
//                     categoria = "DAMAS B";
            
//                 } else if (edad >= 50 && edad < 59) {
//                     categoria = "DAMAS C";
            
//                 } else if (edad >= 60) {
//                     categoria = "DAMAS D";
            
//                 }
//                 break;

//             case 2:
        
//                 if (edad >= 18 && edad < 23) {
//                     categoria = "SUB 23";
                
//                 } else if (edad >= 24 && edad < 29) {
//                     categoria = "ELITE";
            
//                 } else if (edad >= 30 && edad < 34) {
//                     categoria = "MASTER A1";
            
//                 } else if (edad >= 35 && edad < 39) {
//                     categoria = "MASTER A2";
            
//                 } else if (edad >= 40 && edad < 44) {
//                     categoria = "MASTER B1";
            
//                 } else if (edad >= 45 && edad < 49) {
//                     categoria = "MASTER B2";
            
//                 } else if (edad >= 50 && edad < 54) {
//                     categoria = "MASTER C1";
            
//                 } else if (edad >= 55 && edad < 59) {
//                     categoria = "MASTER C2";
            
//                 } else if (edad >= 60 && edad < 64) {
//                     categoria = "MASTER D1";
            
//                 } else if (edad >= 65 && edad < 69) {
//                     categoria = "MASTER D2";
            
//                 } else if (edad >= 70) {
//                     categoria = "MASTER E";
            
//                 }
//                 break;
//         } 
//         break;       
// }


// if (edad < 10 || edad > 85) {

//     alert("Usted no puede participar porque no cumple con la edad requerida.");
  
// } else {
  
//     alert(
//     `¡Gracias!
//     Verificá que tus datos estén bien:
//     Nombre: ${nombre}
//     Apellido: ${apellido}
//     DNI: ${dni}
//     Edad: ${edad}
//     Sexo: ${sexo}`
//     );

//     verificacion = prompt("Ingrese SI o NO:");
// }



// if(verificacion.toLowerCase === "si"){

//     alert(`Usted ha sido inscripto en la categoria ${categoria}`);

// } else if(verificacion.toLocaleLowerCase ===  "no"){

//     alert("Por favor vuelva a ingresar sus datos");
//     persona();

// } 
