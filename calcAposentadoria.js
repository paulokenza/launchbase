const nome = "Franciscleidson";
const genero = "M";
const idade = 68;
const contribuicao = 50;

const regra8595 = (idade + contribuicao);

if (genero === "M" && regra8595 >= 95)
{
    console.log(`${nome}, parabéns você já pode se aposentar!`); 
} else if (genero === "F" && regra8595 >= 85){ 
    console.log(`${nome}, parabéns você já pode se aposentar!`); 
} else {
    console.log(`${nome}, você ainda não pode se aposentar! `);
} 


