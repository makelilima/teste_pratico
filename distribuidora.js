const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularFaturamento(faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  );

  console.log(
    `Valor total de faturamento: R$ ${totalFaturamento.toFixed(2)}\n`
  );

  for (const [estado, valor] of Object.entries(faturamento)) {
    const percentual = (valor / totalFaturamento) * 100;
    console.log(
      `${estado}: R$ ${valor.toFixed(2)} - ${percentual.toFixed(2)}%`
    );
  }
}

calcularFaturamento(faturamento);
