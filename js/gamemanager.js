let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Guerreiro":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Ladino":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Mago":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Caçador":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Vida: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Força: ' + player.strength + '</p><p>Agilidade: ' + player.agility + '</p><p>Velocidade: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".acoes");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Ache um inimigo!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Ache um inimigo!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".acoes");
    let getEnemy = document.querySelector(".inimigo");
    // Create enemy!
    let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
    let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Ataque!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Ataque!</a>';
    getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Vida: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Força: ' + enemy.strength + '</p><p>Agilidade: ' + enemy.agility + '</p><p>Velocidade: ' + enemy.speed + '</p></div>';
  }
}
