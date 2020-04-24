
document.addEventListener('DOMContentLoaded',() =>{

  //create cards to be placed
  const cardArray = [
    {
      name:'chuck',img:'images/chuck.png'},{name:'chuck',img:'images/chuck.png'},
    {
      name:'fk',img:'images/fk.png'},{name:'fk',img:'images/fk.png'},
    {
      name:'gf',img:'images/gf.png'},{name:'gf',img:'images/gf.png'},
    {
      name:'jv',img:'images/jv.png'},{name:'jv',img:'images/jv.png'},
    {
      name:'mm',img:'images/mm.png'},{name:'mm',img: 'images/mm.png'},
    {
      name:'pre',img:'images/pre.png'},{name:'pre',img: 'images/pre.png'},
    {
      name:'gremlin',img:'images/gremlin.png'},{name:'gremlin', img:'images/gremlin.png'},
    {
      name:'jigsaw',img:'images/jigsaw.png'},{name:'jigsaw',img:'images/jigsaw.png'},
    {
      name:'penny',img:'images/penny.png'},{name:'penny',img:'images/penny.png'},
    {
      name:'pinhead',img:'images/pinhead.png'}, {name:'pinhead',img:'images/pinhead.png'},
    {
      name:'spawn',img:'images/spawn.png'},  {name:'spawn',img:'images/spawn.png'},
    {
      name:'bb',img:'images/bb.png'},{name:'bb',img:'images/bb.png'},
    {
      name:'frank',img:'images/frank.png'}, {name:'frank',img:'images/frank.png'},
    {
      name:'wolf',img:'images/wolf.png'},{name:'wolf',img:'images/wolf.png'},
    {
      name:'zom',img:'images/zom.png'},{name:'zom',img:'images/zom.png'}
    ]//end of array


    //sort cards in random order
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const moves = document.querySelector('#nom')


    // hold the number of moves
    var numOfTries = 0
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    function preload(){
      flipCardSound = loadSound('sounds/flip.mp3')
    }
    //create the board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/top.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]

      if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/top.png')
        cards[optionTwoId].setAttribute('src', 'images/top.png')
        numOfTries+=1//increment when cards aren't a match
      }

      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      moves.textContent = numOfTries
      var score = resultDisplay.textContent

      //message displayed after game
      if(cardsWon.length === cardArray.length/2) {
        let thisResult = alert('You won!'+'\n'+'Total Score: '+resultDisplay.textContent+'\n'+
        'Total number of moves: '+ moves.textContent)
        window.location.reload(thisResult)
      }
    }

    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }
    }

//intialize the game
    createBoard()
  })
