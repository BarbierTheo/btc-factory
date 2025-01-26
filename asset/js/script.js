coinMiner = document.getElementById('miner')

function round(element) {
    return Math.round(element * 10000) / 10000
}

if (localStorage.getItem('bitcoin') == null || localStorage.getItem('bitcoin') == "NaN") {
    bitcoin = 0
} else {
    bitcoin = round(localStorage.getItem('bitcoin'))
}

console.log('BITCOIN : ' + bitcoin)


document.getElementById('bitcoinShow').innerHTML = bitcoin

document.getElementById('reset').addEventListener('click', () => {
    bitcoin = 0
    autominer = 0
    document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
    localStorage.setItem('autominer', 0)
    localStorage.setItem('bitcoin', 0)
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


// AUTOMINER
let autominer = 0
if (localStorage.getItem('autominer') == null || localStorage.getItem('autominer') == "NaN") {
    autominer = 0
} else {
    autominer = round(localStorage.getItem('autominer'))
}


let autominerPrice = 0.01 + (0.01 * autominer)

function buyAutominer() {

    if (bitcoin >= autominerPrice) {

        autominer = autominer + 1
        bitcoin = bitcoin - autominerPrice
        document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
        document.getElementById('autominerCount').innerText = autominer
        localStorage.setItem('autominer', autominer)
        document.getElementById('autominerStats').innerHTML = round(0.004 * autominer)
        document.getElementById('autominerPrice').innerText = round(0.01 + (0.01 * autominer))
        document.getElementById('bitcoinsPerSec').innerText = round(0.004 * autominer)
    }


}

document.getElementById('autominer').addEventListener('click', buyAutominer)
let coinsAutomine = 0
function automine() {
    if (autominer >= 1) {

        bitcoin = bitcoin + (0.004 * autominer)
        document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
        coinsAutomine = (0.004 * autominer)
        console.log('AUTOMINE')

    }
}

automine()

setInterval(function () {
    automine()
}, 5000)


document.getElementById('autominerCount').innerText = autominer
document.getElementById('autominerPrice').innerText = round(0.01 + (0.01 * autominer))
document.getElementById('autominerStats').innerText = (0.004 * autominer)


// BITCOINS PAR SEC

document.getElementById('bitcoinsPerSec').innerText = (0.004 * autominer)

// ENREGISTREMENT des BITCOINS

function saveBitcoin() {
    console.log('save')
    localStorage.setItem('bitcoin', round(bitcoin))
}

saveBitcoin()

setInterval(function () {
    saveBitcoin()
}, 10000)