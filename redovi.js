<skript>
    var animals=["Cat", "Dog", "Llama"];
    var rezultat=[];
    rezultat=animals.unshift("Majmun");
    console.log(rezultat);
   console.log(animals);
        </skript>


var m = ["januar", "februar", "mart"];
console.log(m[0] + "\n", m[1] + "\t", m[2]);

var res = "0";
var res1 = "1";

for (var i = 0; i < 5; i++) {
    for (var c = 1; c < 5; c++) {
        res += " 0";
    }
    console.log(res);
    for (var j = 1; j < 5; j++) {
        for (var d = 1; d < 5; d++) {
            res1 += " 1";
        }
        console.log(res1);
        res1 = "1";
    }
    res = "0";
    console.log("\t");
}




var res = "*";

for (var i = 0; i < 5; i++) {
    for (var c = 1; c < 5; c++) {
        res += " *";
    }
    console.log(res);
    for (var j = 1; j < 5; j++) {
        res = "*";
        for (var d = 1; d < 5; d++) {
            res += " *";
        }
        console.log(res);
        res = "*";
    }
    res = "*";
    console.log("\t");
}

