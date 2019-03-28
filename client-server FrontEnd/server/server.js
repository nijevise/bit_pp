const http = require('http')
const hostname = '127.0.0.1'
const port = 5500
const post = require('./api')

const server = http.createServer((req, res) => {
    res.statusCode = 200

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p>${post}</p>`)


    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify(post))


})

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
})