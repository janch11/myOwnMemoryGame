var cardsCount=20
var cardsOnRow=5
var divBoard= null
var divScore= null
var cards=[]
var cardsChecked=[]
var moveCount=0
var cardsArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

function Init() {
    prepareLayout()
    generatingCardArray()
    shuffleCards(cards)
    cardsAdd()

}

function prepareLayout() {


//create game-board
    divBoard = document.querySelector('.game-board')
//create score-board
    divScore = document.querySelector('.game-score')
}
    function cardsAdd() {


    var cardsAdd = cards.forEach(function (element, index) {
        var card = document.createElement('div')
        card.classList.add("game-card")
        divBoard.appendChild(card)

        card.dataset.cardType = cards[index]
        card.dataset.index = index

        card.style.left = 5 + (card.offsetWidth+10) * (index%cardsOnRow) + 'px'
        card.style.top = 5 + (card.offsetHeight+10) * (Math.floor(index/cardsOnRow)) + 'px';



    })
        return cardsAdd
}

function generatingCardArray() {

    for (var i=0; i<cardsCount;i++){
        cards.push(Math.floor(i/2))
    }
}

function shuffleCards(arr) {
    var tmpArr = arr


    var counter = tmpArr.length

    while (counter > 0) {
        var ind = Math.floor(Math.random() * counter)
        counter--
        var temp = tmpArr[counter]

        tmpArr[counter] = tmpArr[ind]

        tmpArr[ind] = temp

    }
}

function renderGame() {
    //cleaning board
    divBoard.innerHTML=''

    //cleaning move board
    divScore.innerHTML=''
}


