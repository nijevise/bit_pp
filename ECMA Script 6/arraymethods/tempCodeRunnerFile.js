const transform = (...arr) => {
    const filterFunc = element => (typeof element === 'string');
    const strings = arr.filter(filterFunc);
    const upper = strings.map(element => (
        `$(element.charAt(0).toUpperCase())$(element.slice(1))`
    ))
}
console.log(upper());
transform('es', 'there', 'hello', 6)