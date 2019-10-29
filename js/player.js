let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function() {
    // Quem ataca primeiro?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    // Jogador ataca!
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Numero de hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // Inimigo ataca!
    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Numero de hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // Pegar valor da vida do personage/inimigo para mudar depois!
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // Começando ataques!
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("Voce tirou " + playerAttackValues[0] + " de dano " + playerAttackValues[1] + " vezes.");
      if (enemy.health <= 0) {
        alert("Voce ganhou! Atualize a página para jogar novamente.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        // Inimigo ataca
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("Voce perdeu! Atualize a página para jogar novamente.");
          getPlayerHealth.innerHTML = 'Health: 0';
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("O inimigo tirou " + enemyAttackValues[0] + " de dano " + enemyAttackValues[1] + " vezes.");
      if (player.health <= 0) {
        alert("Voce perdeu! Atualize a página para jogar novamente.");
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        // Jogador ataca
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("Voce tirou " + playerAttackValues[0] + " de dano " + playerAttackValues[1] + " vezes.");
        if (enemy.health <= 0) {
          alert("Voce ganhou! Atualize a página para jogar novamente.");
          getEnemyHealth.innerHTML = 'Health: 0';
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }

}
