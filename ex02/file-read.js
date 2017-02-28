const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "hello.tex"),
            { encoding: "utf-8"},
            function(err, data){
    if (err) console.log("エラー");
    console.log(process.cwd());
    process.chdir();
    console.log("ファイルの内容は以下の通り");
    console.log(data);
});