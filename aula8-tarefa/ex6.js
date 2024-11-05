let aluno =
{
    nome:"yan",
    idade:18,
    curso:"matematica",
    matricula:1000,
    mostrar() {
        console.log(this.nome, this.idade, this.curso, this.matricula);
    }
};

aluno.mostrar();
