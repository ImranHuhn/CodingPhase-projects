// // Characters
// // create data for all the characters, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)

//strongest to weakest Digimon: Millenniummon, Imperialdramon, Susanoomon, Apocalymon, Khaosmon
//strongest to weakest Pokemon: Rayquaza, Arceus, Giratina, Palkia, Dialga

//Database section      ==================================================
var characterDB = [{
    name: 'Imperialdramon',
    hp: 400,
    attack: 8,
    defense: 4,
    level: 4,
    img: './img/strongest_digimon/1Imperialdramon_Paladin_Mode.gif'
  },
  {
    name: 'Apocalymon',
    hp: 200,
    attack: 4,
    defense: 8,
    level: 2,
    img: './img/strongest_digimon/1Apocalymon.gif'
  },
  {
    name: 'Susanoomon',
    hp: 300,
    attack: 6,
    defense: 6,
    level: 3,
    img: './img/strongest_digimon/1SUSANOOMON.gif'
  },
  {
    name: 'Khaosmon',
    hp: 100,
    attack: 2,
    defense: 10,
    level: 1,
    img: './img/strongest_digimon/1UltimateKhaosmon.gif'
  },
  {
    name: 'Millenniummon',
    hp: 500,
    attack: 10,
    defense: 2,
    level: 5,
    img: './img/strongest_digimon/1ZEEDMILLENNIUMMON.gif'
  },
  {
    name: 'Arceus',
    hp: 400,
    attack: 8,
    defense: 4,
    level: 4,
    img: './img/strongest_pokemon/1arceus.gif'
  },
  {
    name: 'Dialga',
    hp: 100,
    attack: 2,
    defense: 10,
    level: 1,
    img: './img/strongest_pokemon/1dialga.gif'
  },
  {
    name: 'Giratina',
    hp: 300,
    attack: 6,
    defense: 6,
    level: 3,
    img: './img/strongest_pokemon/1giratina-origin.gif'
  },
  {
    name: 'Palkia',
    hp: 200,
    attack: 4,
    defense: 8,
    level: 2,
    img: './img/strongest_pokemon/1palkia.gif'
  },
  {
    name: 'Rayquaza',
    hp: 500,
    attack: 10,
    defense: 2,
    level: 5,
    img: './img/strongest_pokemon/1rayquaza-mega.gif'
  },
];


//game state    ===================================================================
var gameState = {
  userCharacter: '',
  rivalCharacter: ''
};


//elements section   =============================================================
console.log(gameState);
var charEl = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(charEl);
var battleScreenEl = document.getElementById('battle-screen');
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack');
console.log(attackBtnsEl);


//loop for character selection    =======================================================
var i = 0;
while (i < charEl.length) {
  //function applied to each characters on the screen selection mode  ====================
  charEl[i].onclick = function () {
    //names that are selected in select mode   =============================================
    var characterName = this.dataset.character;
    //targeting the images in battle mode     =============================================
    var player1Img = document.querySelector('.player1').getElementsByTagName('img');
    var player2Img = document.querySelector('.player2').getElementsByTagName('img');

    //store player1 character into game state database      ===================================
    gameState.userCharacter = characterName;

    //computer randomly selects character  =====================================================
    computerPick();
    //battle screen appears after player 1 selects character    ================================
    battleScreenEl.classList.toggle('active');

    //accessing database from the selected player1 character    ==================================
    gameState.currentUserCharacter = characterDB.filter(function (character) {
      return character.name == gameState.userCharacter;
    });
    player1Img[0].src = gameState.currentUserCharacter[0].img;


    //accessing database from the selected computer character    ==================================
    gameState.currentRivalCharacter = characterDB.filter(function (character) {
      return character.name == gameState.rivalCharacter;
    });
    player2Img[0].src = gameState.currentRivalCharacter[0].img;

    gameState.currentUserCharacter[0].health = calcInitHealth(gameState.currentUserCharacter);
    gameState.currentRivalCharacter[0].health = calcInitHealth(gameState.currentRivalCharacter);

    console.log(gameState);

    //player1 picks battle options

    //computer character's hp goes down

    //computer picks battle options

    //player1 character's hp goes down

    //rock > scissors
    //paper > rock
    //scissors > paper

    //defense determines the effectiveness of the opponents attack on hp
    //defense determines whether opponent misses or not

    //player with health <= 0, loses


    //testing section  ================================================================
    // console.log(currentUserCharacter);
    // console.log(player1Img[0]);
    // console.log(gameState);
    // console.log('I pressed this character ' + characterName);
  };
  i++;
};

var a = 0;
while (a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function () {
    var attackName = this.dataset.attack;
    gameState.currentUserAttack = attackName;

    play(attackName, computerAttack());
  };
  a++;
};

var computerAttack = function () {
  var attacks = ['rock', 'paper', 'scissors'];

  return attacks[randomNumber(0, 3)];
};

var calcInitHealth = function (user) {
  return ((0.20 * Math.sqrt(user[0].level)) * user[0].defense) * user[0].hp;
};

var attackMove = function (attack, level, stack, critical, enemy, attacker) {
  console.log(enemy.name + ' before: ' + enemy.health);
  var attackAmount = ((attack * level) * (stack + critical));
  enemy.health = enemy.health - attackAmount;
  checkWinner(enemy, attacker);
  console.log('attack = ' + attackAmount);
  console.log(enemy.name + ' after: ' + enemy.health);
};

var checkWinner = function (enemy, attacker) {
  if(enemy.health <= 0) {
    console.log('Congratulations! You are the WINNER!! ' + attacker.name);
  };
};

var play = function (userAttack, computerAttack) {
  var currentUserCharacter = gameState.currentUserCharacter[0];
  var currentRivalCharacter = gameState.currentRivalCharacter[0];
  switch (userAttack) {
    case 'rock':
      console.log('I picked: ' + userAttack);
      console.log('Computer picked: ' + computerAttack);
      if (computerAttack == 'paper') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, .5, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, 2, currentUserCharacter, currentRivalCharacter);
            console.log('Paper beats Rock You lose.');
          };
        };
        
      };
      if (computerAttack == 'scissors') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, 2, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, .5, currentUserCharacter, currentRivalCharacter);
            console.log('Rock beats Scissors You win!');
          };
        };
      };
      if (computerAttack == 'rock') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, 1, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, 1, currentUserCharacter, currentRivalCharacter);
            console.log('Both of you lose.');
          };
        };
      };
      break;
    case 'paper':
      console.log('I picked: ' + userAttack);
      console.log('Computer picked: ' + computerAttack);
      if (computerAttack == 'scissors') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, .5, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, 2, currentUserCharacter, currentRivalCharacter);
            console.log('Scissors beats Paper You lose.');
          };
        };
      };
      if (computerAttack == 'rock') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, 2, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, .5, currentUserCharacter, currentRivalCharacter);
            console.log('Paper beats Rock You win!');
          };
        };
      };
      if (computerAttack == 'paper') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, 1, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, 1, currentUserCharacter, currentRivalCharacter);
            console.log('Both of you lose.');
          };
        };
      };
      break;
    case 'scissors':
      console.log('I picked: ' + userAttack);
      console.log('Computer picked: ' + computerAttack);
      if (computerAttack == 'rock') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, .5, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, 2, currentUserCharacter, currentRivalCharacter);
            console.log('Rock beats Scissors. You lose.');
          };
        };
      };
      if (computerAttack == 'paper') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, 2, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, .5, currentUserCharacter, currentRivalCharacter);
            console.log('Scissors beats Paper. You win!');
          };
        };
      };
      if (computerAttack == 'scissors') {
        if (currentUserCharacter.health >= 1 && currentRivalCharacter.health >= 1) {
          //user
          attackMove(currentUserCharacter.attack, currentUserCharacter.level, .8, 1, currentRivalCharacter, currentUserCharacter);
          if (currentRivalCharacter.health >= 1) {
            //computer
            attackMove(currentRivalCharacter.attack, currentRivalCharacter.level, .8, 1, currentUserCharacter, currentRivalCharacter);
            console.log('Both of you lose.');
          };
        };
      };
      break;
  };
};

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var computerPick = function () {
  gameState.rivalCharacter = charEl[randomNumber(0, 10)].dataset.character;
};














// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var defense = 39;

// // create a formula for attacks
// console.log((attack * level ) * stack / 7)



// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * defense) * 15)




// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2




// // when one user loses all his health declare a winner