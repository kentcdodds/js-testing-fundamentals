const cardQuoteNumber = document.querySelector(".card-quote-number");
const cardQuote = document.querySelector(".card-quote");
const cardButton = document.querySelector(".card-button");

const RandomAdvice = async () => {
  const response = await fetch("	https://api.adviceslip.com/advice");
  const data = await response.json();
  renderQuote(data.slip);
};

const renderQuote = (quote) => {
  cardQuoteNumber.innerHTML = `ADVICE #${quote.id}`;
  cardQuote.innerHTML = quote.advice;
};

cardButton.addEventListener("click", () => {
  RandomAdvice();
});

RandomAdvice();
