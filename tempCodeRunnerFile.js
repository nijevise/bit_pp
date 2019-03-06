function findAlphabeticOrder(words) {
    var orderString = words.toLowerCase();
    var splitStringArray = orderString.split("");
    splitStringArray.sort();
    splitStringArray.join(",");
    return splitStringArray.toString();
}
console.log(findAlphabeticOrder("Webmaster"));