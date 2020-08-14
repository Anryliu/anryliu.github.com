console.time();
setTimeout(function () {
    console.timeEnd();
}, 1000);

// function sayname(){
//     //  name  = 'anry';//会挂载到global对象上；
//     this.name = 'anry';
//     console.log(name);
//     console.log(this.name); //this指向全局对象
// }
// sayname();


var sayname = function () {
    this.name = 'anry';
    console.log(name);
    console.log(this.name);//this指向全局对象 
}
sayname();
(function (x, y) {
    // alert(x + y);
    return x + y;
})(3, 4);
-function (x) {
    x -= 1;
}(9);
new function () {
    console.log(this) // 这里的this就不是window了
}
function A(x, y) {
    alert(x + y);
    return x + y;
} (3, 4);
(function () {
    console.log('water');
}());


function C1(f){
    var outerParam = arguments
}
