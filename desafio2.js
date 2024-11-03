function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    // Determinação do nível
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando o resultado
    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Laço para solicitar entradas do usuário
for (let i = 0; i < 1; i++) {
    const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
    const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));
    
    // Exibindo o resultado
    const resultado = calcularNivel(vitorias, derrotas);
    alert(resultado);
}
