let quoteInput = document.getElementById("quote");
let arrayOfQuotes = [
  `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“So many books, so little time.”
― Frank Zappa`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,
  `“You only live once, but if you do it right, once is enough.”
― Mae West`,
  `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
  `“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,
  `“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
  `“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard`,
  `“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,
];
let prevIndex = -1;

function getUniqueRandomIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (newIndex === prevIndex);

  prevIndex = newIndex;
  return newIndex;
}

function displayQuote() {
  let randomIndex = getUniqueRandomIndex();
  quoteInput.innerHTML = arrayOfQuotes[randomIndex];
}
