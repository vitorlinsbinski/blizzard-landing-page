let candidatos = [
    {
        name: 'Bolsonaro',
        number: 22,
        votos: 0
    },
    {
        name: 'Lula',
        number: 13,
        votos: 0
    },
    {
        name: 'Simone Tebet',
        number: 15,
        votos: 0
    },
    {
        name: 'Ciro',
        number: 12,
        votos: 0
    },
    {
        name: 'Soraya',
        number: 44,
        votos: 0
    },
    {
        name: "Felipe D'Avila",
        number: 30,
        votos: 0
    },
];

let q = parseInt(prompt('Insira quantos votos foram registrados: '));
let i = 1;
let nulo = 0;
let branco = 0;

while(i <= q) {
    voto = parseInt(prompt(`Voto ${i}, digite o número do seu candidato (ou 0 para branco ou -1 para nulo): `));

    if(voto == -1) {
        nulo = nulo + 1;
    } else if (voto == 0) {
        branco = branco + 1;
    } else if(voto < -1) {
        console.log('Nenhum candidato identificado, voto registrado como NULO');
        nulo = nulo + 1;
    } else {    
        let votoParaCandidato = candidatos.find((candidato) => candidato.number == voto);
        votoParaCandidato.votos = votoParaCandidato.votos + 1;
    } 

    i = i + 1;
}

let vencedor = candidatos.reduce(function (prev, current) {
    return prev.votos > current.votos ? prev : current;
})

console.log(`Dos ${q} votos registrados, obtivemos ${branco} votos branco e ${nulo} votos nulo. O(A) novo(a) presidente da república é ${vencedor.name}`);

