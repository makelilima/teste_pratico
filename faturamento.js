const todosFaturamento = [
  { dia: 1, valor: 220.5 },
  { dia: 2, valor: 340.7 },
  { dia: 3, valor: 0.0 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 150.3 },
  { dia: 6, valor: 290.2 },
  { dia: 7, valor: 420.9 },
  { dia: 8, valor: 0.0 },
  { dia: 9, valor: 320.1 },
];

function calcularFaturamento(faturamento) {
  const faturamentoValido = faturamento.filter((item) => item.valor > 0);

  const menorFaturamento = Math.min(
    ...faturamentoValido.map((item) => item.valor)
  );
  const maiorFaturamento = Math.max(
    ...faturamentoValido.map((item) => item.valor)
  );

  const somaFaturamento = faturamentoValido.reduce(
    (acc, item) => acc + item.valor,
    0
  );
  const mediaFaturamento = somaFaturamento / faturamentoValido.length;

  const diasMedia = faturamentoValido.filter(
    (item) => item.valor > mediaFaturamento
  ).length;

  console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${diasMedia}`);
}

calcularFaturamento(todosFaturamento);
