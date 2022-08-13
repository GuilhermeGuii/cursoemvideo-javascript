var idade = 65;
console.log(`Você tem ${idade} anos\n`);
if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 70) { // Em 2022 o voto é obrigatório entre 18 e 70 anos idade 
    console.log('Voto opicional');
} else {
    console.log('Voto obrigatório');
} 