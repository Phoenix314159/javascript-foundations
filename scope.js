//lexical scope

var foo = 'bar'; //formal variable declaration

function bar() {  //formal function declaration
   // console.log(foo) === undefined
   // window.foo === 'bar'
    var foo = 'baz'; // different foo on different levels of scope (shadowing)
    // console.log(foo) = 'baz'
}

function baz(foo) {
    foo = 'bam';
    bam = 'yay'; // implicitly creates bam on global scope
}


//"use strict" mode would throw a reference error on line 14