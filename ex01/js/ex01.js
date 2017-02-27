console.log("春はよ");

var main = document.getElementsByClassName("main");
main[0].insertAdjacentHTML("afterbegin","<p>サンプル</p>");

(function sample(){
    console.log("test");
})();

var neko = function(name){
    this.name = name;
    neko.prototype.run = function(){
        console.log(this.name + "がめっちゃ走る。");
    };
};

var mike = new neko("たま");
mike.run();
console.log(mike,name);