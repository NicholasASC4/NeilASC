
var Roster =[];
var deadpp =[];
function Pokemon(Name, Type, HP, DEF, ATK, LEGEND){
    this.Name = Name
    this.Type = Type
    this.HP = HP
    this.DEF = DEF
    this.ATK = ATK
    this.LEGEND = LEGEND
}

var Mewtwo = new Pokemon("Mewtwo","Phychic",325,166,281,true);
var Snorlax = new Pokemon("Snorlax","Normal",430,121,202,false);
var Blaziken = new Pokemon("Blaziken","Fire",270,130,220,false);
var Heracross = new Pokemon("Heracross","Bug",270,139,229,false);
var Rayquaza = new Pokemon("Rayquaza","Dragon",320,166,274,true);


Roster.push(Mewtwo,Snorlax,Blaziken,Heracross,Rayquaza);

function printRoster(){
    console.log(Roster);
}

printRoster();

function pokemonattack(){
Roster.pull(Mewtwo,Snorlax,Blaziken,Heracross,Rayquaza)
Mewtwo.HP - 10
Snorlax.HP - 10
Blaziken.HP - 10
Heracross.HP - 10
Rayquaza.HP - 10
deadpp.push(Mewtwo, Snorlax, Blaziken, Heracross, Rayquaza)
}

pokemonattack();

console.log(deadpp);