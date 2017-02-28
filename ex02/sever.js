const http = require("http");
const server = http.createServer(function (req, res){
    console.log(req.method + ": " + req.url);
    res.end("Hello Node!");
});
const port = 8080;
server.listen(port, function() {
    console.log('server runing on port' + port);
});