let nombre;
let apellido;
let dni;
let edad;
let sexo;
let kilometros;
let categoria;

let sexoconf = false;
let km = 0;
let verificacion;


persona();


function persona() {
  
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    dni = prompt("Ingrese su DNI");
    edad = parseInt(prompt("Ingrese su edad (sólo números)"));
    sexo = prompt("Ingrese su sexo: femenino o masculino");
    kilometros = prompt(
    "Ingrese el kilometraje que va a hacer: 43km, 65km o 95km"
    );
}


while (sexoconf === false) {
  if (sexo.toLowerCase() === "femenino" ) {
    sexoconf = 1;
  } else if(sexo.toLowerCase() === "masculino" ) {
    sexoconf = 2;
  } else {
    sexo = prompt("Ingrese el sexo nuevamente");
    sexoconf = false;
  }
}


while (km === 0) {
  if (kilometros === "43km" || kilometros === 43 || kilometros === "43") {
    km = 43;
  } else if (kilometros === "65km" || kilometros === 65 || kilometros === "65") {
    km = 65;
  } else if (kilometros === "95km" || kilometros === 95 || kilometros === "95") {
    km = 95;
  } else {
    km = 0;

    kilometros = prompt(
      "Ingrese el kilimetraje que va a hacer: 43km, 65km o 95km"
    );
  }
}


switch (km) {

    case 43:
    
        switch (sexoconf) {
      
            case 1:
        
                if (edad <= 16) {
                    categoria = "CICLO DAMAS JUVENILES";
        
                } else if (edad > 16 && edad <= 35) {
                    categoria = "CICLO DAMAS A";
        
                } else if (edad >= 36 && edad < 45) {
                    categoria = "CICLO DAMAS B";
                    
                } else if (edad >= 46 && edad < 55) {
                    categoria = "CICLO DAMAS C";
        
                } else if (edad >= 55 && edad < 65) {
                    categoria = "CICLO DAMAS D";
        
                } else if (edad >= 66) {
                    categoria = "CICLO DAMAS E";
        
                }
                break;

            case 2:
        
                if (edad <= 16) {
                    categoria = "CICLO JUVENIL";
        
                } else if (edad > 16 && edad <= 35) {
                    categoria = "CICLOTURISMO A";
        
                } else if (edad >= 36 && edad < 45) {
                    categoria = "CICLOTURISMO B";
        
                } else if (edad >= 46 && edad < 55) {
                    categoria = "CICLOTURISMO C";
        
                } else if (edad >= 55 && edad < 65) {
                    categoria = "CICLOTURISMO D";
        
                } else if (edad >= 66) {
                    categoria = "CICLOTURISMO E";
        
                }
                break;
        }
        break;

    case 65:
    
        switch (sexoconf) {
      
            case 1:
        
                if (edad >= 16 && edad <= 17) {
                    categoria = "DAMAS JUVENILES";
                
                } else if (edad > 17 && edad <= 35) {
                    categoria = "DAMAS A";
            
                } else if (edad >= 36 && edad < 45) {
                    categoria = "DAMAS B";
            
                } else if (edad >= 46 && edad < 55) {
                    categoria = "DAMAS C";
            
                } else if (edad >= 55 && edad < 65) {
                    categoria = "DAMAS D";
            
                } else if (edad >= 66) {
                    categoria = "DAMAS E";
                }
                break;

            case 2:
        
                if (edad <= 16) {
                    categoria = "JUVENILES";
        
                } else if (edad > 16 && edad <= 35) {
                    categoria = "MASTER A";
        
                } else if (edad >= 36 && edad < 45) {
                    categoria = "MASTER B";
        
                } else if (edad >= 46 && edad < 55) {
                    categoria = "MASTER C";
        
                } else if (edad >= 55 && edad < 65) {
                    categoria = "MASTER D";
        
                } else if (edad >= 66) {
                    categoria = "MASTER E";
                }
                break;
        }
        break;

    case 95:
    
        switch (sexoconf) {
      
            case 1:
        
                if (edad >= 18 && edad < 29) {
                    categoria = "DAMAS ELITE";
                
                } else if (edad >= 30 && edad < 39) {
                    categoria = "DAMAS A";
            
                } else if (edad >= 40 && edad < 49) {
                    categoria = "DAMAS B";
            
                } else if (edad >= 50 && edad < 59) {
                    categoria = "DAMAS C";
            
                } else if (edad >= 60) {
                    categoria = "DAMAS D";
            
                }
                break;

            case 2:
        
                if (edad >= 18 && edad < 23) {
                    categoria = "SUB 23";
                
                } else if (edad >= 24 && edad < 29) {
                    categoria = "ELITE";
            
                } else if (edad >= 30 && edad < 34) {
                    categoria = "MASTER A1";
            
                } else if (edad >= 35 && edad < 39) {
                    categoria = "MASTER A2";
            
                } else if (edad >= 40 && edad < 44) {
                    categoria = "MASTER B1";
            
                } else if (edad >= 45 && edad < 49) {
                    categoria = "MASTER B2";
            
                } else if (edad >= 50 && edad < 54) {
                    categoria = "MASTER C1";
            
                } else if (edad >= 55 && edad < 59) {
                    categoria = "MASTER C2";
            
                } else if (edad >= 60 && edad < 64) {
                    categoria = "MASTER D1";
            
                } else if (edad >= 65 && edad < 69) {
                    categoria = "MASTER D2";
            
                } else if (edad >= 70) {
                    categoria = "MASTER E";
            
                }
                break;
        } 
        break;       
}


if (edad < 10 || edad > 85) {

    alert("Usted no puede participar porque no cumple con la edad requerida.");
  
} else {
  
    alert(
    `¡Gracias!
    Verificá que tus datos estén bien:
    Nombre: ${nombre}
    Apellido: ${apellido}
    DNI: ${dni}
    Edad: ${edad}
    Sexo: ${sexo}`
    );

    verificacion = prompt("Ingrese SI o NO:");
}


// No funciona la llamada de la funcion persona
if(verificacion.toLowerCase === "si"){

    alert(`Usted ha sido inscripto en la categoria ${categoria}`);

} else if(verificacion.toLocaleLowerCase ===  "no"){

    alert("Por favor vuelva a ingresar sus datos");
    persona();

} 
