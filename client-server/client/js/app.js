import * as data from './data.js'
import * as ui from './ui.js'

function init() {
    console.log('Initilaze the page')
    data.getData(ui.displayError)
        .then(result => {
            ui.displayPosts(result)
        })

}

export { init }