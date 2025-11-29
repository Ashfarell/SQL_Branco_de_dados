function calculoComLoopExterno() {
  for (let rodada = 1; rodada <= 3; rodada++) {        // Loop externo, executa 3 vezes
    let a = rodada;                                    // a varia em cada rodada externa
    let b = 0;
    let num = 3;
    let temp;
    let count = 0;

    console.log('\nRodada externa:', rodada, '-> a inicial:', a, ', b inicial:', b, ', num:', num);

    while (num >= 0) {                                 // Loop interno, mesmo que o seu
      count++;
      temp = a;
      a = a + b;
      b = temp;
      console.log(count + 'ª rodada interna: temp =', temp, ', a =', a, ', b =', b, ', num =', num);
      num--;
    }
  }
}

calculoComLoopExterno();