function program(a, b, c, d) {
    var firstProgram = {
        description: a,
        "programming language": b,
        gitRepository: c,
        boolean: d,
    };
    return firstProgram;
};
c1 = program("OOP", "JavaScript", "MarinaPesic", true);
console.log(c1.description);