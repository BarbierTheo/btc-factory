
let job = 1

function showGame() {

    // MINER

    if (job == 1) {

        let bonusMiner = 1
        let btcClicMiner = 0
        let mining = 0.0002 * bonusMiner
        let baseMiner = round(1 / mining)
        let btcGenerate = 0
        let stillMiner = round(baseMiner - btcClicMiner)

        document.getElementById('jobInterface').innerHTML = `
                    <div class="flex flex-col justify-center self-center h-full gap-8 text-center">
                        <p class="text-3xl font-bold self-center">FREE BITCOIN</p>
                        <button class="self-center cursor-pointer" id="miner"><img src="./asset/img/icons/Warning.png"
                        alt="" class="w-[8rem]"></button>
                        <p>clics : <span id="clicksMiner">0</span></p>
                        <p><span id="btcGenerate">0</span> bitcoins générés</p>
                        <p>encore <span id="stillMiner">???</span> clics pour un bitcoin complet !</p>
                    </div>  `

        let coinMiner = document.getElementById('miner')
        document.getElementById('stillMiner').innerHTML = '5000'

        coinMiner.addEventListener('click', () => {

            btcClicMiner++
            stillMiner = (baseMiner - btcClicMiner)
            bitcoin = round(bitcoin) + mining
            btcGenerate = btcGenerate + (0.0002)
            document.getElementById('clicksMiner').innerHTML = btcClicMiner

            if (stillMiner == 1) {
                baseMiner = baseMiner + round(1 / mining)
                stillMiner = round(baseMiner - btcClicMiner)
                document.getElementById('stillMiner').innerHTML = (stillMiner)
                console.log(stillMiner)
            } else {
                document.getElementById('stillMiner').innerHTML = (stillMiner)
            }

            document.getElementById('btcGenerate').innerHTML = round(btcGenerate)

            refreshdom()

        })

    }

    // JEU 2

    if (job == 2) {
        console.log('jeu 2')
    }


}

showGame()