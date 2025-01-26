function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

function randomQuotes() {
    randomNumber = getRandomNumber()
    fetch("/asset/js/json/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('quotes').innerHTML += `
                        <div class="p-2"> 
                            <p class="text-lg font-semibold">${data[randomNumber].title}</p>
                            <p>${data[randomNumber].text}</p>
                            <hr class="my-2 bg-slate-600">
                        </div>`
        })

}


randomQuotes()

setInterval(function () {
    randomQuotes()
}, 45000)
