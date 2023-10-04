const animals = [
   "./assets/arara-azul.png",
   "./assets/arara-azul.png",
   "./assets/baleia-azul.png",
   "./assets/baleia-azul.png",
   "./assets/lobo-guara.png",
   "./assets/lobo-guara.png",
   "./assets/macaco-prego.png",
   "./assets/macaco-prego.png",
   "./assets/onca-pintada.png",
   "./assets/onca-pintada.png",
   "./assets/panda.png",
   "./assets/panda.png",
   "./assets/peixe-boi.png",
   "./assets/peixe-boi.png",
   "./assets/pinguin.png",
   "./assets/pinguin.png",
  ];
  
  let openCards = []; // Matriz usada para rastrear os cartões que foram clicados
  
  // Embaralhando a matriz emojis aleatoriamente
  let shuffleAnimals = animals.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  
  for (let i = 0; i < shuffleAnimals.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
  
    // Adiciona uma imagem única a cada div.
    let image = document.createElement("img");
    box.appendChild(image);
  
    // Adiciona um atributo `data-emoji` a cada imagem.
    image.setAttribute("data-emoji", i);
  
    // Adiciona um listener de evento de clique à div.
    box.onclick = handleClick;
  
    // Adiciona a div ao elemento `.game`.
    document.querySelector(".game").appendChild(box);
  }
  
  function handleClick() {
    // Obtém o índice da imagem no array de imagens.
    const emojiIndex = this.querySelector("img").getAttribute("data-emoji");
  
    // Exibe a imagem do array de imagens correspondente.
    this.querySelector("img").src = shuffleAnimals[emojiIndex];
  
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
  
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
    }
  
 
  function checkMatch() {
    if (openCards[0].querySelector("img").src === openCards[1].querySelector("img").src) {     
         openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === animals.length) {
      showCustomAlert();
    }
  }
  
  // Função para exibir a caixa de diálogo personalizada quando o jogo é vencido
  function showCustomAlert() {
    const customAlert = document.querySelector(".custom-alert");
    customAlert.style.display = "flex";
  }
  
  // Fechar a caixa de diálogo personalizada quando o botão "Fechar" é clicado
  document.querySelector("#close-alert").addEventListener("click", function () {
    const customAlert = document.querySelector(".custom-alert");
    customAlert.style.display = "none";
  });
  