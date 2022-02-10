// Crie um objeto que receba ao menos três propriedades sobre você.
const Myself= {Name:'Ghislain',Curso:"Publicidade", Cidade:"Curitiba"}
console.log(Myself.Name,Myself.Curso,Myself.Cidade)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
Myself.idade=26
console.log(Myself.idade)
// Remova uma propriedade desse objeto.
delete Myself.idade
//Mostre no console todas as propriedades desse objeto.
console.log(Myself)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let Cadastro=[{nome:"Marlon",idade:29,telefone:123456,amigos:["Tatiana","Pam","Luan","Dan"]},
{nome:"Ghislain",idade:26,telefone:223456,amigos:["Larissa","Bianca","Barbi","Andreina"]},
{nome:"Tati",idade:24,telefone:323456,amigos:["Ghislain","Pam","Barbi","Larissa"]},
{nome:"Larissa",idade:22,telefone:423456,amigos:["Barbi","Bianca","Ghislain","Andreina"]},
{nome:"Barbi",idade:26,telefone:523456,amigos:["Pam","Ghislain","Tati","Larissa"]}]
// Mostre no console o nome de um amigo de cada lista.
console.log(Cadastro[0].amigos[1],Cadastro[1].amigos[0])