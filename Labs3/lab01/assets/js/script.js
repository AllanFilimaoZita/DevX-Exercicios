let filmes = [
    {titulo: 'A Procura da Felicidade', ano: 2006},
    {titulo: 'O Homem que mudou o Jogo', ano: 2011}
]

console.log(filmes[0].titulo)

filmes.push({titulo: 'Sem Limites', ano: 2011})

filmes[0].ano = 2024

console.log(filmes)