
let job = 1

// MINER

let bitcoinclick = 0
let stillMiner = 5000
let minerGen = 0

document.getElementById('jobInterface').innerHTML = `
                    <div class="flex flex-col justify-center self-center h-full gap-8 text-center">
                        <p class="text-3xl font-bold self-center">FREE BITCOIN</p>
                        <button class="self-center cursor-pointer" id="miner"><img src="./asset/img/icons/Warning.png"
                        alt="" class="w-[8rem]"></button>
                        <p>clics : <span id="clicksMiner">0</span></p>
                        <p><span id="minerGen">0</span> bitcoins générés</p>
                        <p>encore <span id="stillMiner">10000</span> clics pour un bitcoin complet !</p>
                    </div>  `

let coinMiner = document.getElementById('miner')
document.getElementById('stillMiner').innerHTML = '5000'

coinMiner.addEventListener('click', () => {

    bitcoin = round(bitcoin) + (0.0002)
    minerGen = minerGen + (0.0002)
    bitcoinclick++
    document.getElementById('clicksMiner').innerHTML = bitcoinclick
    document.getElementById('stillMiner').innerHTML = stillMiner - bitcoinclick
    document.getElementById('minerGen').innerHTML = round(minerGen)
    refreshdom()
})


