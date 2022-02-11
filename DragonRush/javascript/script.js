//variables
var gold = 0;
var plusgold = 1;
var gps = 1;
function update(){
    if ( (totalMinions % 10) == 0){
        plusgold = plusgold * 2;
    }
    else {
        plusgold = plusgold;
    }
    document.getElementById('plusgold').innerHTML = "+" + plusgold + " Gold";
    document.getElementById('slimeamount').innerHTML = minions[0]['owned'];
    document.getElementById('undeadamount').innerHTML = minions[1]['owned'];
    document.getElementById('impamount').innerHTML = minions[2]['owned'];
    document.getElementById('totalminions').innerHTML = totalMinions;
}
function addGold(plusgold) {
    gold+=plusgold;
}
//Tableau des minions
var minions = [
    { id: 0, name: "Slime", cost: 10, gps: 1, owned: 0 },
    { id: 1, name: "Undead", cost: 20, gps: 2.5, owned: 0 },
    { id: 2, name: "Imp", cost: 50, gps: 5, owned: 0 }
];
var totalMinions = 0;

//Fonction d'achat de minions
    function buyAMinion(){
//Achat de slimes
        slime.onclick = function() {
        if (gold >= minions[0]['cost']) {
            gold = gold - minions[0]['cost'];
            minions [0]['owned'] = minions[0]['owned'] +1;
            minions[0]['cost'] = minions[0]['cost'] * 1.15;
            // multiplication par 2 quand il atteint 25 et autre multiple de 25
            if ((minions[0]['owned'] % 25) == 0) {
                minions[0]['gps'] = minions[0]['gps'] * 2;
                gps = gps + minions[0]['gps'];
                }
            else {
            gps = gps + minions[0]['gps']; }
            totalMinions = totalMinions + 1;
            // fonction qui améne la condition si totalminions dépasse 50 on a le clicker qui est multiplier par 2
            
            update();
            };
        };
//Achat de mort-vivants
        undead.onclick = function() {
        if (gold >= minions[1]['cost']) {
            gold = gold - minions[1]['cost'];
            minions[1]['owned'] = minions[1]['owned'] + 1;
            minions[1]['cost'] = minions[1]['cost'] * 1.15;
            if ((minions[1]['owned'] % 25) == 0) {
                minions[1]['gps'] = minions[1]['gps'] * 2;
                gps = gps + minions[1]['gps'];
                }
            else {
            gps = gps + minions[1]['gps']; }
            totalMinions = totalMinions + 1;
            update();
            };
        };
//Achat de lutins
        imp.onclick = function() {
            if (gold >= minions[2]['cost']) {
                gold = gold - minions[2]['cost'];
                minions[2]['owned'] = minions[2]['owned'] + 1;
                minions[2]['cost'] = minions[2]['cost'] * 1.15;
                if ((minions[2]['owned'] % 25) == 0) {
                    minions[2]['gps'] = minions[2]['gps'] * 2;
                    gps = gps + minions[2]['gps'];
                    }
                else {
                gps = gps + minions[2]['gps']; }
                totalMinions = totalMinions + 1;
                update();
                };
            };

        gold = gold + (gps/60);
        
    };

//Cette fonction montre le nouveau nombre des differentes variables
function draw(){
    plusgold.value = plusgold.toFixed(0);
    GoldPerSecond.value = gps.toFixed(0);
    creds.value = gold.toFixed(0);
    slime.value = minions[0]['cost'].toFixed(0);
    slimeamount.value = minions[0]['owned'].toFixed(0);
    undead.value = minions[1]['cost'].toFixed(0);
    undeadamount.value = minions[1]['owned'].toFixed(0);
    imp.value = minions[2]['cost'].toFixed(0);
    impamount.value = minions[2]['owned'].toFixed(0);
};

//Sauvegarde
function save(){
    localStorage.setItem("gold", gold.toFixed(0));
    localStorage.setItem("gps", gps.toFixed(0));
    localStorage.setItem("totalMinions", totalMinions.toFixed(0));
    localStorage.setItem("plusgold", plusgold.toFixed(0));
    localStorage.setItem("minions[0]['owned']", minions[0]['owned'].toFixed(0));
    localStorage.setItem("minions[1]['owned']", minions[1]['owned'].toFixed(0));
    localStorage.setItem("minions[2]['owned']", minions[2]['owned'].toFixed(0));
    localStorage.setItem("minions[0]['gps']", minions[0]['gps'].toFixed(0));
    localStorage.setItem("minions[1]['gps']", minions[1]['gps'].toFixed(0));
    localStorage.setItem("minions[2]['gps']", minions[2]['gps'].toFixed(0));
    localStorage.setItem("minions[0]['cost']", minions[0]['cost'].toFixed(0));
    localStorage.setItem("minions[1]['cost']", minions[1]['cost'].toFixed(0));
    localStorage.setItem("minions[2]['cost']", minions[2]['cost'].toFixed(0));
    
}

//Chargement
function load(){
    gold = localStorage.getItem("gold");
    gold = parseInt(gold);

    totalMinions = localStorage.getItem("totalMinions");
    totalMinions = parseInt(totalMinions);

    plusgold = localStorage.getItem("plusgold");
    plusgold = parseInt(plusgold);
    
    minions[0]['owned'] = localStorage.getItem("minions[0]['owned']", minions[0]['owned'].toFixed(0));
    minions[0]['owned'] = parseInt(minions[0]['owned']);
    minions[1]['owned'] = localStorage.getItem("minions[1]['owned']", minions[1]['owned'].toFixed(0));
    minions[1]['owned'] = parseInt(minions[1]['owned']);
    minions[2]['owned'] = localStorage.getItem("minions[2]['owned']", minions[2]['owned'].toFixed(0));
    minions[2]['owned'] = parseInt(minions[2]['owned']);

    minions[0]['cost'] = localStorage.getItem("minions[0]['cost']", minions[0]['cost'].toFixed(0));
    minions[0]['cost'] = parseInt(minions[0]['cost']);
    minions[1]['cost'] = localStorage.getItem("minions[1]['cost']", minions[1]['cost'].toFixed(0));
    minions[1]['cost'] = parseInt(minions[1]['cost']);
    minions[2]['cost'] = localStorage.getItem("minions[2]['cost']", minions[2]['cost'].toFixed(0));
    minions[2]['cost'] = parseInt(minions[2]['cost']);


    minions[0]['gps'] = localStorage.getItem("minions[0]['gps']", minions[0]['gps'].toFixed(0));
    minions[0]['gps'] = parseInt(minions[0]['gps']);
    minions[1]['gps'] = localStorage.getItem("minions[1]['gps']", minions[1]['gps'].toFixed(0));
    minions[1]['gps'] = parseInt(minions[1]['gps']);
    minions[2]['gps'] = localStorage.getItem("minions[2]['gps']", minions[2]['gps'].toFixed(0));
    minions[2]['gps'] = parseInt(minions[2]['gps']);

    gps = localStorage.getItem("gps");
    gps = parseInt(gps);
    update();
}
    
//Fonction qui calcule le gps total des monstres obtenus
function getGPS(){
    minions.forEach( function (minion){
        gps = gps + minion.gps * minion.owned;
    });            
}

// Créer une boucle pour mettre à jour le site
var mainloop = function() {
    buyAMinion(), draw()}; 
setInterval(mainloop, 16);