def calcular_nivel(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas

    # Determinação do nível
    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"

    # Retornando o resultado
    return f"O Herói tem de saldo de {saldo_vitorias} e está no nível de {nivel}"

# Solicitar entradas do usuário
vitorias = int(input("Digite a quantidade de vitórias: "))
derrotas = int(input("Digite a quantidade de derrotas: "))

# Exibindo o resultado
resultado = calcular_nivel(vitorias, derrotas)
print(resultado)
