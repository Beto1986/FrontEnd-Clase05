// ******************** ALGORITMO DE CAJERO - CONDICIONALES (PARTE 2)******************** //

// * Pensar el algoritmo para crear un sistema de cajero bancario. Por el momento, solo permitirá realizar 1 acción y luego finalizará la sesión. La persona debe tener un usuario y contraseña para ingresar al sistema. Se le permitirá al usuario elegir entre realizar alguna de las siguientes acciones:
// - Ver saldo actual.
// - Retirar dinero.
// - Depositar dinero en su cuenta.
// - Cambiar su clave.
// * Cuando tengas armado el algoritmo… a codear!
// Pregunta: Cómo harías para que el usuario tuviera la posibilidad de realizar varias acciones? Es decir, luego de consultar su saldo, por ejemplo, que le vuelva a ofrecer el menú. (Pensarlo a nivel algoritmo)


const usuario = "usuario";
let saldo = 1000; //Asumimos un saldo de $1000
let pass = 1234; //Asumimos contraseña numérica por ser cajero automático.
let usuarioIngresado = prompt("Ingrese su usuario");
if (usuarioIngresado !== usuario) {
    alert("Usuario incorrecto, el programa se cerrará.");
} else {
    let passIngresado = parseInt(prompt("Ingrese su contraseña"));
    if (passIngresado !== pass) {
        alert("Contraseña incorrecta, el programa se cerrará.");
    } else {
        let opcion = parseInt(prompt("Elija una de las siguientes opciones:  1- Ver saldo actual  |  2- Retirar dinero | 3- Depositar dinero en su cuenta | 4- Cambiar su clave."));
        switch (opcion) {
            case 1:
                alert("Tu saldo actual es de $" + saldo);
                break;
            case 2:
                let retiro = parseInt(prompt("Ingrese el monto a retirar"));
                if (retiro > saldo) {
                    alert("El monto ingresado es mayor a su saldo actual. Su saldo actual es de $" + saldo);
                } else {
                    saldo = saldo - retiro;
                    alert("Usted retiró $" + retiro + ". Su saldo actual es de $" + saldo);
                }
                break;
            case 3:
                let deposito = parseInt(prompt("Ingrese el monto a depositar"));
                saldo = saldo + deposito;
                alert("Usted ingresó $" + deposito + ". Su nuevo saldo es de $" + saldo);
                break;
            case 4:
                let nuevoPass = parseInt(prompt("Ingrese su nueva clave"));
                let nuevoPassBis = parseInt(prompt("Reingrese su clave"));
                if (nuevoPass === nuevoPassBis) {
                    pass = nuevoPass;
                    alert("Su nueva clave es: " + pass);
                } else {
                    alert("Las claves ingresadas no coinciden. El programa se cerrará");
                }
                break;
            default:
                alert("Opción no válida. El programa se cerrará.")
        }
    }
}