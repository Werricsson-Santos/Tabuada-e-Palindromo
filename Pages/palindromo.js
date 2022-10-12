const palavra = prompt("Olá novamente!\n\n" + "Digite uma palavra e verificarei se é um palíndromo:")

let palavraInvertida = ""

for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
} else{
    alert(palavra + " não é um palíndromo! Veja a palavra invertida:\n" + palavraInvertida)
}