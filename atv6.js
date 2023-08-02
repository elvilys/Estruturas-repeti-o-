const largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
    const comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros:"));

    
    if (largura && comprimento) {
      const areaTerreno = largura * comprimento;

      let classificacao = "";
      if (areaTerreno < 100) {
        classificacao = "Terreno POPULAR!";
      } else if (areaTerreno >= 100 && areaTerreno <= 500) {
        classificacao = "Terreno MASTER!";
      } else {
        classificacao = "Terreno VIP!";
      }

      document.write(`Área do Terreno: ${areaTerreno} m² <br> Classificação: ${classificacao}`);
    } else {
      alert("Entrada inválida! Por favor, digite valores numéricos válidos para a largura e o comprimento.");
    }