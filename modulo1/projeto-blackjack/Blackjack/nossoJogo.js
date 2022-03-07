/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

if (confirm("Boas vindas ao jogo de Blackjack! \n \n Gostaria  de iniciar uma nova rodada?")) {
   let cartaComp = [];
   let cartaUser = [];
   cartaComp.push(comprarCarta());
   cartaComp.push(comprarCarta());

   cartaUser.push(comprarCarta());
   cartaUser.push(comprarCarta());

   do {
      cartaComp[0] = comprarCarta();
      cartaComp[0] = comprarCarta();
   } while (cartaComp[0].texto.includes("A") && cartaComp[1].texto.includes("A"));

   do {
      cartaComp[0] = comprarCarta();
      cartaComp[0] = comprarCarta();
   } while (cartaComp[0].texto.includes("A") && cartaComp[1].texto.includes("A"));

   resComp = cartaComp[0].valor + cartaComp[1].valor;
   resUser = cartaUser[0].valor + cartaUser[1].valor;
   let outraVez = true;

   while (resComp <= 21 && outraVez) {
      let menssagem = " ";
   for (i = 0; i < cartaUser.length; i++) {
      menssagem += `${cartaUser[i].texto}`;
   }
   if (
      confirm(`Suas cartas são ${menssagem}. A carta do pc é ${cartaComp[0].texto}.`, "\n\n Quer comprar outra carta?")) {
      cartaUser.push(comprarCarta());
      resUser += cartaUser[cartaUser.length - 1].valor;
   } else {
      outraVez = false;
   }
   }
      while (resComp < resUser && resUser <= 21) {
      cartaComp.push(comprarCarta());
      resComp += cartaComp[cartaComp.length - 1].valor;
   }
   let msg = " ";
   let msgUser = " ";
   let msgComp = " ";

   if (resUser > 21 || (resComp <= 21 && resComp > resUser)) {
      msg = " O computador venceu, tente novamente..";
      } else {
      msg = " Parabéns você venceu !!!";
   }

   for (carta of cartaUser) {
   msgUser += `${carta.texto}`;
   }

   for (carta of cartaComp) {
   msgComp += `${carta.texto}`;
   }

   console.log(`Usuario - Cartas:${msgUser}- Pontuação: ${resUser}  \nComputador - Cartas: ${msgComp}- Pontuação:${resComp}\n  ${msg}`)
   } else{
      console.log(" O jogo acabou!");
}

   