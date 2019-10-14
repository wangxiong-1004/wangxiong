
// 变量
var message = 'hi';

var num = 10,
    found = false,
    age = 29;

function show() {
    var time = new Date(); // 局部变量

    wang = 'js'; // 全局变量 -- 未调用不会定义，调用后在全局环境定义
}

// show();

// 数据类型
var num2 = 100;
var str = 'hello world';
var bool = true;
var obj = {};
var un = undefined;
var nu = null;

typeof num2; // 'number'
typeof str; // 'string'
typeof bool; // 'boolean'
typeof obj; // 'object'
typeof un; // 'undefined'
typeof nu; // 'object'
typeof show; // 'function'

null == undefined; // true