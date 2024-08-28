const listaDeDestinos = new Array(
  `Fortaleza`,
  `Gramado`,
  `Rio de Janeiro`,
  `Jalapão`
)

console.log(`Nossos destinos são: ${listaDeDestinos}`);

const idadeComprador = 30;
 const menorAcompanhado = true;


if (idadeComprador >= 18 ) {
  console.log(`O comprador é maior de idade.Destino selecionado foi: ${listaDeDestinos[1]}.`);
 }


if (idadeComprador < 18 && menorAcompanhado == true) {
  console.log(`O menor está acompanhado e a compra pode ser realizada.`);
  console.log(`O destino selecionado foi:${listaDeDestinos[3]}.`);
  }
  

    else if(idadeComprador <18 && menorAcompanhado == false){
  console.log(`O menor está desacompanhado. Infelizmente a compra não pode ser realizada sem um maior.`);
  }
