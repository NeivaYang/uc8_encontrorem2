let listaAlunos = ["Leonardo", "Robson", "Rafael", "Raiane"]

for(let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador)

    if(contador == 0){
        console.log(`O aluno ${listaAlunos[contador]} é o número zero`)
    } else if(contador % 2 == 0){
        console.log("O aluno " + listaAlunos[contador] + " é o numero " + contador + ": PAR")
    } else {
        console.log(`O aluno ${listaAlunos[contador]} é o número ${contador}: IMPAR`)
    } 
}