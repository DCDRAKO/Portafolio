//funcion que pida dos numeros y diga cual es el mayor, el menor y si sin iguales

const numeros = (num1, num2)=>{
   if(num1>num2) {
    return document.write(`Numero Mayor: ${num1} Numero Menor: ${num2}`);
   }else if(num1<num2){
    return document.write(`Numero Mayor: ${num2} Numero Menor: ${num1}`);
   }else if(num1==num2){
    return document.write(`los dos numeros son iguales`);
   }else if()
}


let numeroA= prompt("Digita el primer numero");
let numeroB= prompt("Digita el segundo numero");
let resulrtado= numeros(numeroA,numeroB);
