

if (localStorage.getItem('bitcoin') == null || localStorage.getItem('bitcoin') == "NaN") {
    bitcoin = 0
} else {
    bitcoin = Number(localStorage.getItem('bitcoin'))
}

console.log('BITCOIN : ' + bitcoin)


document.getElementById('bitcoinShow').innerHTML = bitcoin

// RESET

document.getElementById('reset').addEventListener('click', () => {
    bitcoin = 0
    autominer = 0
    localStorage.setItem('autominer', 0)
    localStorage.setItem('bitcoin', 0)
    refreshdom()
})



// AUTOMINER

let autominer = 0
if (localStorage.getItem('autominer') == null || localStorage.getItem('autominer') == "NaN") {
    autominer = 0
} else {
    autominer = Number(localStorage.getItem('autominer'))
}

let autominerWork = 1
let autominerBonus = 1
let autominerTimer = (autominerWork * autominer)

function automine() {
    if (autominer >= 1) {
        bitcoin = bitcoin + (autominerTimer * autominerBonus)
    }
}

automine()



// ACHAT AUTOMINER

let multiplierAutominer = 1
if (autominer > 10) {
    multiplierAutominer = 2
} else if (autominer > 30) {
    multiplierAutominer = 3
}


let autominerPrice = 10 + (autominer)*multiplierAutominer

function buyAutominer() {

    // console.log(bitcoin)
    // console.log(autominerPrice)



    if (bitcoin >= autominerPrice) {
        autominer = (autominer + 1)
        bitcoin = bitcoin - autominerPrice
        document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
        localStorage.setItem('autominer', autominer)
        autominerPrice = 10 + (autominer)*multiplierAutominer
        autominerTimer = (autominerWork * autominer)
    }

    refreshdom()
}

document.getElementById('autominer').addEventListener('click', buyAutominer)







// BONUS TOTAL

let totalItems = autominerTimer

let bonus = 0

let totalBonus = totalItems * (0.1 * (bonus))

function totalBonusAdd() {

    totalItems = autominerTimer
    totalBonus = totalItems * (0.1 * (bonus))
    bitcoin = bitcoin + totalBonus
}

let bonusPrice = 100

// ACHAT BONUS

function buyTotalBonus() {

    if (bitcoin > bonusPrice) {
        bitcoin = bitcoin - bonusPrice
        bonus++
        totalItems = autominerTimer
        totalBonus = totalItems * (0.1 * (bonus))
    }
    refreshdom()
    // console.log(totalBonus)
}

document.getElementById('bonus1').addEventListener('click', buyTotalBonus)






// INTERVALLE AUTOMATIQUE CHARGEMENT DES ACTIFS

setInterval(function () {
    automine()
    refreshdom()
    totalBonusAdd()
}, 3000)

function refreshdom() {

    document.getElementById('bitcoinShow').innerHTML = bitcoin
    document.getElementById('autominerCount').innerText = autominer
    document.getElementById('autominerPrice').innerText = autominerPrice
    document.getElementById('autominerStats').innerText = autominerTimer + (autominer * (0.1 * bonus))
    document.getElementById('bitcoinsPerSec').innerText = autominerTimer + totalBonus
    document.getElementById('bonusPrice1').innerText = bonusPrice

}


refreshdom()

// ENREGISTREMENT des BITCOINS

function saveBitcoin() {
    console.log('save')
    localStorage.setItem('bitcoin', bitcoin)
}

saveBitcoin()

setInterval(function () {
    saveBitcoin()
}, 10000)