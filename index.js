function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction(){
    return function namedFunction(){
        console.log(`I am a named function.`)
    };
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log(`This is an anonymous function.`);
    };
}
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
};