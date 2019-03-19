

class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    isCCLicence() {
        if (this.licence === "CC") {
            return true;
        } else {
            return ("This is not CC")
        }
    }

    like() {
        return this.stars += 1;
    }

    showStars() {
        console.log(showStars());
    }
};

class WebApp extends App {
    constructor(name, url, licence, stars, technologies = []) {
        super(name, licence, stars)
        this.url = url;
        this.technologies = technologies;

    }
    getData() {
        return `${this.name}, ${this.url}, ${this.technologies}, ${this.licence}, ${this.stars}`;
    }
    addTechnologies(technologies) {
        return this.technologies.push(technologies);
    }
    reactBased() {
        if (this.technologies.indexOf("react") >= 0) {

            return true;
        }

    };
}

class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars)
        this.platforms = [];

    }
    addPlatforms(platforms) {
        return this.platforms.push(platforms);
    }
    getData() {
        return `${this.name}, ${this.platforms}, ${this.licence}, ${this.stars}`;
    }
    forAndroid() {
        if (this.platforms.indexOf("android") >= 0) {
            return true;
        }
    }
}

const sololearn = new WebApp('SoloLearn', 'https://sololearn.com', 'CC', 4, ['react', 'angular']);
console.log(sololearn);
console.log(sololearn.isCCLicence());
console.log(sololearn.like());


