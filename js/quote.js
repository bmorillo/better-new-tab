const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const generateButton = document.getElementById("generate-button");

//Try to fetch a random quote from the Quotable API
async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "An error occurred while fetching the quote.";
    }
}

//Update the quote text
async function updateQuote() {
    const randomQuote = await fetchRandomQuote();
    quoteText.textContent = randomQuote;
}

generateButton.addEventListener("click", updateQuote);
updateQuote();