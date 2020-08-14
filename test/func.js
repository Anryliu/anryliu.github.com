//使用构造函数条用函数
//构造函数
// function myFunction(x,y) {
//     this.firstname = x;
//     this.lastname = y;
// }
// ////如果函数调用钱使用了new关键字，则是调用了构造函数
// var x= new myFunction(1,2);
// x.firstname //返回1

//构造函数的调用会创建一个新对象，新对象会继承构造函数的属性和方法
// 构造函数this管牛腱子没有任何职


// 作为函数方法调用函数
function mnult(a,b) {
    this.x =1;
    return  a*b;

}
var myobj = mnult.call(myobj,10,2);
var arr  = [10,2];
myobj = mnult.apply(myobj,arr);
//this 指向的是，调用函数的那个对象

