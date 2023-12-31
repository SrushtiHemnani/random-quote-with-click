const newQuote = document.getElementById("new-quote")

 const getQuotes = async () =>{  
    const response = await fetch('https://api.quotable.io/quotes/random');
    const data = await response.json();

    text.innerText=data[0].content
    author.innerText= data[0].author
}

getQuotes()

newQuote.addEventListener("click", () =>{
     getQuotes()
})
