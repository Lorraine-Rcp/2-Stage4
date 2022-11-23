//Lista de alunos array
const students = [
  {
    name: "Reinaldo",
    n1: 6,
    n2: 5,
  },

  {
    name: "Amanda",
    n1: 9,
    n2: 8,
  },

  {
    name: "Júnior",
    n1: 7,
    n2: 5,
  },

  {
    name: "Rayssa",
    n1: 8,
    n2: 9,
  },
];

const average = (n1, n2) => {
  return ((n1 + n2) / 2).toFixed(2); //tofixed para arredondar o número do resultado em todas as operações necessárias
};

//estrutura de repetição for of e let student of students para retirar os itens do array. Indicar o objeto e o que quer retirar: ${average (student.n1, student.n2)}

for (let student of students) {
  if (average(student.n1, student.n2) >= 7) {
    alert(`A média do aluno(a) ${student.name} é: ${average(
      student.n1,
      student.n2
    )}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso! `);
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(
      student.n1,
      student.n2
    )}
    Não foi dessa vez, ${student.name}! Tente novamente!`);
  }
}
