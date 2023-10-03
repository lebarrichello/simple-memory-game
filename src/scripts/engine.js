const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
  ];
  
  let openCards = []; // Matriz usada para rastrear os cartões que foram clicados
  
  // Embaralhando a matriz emojis aleatoriamente
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  // Loop for usado para criar elementos HTML <div> para cada emoji embaralhado
  // Cada <div> é configurado com uma classe chamada "item" e o emoji correspondente é definido como seu conteúdo
  // Além disso, um evento de clique (onclick) é adicionado a cada <div> que chama a função handleClick quando um emoji é clicado
  // Os <div> são anexados ao elemento HTML com a classe "game"
  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }
  
  // A função handleClick é chamada sempre que um emoji é clicado
  // Se houver menos de 2 emojis abertos (openCards.length < 2),
  // o emoji clicado é marcado com a classe "boxOpen" e adicionado à matriz openCards
  function handleClick() {
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
    // Se dois emojis foram abertos (openCards.length == 2),
    // a função checkMatch é chamada após um pequeno atraso de 500 milissegundos usando setTimeout
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }
  
  // A função checkMatch verifica se os emojis abertos são correspondentes
  // Se eles forem correspondentes (ou seja, seus conteúdos são iguais),
  // eles são marcados com a classe "boxMatch"
  // Caso contrário, a classe "boxOpen" é removida para que eles sejam fechados novamente
  // Após verificar a correspondência ou não, a matriz openCards é redefinida como um array vazio, preparando-se para a próxima jogada
  // A função verifica se o número de emojis marcados como "boxMatch" é igual ao número total de emojis na matriz emojis
  // Se for igual, isso significa que todos os pares foram encontrados e a função showCustomAlert() é chamada
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
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
  