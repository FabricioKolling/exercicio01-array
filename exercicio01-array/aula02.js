function separaParImpar(nums) {
    const pares = [];
    const impares = [];
    let indicePar = 0;
    let indiceImpar = 0;
  
    for (let i = 0; i < nums.length; i++) {
      const numeroAtual = nums[i];
  
      if (numeroAtual % 2 === 0) {
        pares[indicePar] = numeroAtual;
        indicePar++;
      } else {
        impares[indiceImpar] = numeroAtual;
        indiceImpar++;
      }
    }
  
    return [pares, impares];
  }