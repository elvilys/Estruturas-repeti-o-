const distancia = parseFloat(prompt("Digite a distância da viagem:"));
const precoMenor200Km = 0.50;
const precoMaior200Km = 0.45;

if (distancia) {
    let precoPassagem = 0;
    if (distancia <= 200) {
        precoPassagem = distancia * precoMenor200Km;
    } else {
        precoPassagem = distancia * precoMaior200Km;
    }

    document.write( `Distância da Viagem: ${distancia}Km <br> Preço da Passagem: R$ ${precoPassagem}`);
} 