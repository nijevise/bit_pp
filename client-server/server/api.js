const LoremIpsum = require('lorem-ipsum').LoremIpsum

postArr = []

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 2,
        min: 2
    },
    wordsPerSentence: {
        max: 3,
        min: 2
    }
})

class Post {
    constructor() {
        this.id = Math.floor(Math.random() * 100)
        this.title = lorem.generateWords(3)
        this.body = lorem.generateSentences(2)
    }
}

for (let i = 0; i < 10; i++) {
    let post = new Post()
    postArr.push(post)
}

module.exports = postArr