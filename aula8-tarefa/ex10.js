let alunos = 
{
    nomes: ['a', 'b', 'c', 'd'],
    idade: [1,5,19,18],
};

function AlunosMaior() {
    let maior = [], i = 0;
    for (let index = 0; index < alunos.nomes.length; index++) {
        if (alunos.idade[index] >= 18) {
            maior[i] = alunos.nomes[index]
            i++;
        }
        
    }

    return maior;
}

console.log(AlunosMaior());
