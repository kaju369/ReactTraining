require('./foo1.js');
foo();
var buz= require('./buz.js');
buz.log();
var baz= require('./baz.js');
baz.log();
var Doo= require('./doo.js');
var doo= new Doo();
doo.log();
 var Quiz= require('./quiz.js').Quiz;
 var quiz= new Quiz();
 quiz.log();