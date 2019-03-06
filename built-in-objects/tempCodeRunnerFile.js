function hideEmail(stringUrl) {

    var num = stringUrl.indexOf("@") - 9;
    var strArr = stringUrl.split("")
    strArr.splice(num, 9, "...")
    newStr = strArr.join("")
    console.log(newStr);
}
hideEmail("somerandomaddress@example.com");