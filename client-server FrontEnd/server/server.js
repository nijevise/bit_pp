const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const post = require('./api.js')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify(post))
   
})

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
})