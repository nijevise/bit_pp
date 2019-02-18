var a = [2, 4, "test"];
console.log(a);

//a = [2, 4];
console.log([2, 4]);


for (i = 0; i < 10; i++) {
    console.log(i * i);
}

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " even");
    }
    else {
        console.log(i + " odd");
    }
}

var c = "";
var k = "";

for (i = 0; i < 8; i++) {
    if (k) {
        for (j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                c += " 1";
            }
            else {
                c += " 0";
            }
        }
        console.log(c);
        k = c.endsWith('1');
        c = "";
    }
    else {
        for (j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                c += " 0";
            }
            else {
                c += " 1";
            }
        }
        console.log(c);
        k = c.endsWith('1');
        c = "";
    }
}

console.log("");

console.log("");

var c = "";
var k = "";
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (j == i) {
            c = " 1"
        }
        else {
            c = " 0"
        }
        k += c;
    }
    console.log(k);
    c = "";
    k = "";
}
