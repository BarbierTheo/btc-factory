function refreshdom() {

    document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
    document.getElementById('autominerCount').innerText = round(autominer)
    document.getElementById('autominerPrice').innerText = round(autominerPrice)
    document.getElementById('autominerStats').innerText = round(autominerTimer)
    document.getElementById('bitcoinsPerSec').innerText = round(autominerTimer)

}

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
    localStorage.setItem('autominer', 0)
    localStorage.setItem('bitcoin', 0)
    refreshdom()
})

// MINER
coinMiner = document.getElementById('miner')
document.getElementById('stillMiner').innerHTML = '5000'

let bitcoinclick = 0
let stillMiner = 5000
let minerGen = 0

coinMiner.addEventListener('click', () => {

    bitcoin = round(bitcoin) + (0.0002)
    minerGen = minerGen + (0.0002)
    bitcoinclick++
    document.getElementById('clicksMiner').innerHTML = bitcoinclick
    document.getElementById('stillMiner').innerHTML = stillMiner - bitcoinclick
    document.getElementById('minerGen').innerHTML = round(minerGen)
    refreshdom()
})


// AUTOMINER
let autominer = 0
if (localStorage.getItem('autominer') == null || localStorage.getItem('autominer') == "NaN") {
    autominer = 0
} else {
    autominer = round(localStorage.getItem('autominer'))
}


let autominerTimer = (0.004 * autominer)

function automine() {
    if (autominer >= 1) {
        bitcoin = bitcoin + autominerTimer
        document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
        console.log('AUTOMINE')

    }
}

automine()

setInterval(function () {
    automine()
}, 5000)


let autominerPrice = round(0.01 + (0.01 * autominer))

function buyAutominer() {

    // console.log(bitcoin)
    // console.log(autominerPrice)

    if (bitcoin >= autominerPrice) {
        autominerPrice = round(0.01 + (0.01 * autominer))
        autominer = (autominer + 1)
        bitcoin = bitcoin - autominerPrice
        document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
        localStorage.setItem('autominer', autominer)
        refreshdom()

    }


}

document.getElementById('autominer').addEventListener('click', buyAutominer)

refreshdom()

// ENREGISTREMENT des BITCOINS

function saveBitcoin() {
    console.log('save')
    localStorage.setItem('bitcoin', round(bitcoin))
}

saveBitcoin()

setInterval(function () {
    saveBitcoin()
}, 10000)