// // Characters
// // create data for all the characters, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)

//strongest to weakest Digimon: Millenniummon, Imperialdramon, Susanoomon, Apocalymon, Khaosmon
//strongest to weakest Pokemon: Rayquaza, Arceus, Giratina, Palkia, Dialga

//Database section      ==================================================
var characterDB = [
  {
    name: 'Imperialdramon',
    hp: 900,
    attack: 80,
    defense: 40,
    level: '1,000,000,000',
    img: './img/strongest_digimon/1Imperialdramon_Paladin_Mode.gif'
  },
  {
    name: 'Apocalymon',
    hp: 700,
    attack: 40,
    defense: 80,
    level: '10,000,000',
    img: './img/strongest_digimon/1Apocalymon.gif'
  },
  {
    name: 'Susanoomon',
    hp: 800,
    attack: 60,
    defense: 60,
    level: '100,000,000',
    img: './img/strongest_digimon/1SUSANOOMON.gif'
  },
  {
    name: 'Khaosmon',
    hp: 600,
    attack: 20,
    defense: 100,
    level: '1,000,000',
    img: './img/strongest_digimon/1UltimateKhaosmon.gif'
  },
  {
    name: 'Millenniummon',
    hp: 1000,
    attack: 100,
    defense: 20,
    level: '10,000,000,000',
    img: './img/strongest_digimon/1ZEEDMILLENNIUMMON.gif'
  },
  {
    name: 'Arceus',
    hp: 900,
    attack: 80,
    defense: 40,
    level: '1,000,000,000',
    img: './img/strongest_pokemon/1arceus.gif'
  },
  {
    name: 'Dialga',
    hp: 600,
    attack: 20,
    defense: 100,
    level: '1,000,000',
    img: './img/strongest_pokemon/1dialga.gif'
  },
  {
    name: 'Giratina',
    hp: 800,
    attack: 60,
    defense: 60,
    level: '100,000,000',
    img: './img/strongest_pokemon/1giratina-origin.gif'
  },
  {
    name: 'Palkia',
    hp: 700,
    attack: 40,
    defense: 80,
    level: '10,000,000',
    img: './img/strongest_pokemon/1palkia.gif'
  },
  {
    name: 'Rayquaza',
    hp: 1000,
    attack: 100,
    defense: 20,
    level: '10,000,000,000',
    img: './img/strongest_pokemon/1rayquaza-mega.gif'
  },
]


//game state    ===================================================================
var gameState = {
  userCharacter: '',
  rivalCharacter: ''
}


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
    computerPick()
    //battle screen appears after player 1 selects character    ================================
    battleScreenEl.classList.toggle('active');
    
    //accessing database from the selected player1 character    ==================================
    var currentUserCharacter = characterDB.filter(function(character) {
      return character.name == gameState.userCharacter;
    });
    player1Img[0].src = currentUserCharacter[0].img;


    //accessing database from the selected computer character    ==================================
    var currentRivalCharacter = characterDB.filter(function(character) {
      return character.name == gameState.rivalCharacter;
    });
    player2Img[0].src = currentRivalCharacter[0].img;
    
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
while(a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function() {
    var attackName = this.dataset.attack;
    gameState.currentUserAttack = attackName
    console.log(gameState.currentUserAttack);
  };
  a++;
};

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var computerPick = function() {
  gameState.rivalCharacter = charEl[randomNumber(0, 10)].dataset.character;
}














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