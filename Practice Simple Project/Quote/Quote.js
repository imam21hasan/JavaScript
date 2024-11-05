const randomQuotes = [
  {
    quote: "Surely prayer keeps people away from immoral and evil deeds.",
    source: "Quran 29:45",
  },
  {
    quote: "So verily, with hardship, there is relief.",
    source: "Quran 94:6",
  },
  {
    quote: "And whoever puts their trust in Allah, He will be enough for them.",
    source: "Quran 65:3",
  },
  {
    quote: "Do not lose hope, nor be sad.",
    source: "Quran 3:139",
  },
  {
    quote: "And when My servants ask you concerning Me, indeed I am near.",
    source: "Quran 2:186",
  },
  {
    quote: "Indeed, Allah does not burden a soul beyond that it can bear.",
    source: "Quran 2:286",
  },
  {
    quote:
      "Allah is the Protector of those who have faith: From the depths of darkness He will lead them forth into light.",
    source: "Quran 2:257",
  },
  {
    quote:
      "And whoever fears Allah, He will make for him a way out and provide for him from where he does not expect.",
    source: "Quran 65:2-3",
  },
  {
    quote: "Our Lord, pour upon us patience and let us die as Muslims.",
    source: "Quran 7:126",
  },
  {
    quote: "Call upon Me, I will respond to you.",
    source: "Quran 40:60",
  },
  {
    quote: "And He found you lost and guided you.",
    source: "Quran 93:7",
  },
  {
    quote: "If Allah should aid you, no one can overcome you.",
    source: "Quran 3:160",
  },
  {
    quote: "Indeed, Allah is with the patient.",
    source: "Quran 2:153",
  },
  {
    quote: "And whoever fears Allah - He will make his matter easy for him.",
    source: "Quran 65:4",
  },
  {
    quote:
      "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive.",
    source: "Quran 2:45",
  },
  {
    quote: "So be patient. Indeed, the promise of Allah is truth.",
    source: "Quran 30:60",
  },
  {
    quote: "Indeed, Allah loves those who rely [upon Him].",
    source: "Quran 3:159",
  },
  {
    quote: "And do good; indeed, Allah loves the doers of good.",
    source: "Quran 2:195",
  },
  {
    quote: "For indeed, with hardship comes ease.",
    source: "Quran 94:5",
  },
  {
    quote:
      "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient.",
    source: "Quran 2:155",
  },
  {
    quote:
      "This day I have perfected for you your religion and completed My favor upon you and have approved for you IsLam as religion.",
    source: "Quran 5:3",
  },
  {
    quote:
      "And whoever turns away from My remembrance - indeed, he will have a depressed life.",
    source: "Quran",
  },
];

const quoteElement = document.getElementById("quote");
const sourceElement = document.getElementById("source");
const button = document.getElementById("button");

function autoQuote() {
  const quoteIndex = Math.floor(Math.random() * randomQuotes.length);
  quoteElement.textContent = randomQuotes[quoteIndex].quote;
  sourceElement.textContent = randomQuotes[quoteIndex].source;
}
autoQuote();
button.addEventListener("click", autoQuote);
