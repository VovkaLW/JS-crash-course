//Task 6.2
//Get array cards
class CardDealer {
  suits = ['♥', '♦', '♠', '♣'];
  values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  cards = [];

  constructor() {
    // Initialize deck of cards
    for (let suit of this.suits) {
      for (let value of this.values) {
        this.cards.push({ suit, value });
      }
    }
  }
// Method to get a random card from the deck
  getRandomCard() {
    const index = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(index, 1)[0];
  }
// Method to create an HTML element for a given card
  createCardElement(card) {
    const el = document.createElement('li');
    el.classList.add('card');
    if (card.suit == '♥'|| card.suit =='♦'){
      el.classList.add('red');
    }
    el.textContent = `${card.value}${card.suit}`;
    return el;
  }
 // Method to deal a set of cards to a player
  dealCards(playerId) {
    const player = document.getElementById(playerId);
    player.innerHTML = ''; // Clear deck
    for (let i = 0; i < 6; i++) {
      const card = this.getRandomCard();  
      const cardEl = this.createCardElement(card);
      player.append(cardEl);
    }
  }
}

const dealer = new CardDealer();
const dealBtn = document.getElementById('deal-btn');
dealBtn.addEventListener('click', () => {
  dealer.dealCards('player1-cards');
  dealer.dealCards('player2-cards');
});
