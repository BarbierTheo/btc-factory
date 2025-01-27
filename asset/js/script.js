function refreshdom() {

    document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
    document.getElementById('autominerCount').innerText = round(autominer)
    document.getElementById('autominerPrice').innerText = round(autominerPrice)
    document.getElementById('autominerStats').innerText = round(autominerTimer)
    document.getElementById('bitcoinsPerSec').innerText = round(autominerTimer+totalBonus)
    document.getElementById('bonusPrice1').innerText = round(bonusPrice)

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
    autominer = round(localStorage.getItem('autominer'))
}

let autominerTimer = (0.004 * autominer)
let autominerBonus = 1

function automine() {
    if (autominer >= 1) {
        bitcoin = bitcoin + (autominerTimer*autominerBonus)
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


let autominerPrice = 0.01 + (0.05 * autominer) * multiplierAutominer

function buyAutominer() {

    // console.log(bitcoin)
    // console.log(autominerPrice)

    

    if (bitcoin > autominerPrice) {
        autominer = (autominer + 1)
        bitcoin = bitcoin - autominerPrice
        document.getElementById('bitcoinShow').innerHTML = round(bitcoin)
        localStorage.setItem('autominer', autominer)
        autominerTimer = (0.004 * autominer)
        autominerPrice = 0.01 + (0.05 * autominer) * multiplierAutominer
    }

    refreshdom()
}

document.getElementById('autominer').addEventListener('click', buyAutominer)







// BONUS TOTAL

let bonus = 0

let totalItems = autominerTimer
let totalBonus = totalItems*(bonus)

function totalBonusAdd () {
    totalBonus = totalItems*(bonus)
    bitcoin = bitcoin+totalBonus
}

let bonusPrice = 5

// ACHAT BONUS

function buyTotalBonus () {

    if (bitcoin > bonusPrice){
        bitcoin = bitcoin - bonusPrice
        bonus++
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