import fetch from "node-fetch";

const BASE_URL = "https://animechan.vercel.app/api/random";

const fetchRandomAnimeQuote = async () => {
  const response = await fetch(BASE_URL);
  return response;
};

let error = null;
const getRandomAnimeQuotes = async () => {
  try {
    const response = await fetchRandomAnimeQuote();
    const data = await response.json();
    return data;
  } catch (err) {
    error = err.message;
  }
};

console.log("loading...");
const { anime, character, quote } = await getRandomAnimeQuotes();

if (error) console.log(error);

console.log("---------------------");
console.log(`Anime --> ${anime}`);
console.log(`Character --> ${character}`);
console.log(`Quote --> ${quote}`);
console.log("---------------------");
