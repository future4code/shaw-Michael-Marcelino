``` function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  // Escreva seu código aqui
  let salario = 2000 + valorTotalVendas * 0.05 + qtdeCarrosVendidos * 100;
  return salario;
}
console.log(calculaSalario(2, 1000));

