const numero = prompt("Oi, quer ajuda com multiplicação?!\n" + "Posso calcular qualquer número até 20 para você ;)\n\n" + "Digite o número que deseja:")

let resultado = ""

for(let multiplica = 1; multiplica <= 20; multiplica ++) {
    resultado += "-> " + numero + " x " + multiplica + " = " + (numero * multiplica) + "\n"
} 

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)