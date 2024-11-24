const quotes = [
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: " Elbert Hubbard",
  },
  {
    quote:
      "In three words I can sum up everything Ive learned about life: it goes on.",
    author: " Robert Frost",
  },
  {
    quote: "If you tell the truth, you dont have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote:
      "You know you are in love when you cant fall asleep because reality is finally better than your dreams.",
    author: " Dr. Seuss",
  },
  {
    quote: "A room without books is like a body without a soul",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
    author: "Einstein",
  },
];

function displayquote() {
  var bBox = " ";
  var currentQuoteIndex = getRandomNumber();
  bBox = `<div>
                    <p class="quote mb-5 fs-2 fw-bold" id="quote">${
                      quotes[currentQuoteIndex].quote
                    }</p>
                    <p class="author mb-5 fs-2 fw-bold" id="author">- ${
                      quotes[currentQuoteIndex].author
                    }</p>
                </div>`;
  document.getElementById("row").innerHTML = bBox;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 7);
}

