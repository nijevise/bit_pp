function WebApp(name, url, licence, stars) {

    commonFeatures.call(this, name, licence, stars);
    this.url = url;
    this.technologies = [];


    this.addTechnologies = function (technologie) {
        this.technologies.push(technologie);
    }
}

WebApp.prototype.getData = function () {
    console.log(this.name + "\n " + this.url + "\n " + this.technologies + "\n " + this.licence + "\n " + this.star);
}

WebApp.prototype.reactBased = function () {
    if (this.technologies.indexOf('React') >= 0) {
        return true
    }
};

function MobalApp(name, platforms, licence, stars) {
    commonFeatures.call(this, name, licence, stars);
    this.platforms = [];


    this.addPlatform = function (platform) {
        this.platforms.push(platform);
    }


}
MobalApp.prototype.getData = function () {
    console.log(this.name + "\n " + this.platforms + "\n " + this.licence + "\n " + this.star)
}

MobalApp.prototype.forAndroid = function () {
    if (this.platforms.indexOf('Android') >= 0) {
        return true
    }
}

function commonFeatures(name, licence, stars) {

    this.name = name;
    this.licence = licence;
    this.stars = stars;

    this.isCC = function () {
        if (this.licence === "CC") {
            return true
        }
        else {
            console.log("Licence is not CC")
        }
    }

    this.like = function () {
        return this.stars += '*'
    }

    this.showStars = function () {
        console.log(this.stars);
    }
}
var duolingo = new WebApp("Duolingo", "#", "hdsfhdj", "***");
duolingo.like()
duolingo.addTechnologies("React");
duolingo.addTechnologies("PHP");
duolingo.addTechnologies("Boothstrap");
duolingo.isCC();
console.log(duolingo);