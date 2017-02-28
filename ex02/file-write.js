const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dername + "hello.txt"), "Node始めた\n",
            function(err){
    if (err) return console.log("エラー");
});