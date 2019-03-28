var figlet = require('figlet');


const result = figlet('Hello World!!', function (err, data) {


    figlet('MARIJA!!!', function (err, data) {

        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }

        return data
    });

    module.exports = result

    console.log(data)
});

