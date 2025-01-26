coinMiner = document.getElementById('miner')


if (localStorage.getItem('bitcoin') == null || localStorage.getItem('bitcoin') == "NaN") {
    bitcoin = 0
} else {
    bitcoin = localStorage.getItem('bitcoin')
}

function round(element) {
    return Math.round(element* 10000) / 10000
}

document.getElementById('bitcoinShow').innerHTML = bitcoin

document.getElementById('reset').addEventListener('click', () => {
    bitcoin = 0
    document.getElementById('bitcoinShow').innerHTML = bitcoin
})

// MINER

document.getElementById('stillMiner').innerHTML = '5000'

let bitcoinclick = 0
let stillMiner = 5000
let minerGen = 0

coinMiner.addEventListener('click', () => {

    bitcoin = round(bitcoin) + (0.0002)
    minerGen = minerGen + (0.0002)
    bitcoinclick++
    document.getElementById('clicksMiner').innerHTML = bitcoinclick
    document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
    document.getElementById('stillMiner').innerHTML = stillMiner - bitcoinclick 
    document.getElementById('minerGen').innerHTML = round(minerGen)

})

function saveBitcoin() {
    console.log('save')
    localStorage.setItem('bitcoin', round(bitcoin))
}

saveBitcoin();

setInterval(function () {
    saveBitcoin()
}, 10000)