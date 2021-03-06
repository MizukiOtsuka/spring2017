const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/chat.html");
});

io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("chat message", function (msg) {
        console.log("message: " + msg);
        io.emit("chat message", msg);
    });
});

http.listen(port, function () {
    console.log("server runing on port:" + port);
});